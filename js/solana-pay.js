// Purple Squirrel Media - Solana Pay Integration
// Zero-fee payments using Solana blockchain

const PSM_PAY = {
    // Your Solana wallet address for receiving payments
    MERCHANT_WALLET: 'YOUR_SOLANA_WALLET_ADDRESS', // Replace with your wallet

    // Subscription tiers in SOL (prices will fluctuate with SOL price)
    TIERS: {
        basic: {
            name: 'Basic',
            priceSOL: 0.05,  // ~$10 at $200/SOL
            priceUSDC: 9.99,
            features: ['HD Streaming', 'Basic Library', 'Mobile Access']
        },
        pro: {
            name: 'Pro',
            priceSOL: 0.1,   // ~$20 at $200/SOL
            priceUSDC: 19.99,
            features: ['4K Streaming', 'Full Library', 'Download', 'No Ads']
        },
        creator: {
            name: 'Creator',
            priceSOL: 0.25,  // ~$50 at $200/SOL
            priceUSDC: 49.99,
            features: ['Unlimited Upload', 'Monetization', 'Analytics', 'Priority Support']
        }
    },

    // USDC on Solana (for stable pricing)
    USDC_MINT: 'EPjFWdd5AufqSSqeM2qN1xzybapC8G4wEGGkZwyTDt1v',

    // Initialize
    async init() {
        this.connection = null;
        this.provider = null;

        if (window.solana && window.solana.isPhantom) {
            this.provider = window.solana;
        }

        return this;
    },

    // Create payment request URL (for QR codes)
    createPaymentURL(tier, payInUSDC = false) {
        const tierData = this.TIERS[tier];
        if (!tierData) throw new Error('Invalid tier');

        const amount = payInUSDC ? tierData.priceUSDC : tierData.priceSOL;
        const token = payInUSDC ? this.USDC_MINT : null;

        // Solana Pay URL format
        let url = `solana:${this.MERCHANT_WALLET}?amount=${amount}`;
        if (token) {
            url += `&spl-token=${token}`;
        }
        url += `&label=Purple%20Squirrel%20Media`;
        url += `&message=${encodeURIComponent(`${tierData.name} Subscription`)}`;
        url += `&memo=${encodeURIComponent(`sub_${tier}_${Date.now()}`)}`;

        return url;
    },

    // Process payment directly from browser
    async payWithWallet(tier, payInUSDC = false) {
        if (!this.provider) {
            return { success: false, error: 'Please install Phantom wallet' };
        }

        try {
            // Connect wallet if not connected
            await this.provider.connect();
            const publicKey = this.provider.publicKey;

            const tierData = this.TIERS[tier];
            const amount = payInUSDC ? tierData.priceUSDC : tierData.priceSOL;

            // Create transaction reference for tracking
            const reference = this.generateReference();

            if (payInUSDC) {
                // SPL Token transfer (USDC)
                return await this.transferSPLToken(publicKey, amount, reference, tier);
            } else {
                // Native SOL transfer
                return await this.transferSOL(publicKey, amount, reference, tier);
            }
        } catch (error) {
            if (error.code === 4001) {
                return { success: false, error: 'Transaction cancelled by user' };
            }
            return { success: false, error: error.message };
        }
    },

    // Transfer SOL
    async transferSOL(fromPubkey, amount, reference, tier) {
        // Using @solana/web3.js loaded from CDN
        const { Connection, PublicKey, Transaction, SystemProgram, LAMPORTS_PER_SOL } = window.solanaWeb3;

        const connection = new Connection('https://api.mainnet-beta.solana.com');
        const toPubkey = new PublicKey(this.MERCHANT_WALLET);

        const transaction = new Transaction().add(
            SystemProgram.transfer({
                fromPubkey: fromPubkey,
                toPubkey: toPubkey,
                lamports: Math.round(amount * LAMPORTS_PER_SOL)
            })
        );

        // Get recent blockhash
        const { blockhash } = await connection.getLatestBlockhash();
        transaction.recentBlockhash = blockhash;
        transaction.feePayer = fromPubkey;

        // Sign and send
        const signed = await this.provider.signTransaction(transaction);
        const signature = await connection.sendRawTransaction(signed.serialize());

        // Confirm transaction
        await connection.confirmTransaction(signature);

        // Notify backend
        await this.recordPayment(signature, tier, amount, 'SOL');

        return {
            success: true,
            signature,
            tier,
            amount,
            currency: 'SOL'
        };
    },

    // Transfer USDC (SPL Token)
    async transferSPLToken(fromPubkey, amount, reference, tier) {
        const { Connection, PublicKey, Transaction } = window.solanaWeb3;
        const { createTransferInstruction, getAssociatedTokenAddress, TOKEN_PROGRAM_ID } = window.splToken;

        const connection = new Connection('https://api.mainnet-beta.solana.com');
        const toPubkey = new PublicKey(this.MERCHANT_WALLET);
        const usdcMint = new PublicKey(this.USDC_MINT);

        // Get token accounts
        const fromTokenAccount = await getAssociatedTokenAddress(usdcMint, fromPubkey);
        const toTokenAccount = await getAssociatedTokenAddress(usdcMint, toPubkey);

        // USDC has 6 decimals
        const transferAmount = Math.round(amount * 1_000_000);

        const transaction = new Transaction().add(
            createTransferInstruction(
                fromTokenAccount,
                toTokenAccount,
                fromPubkey,
                transferAmount,
                [],
                TOKEN_PROGRAM_ID
            )
        );

        const { blockhash } = await connection.getLatestBlockhash();
        transaction.recentBlockhash = blockhash;
        transaction.feePayer = fromPubkey;

        const signed = await this.provider.signTransaction(transaction);
        const signature = await connection.sendRawTransaction(signed.serialize());
        await connection.confirmTransaction(signature);

        await this.recordPayment(signature, tier, amount, 'USDC');

        return {
            success: true,
            signature,
            tier,
            amount,
            currency: 'USDC'
        };
    },

    // Record payment in backend
    async recordPayment(signature, tier, amount, currency) {
        try {
            const response = await fetch('http://163.192.105.31:8080/api/v1/payments/record', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    ...PSM_AUTH.getAuthHeaders()
                },
                body: JSON.stringify({
                    signature,
                    tier,
                    amount,
                    currency,
                    wallet: this.provider.publicKey.toString()
                })
            });

            if (!response.ok) {
                console.error('Failed to record payment');
            }
        } catch (error) {
            console.error('Payment recording error:', error);
        }
    },

    // Generate unique reference
    generateReference() {
        return Array.from(crypto.getRandomValues(new Uint8Array(32)))
            .map(b => b.toString(16).padStart(2, '0'))
            .join('');
    },

    // Verify payment on-chain
    async verifyPayment(signature) {
        const { Connection } = window.solanaWeb3;
        const connection = new Connection('https://api.mainnet-beta.solana.com');

        try {
            const result = await connection.getTransaction(signature, {
                commitment: 'confirmed'
            });

            return {
                success: result !== null,
                confirmed: result?.meta?.err === null,
                slot: result?.slot,
                blockTime: result?.blockTime
            };
        } catch (error) {
            return { success: false, error: error.message };
        }
    },

    // Get current SOL price in USD (for display)
    async getSOLPrice() {
        try {
            const response = await fetch('https://api.coingecko.com/api/v3/simple/price?ids=solana&vs_currencies=usd');
            const data = await response.json();
            return data.solana.usd;
        } catch (error) {
            return null; // Fallback: don't show USD conversion
        }
    },

    // Format price for display
    async formatPrices(tier) {
        const tierData = this.TIERS[tier];
        const solPrice = await this.getSOLPrice();

        return {
            sol: `${tierData.priceSOL} SOL`,
            solUSD: solPrice ? `~$${(tierData.priceSOL * solPrice).toFixed(2)}` : null,
            usdc: `$${tierData.priceUSDC} USDC`
        };
    }
};

// NFT Membership Check
const PSM_NFT = {
    // NFT Collection address (create your own on Metaplex)
    COLLECTION_MINT: 'YOUR_NFT_COLLECTION_ADDRESS',

    // Check if wallet holds membership NFT
    async checkMembership(walletAddress) {
        try {
            const response = await fetch(`http://163.192.105.31:8080/api/v1/nft/check?wallet=${walletAddress}`);
            const data = await response.json();
            return {
                hasMembership: data.hasMembership,
                tier: data.tier,
                tokenId: data.tokenId
            };
        } catch (error) {
            return { hasMembership: false, error: error.message };
        }
    },

    // Mint membership NFT after payment
    async mintMembershipNFT(tier) {
        try {
            const response = await fetch('http://163.192.105.31:8080/api/v1/nft/mint', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    ...PSM_AUTH.getAuthHeaders()
                },
                body: JSON.stringify({
                    tier,
                    wallet: window.solana?.publicKey?.toString()
                })
            });

            const data = await response.json();
            return { success: true, ...data };
        } catch (error) {
            return { success: false, error: error.message };
        }
    }
};

// Auto-initialize
document.addEventListener('DOMContentLoaded', () => PSM_PAY.init());

// Export
window.PSM_PAY = PSM_PAY;
window.PSM_NFT = PSM_NFT;

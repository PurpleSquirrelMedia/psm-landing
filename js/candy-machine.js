/**
 * PURPLEX Candy Machine v3 Integration
 * Handles minting from marketplace with Phantom and Crossmint
 */

import {
    Connection,
    PublicKey,
    Transaction,
    clusterApiUrl
} from '@solana/web3.js';

// Configuration - Update these after deployment
const CONFIG = {
    CANDY_MACHINE_ID: 'YOUR_CANDY_MACHINE_ID',
    COLLECTION_MINT: 'YOUR_COLLECTION_MINT',
    RPC_ENDPOINT: clusterApiUrl('mainnet-beta'),
    CROSSMINT_CLIENT_ID: 'YOUR_CROSSMINT_CLIENT_ID',
    CROSSMINT_COLLECTION_ID: 'YOUR_CROSSMINT_COLLECTION_ID',

    // Tier configurations
    TIERS: {
        bronze: {
            label: 'bronze',
            price: 0.25,
            priceUsd: 49,
            supply: 5000
        },
        silver: {
            label: 'silver',
            price: 0.75,
            priceUsd: 149,
            supply: 3000
        },
        gold: {
            label: 'gold',
            price: 2.5,
            priceUsd: 499,
            supply: 1500
        },
        diamond: {
            label: 'diamond',
            price: 10,
            priceUsd: 1999,
            supply: 500
        }
    }
};

// Connection instance
let connection = null;
let wallet = null;

/**
 * Initialize connection
 */
export function initConnection() {
    connection = new Connection(CONFIG.RPC_ENDPOINT, 'confirmed');
    return connection;
}

/**
 * Connect Phantom wallet
 */
export async function connectPhantom() {
    if (typeof window.solana === 'undefined' || !window.solana.isPhantom) {
        window.open('https://phantom.app/', '_blank');
        throw new Error('Phantom wallet not installed');
    }

    try {
        const response = await window.solana.connect();
        wallet = {
            publicKey: response.publicKey,
            signTransaction: window.solana.signTransaction.bind(window.solana),
            signAllTransactions: window.solana.signAllTransactions.bind(window.solana)
        };
        return wallet;
    } catch (err) {
        console.error('Wallet connection failed:', err);
        throw err;
    }
}

/**
 * Disconnect wallet
 */
export async function disconnectWallet() {
    if (window.solana) {
        await window.solana.disconnect();
    }
    wallet = null;
}

/**
 * Get wallet balance
 */
export async function getBalance() {
    if (!wallet || !connection) return 0;
    const balance = await connection.getBalance(wallet.publicKey);
    return balance / 1e9; // Convert lamports to SOL
}

/**
 * Mint NFT with Phantom
 * @param {string} tier - Tier to mint (bronze, silver, gold, diamond)
 */
export async function mintWithPhantom(tier) {
    if (!wallet) {
        throw new Error('Wallet not connected');
    }

    if (!CONFIG.TIERS[tier]) {
        throw new Error('Invalid tier');
    }

    const tierConfig = CONFIG.TIERS[tier];

    // Check balance
    const balance = await getBalance();
    if (balance < tierConfig.price) {
        throw new Error(`Insufficient balance. Need ${tierConfig.price} SOL, have ${balance.toFixed(4)} SOL`);
    }

    try {
        // In production, this would use Metaplex SDK
        // const { nft } = await metaplex.candyMachines().mint({
        //     candyMachine: new PublicKey(CONFIG.CANDY_MACHINE_ID),
        //     collectionUpdateAuthority: new PublicKey(CONFIG.COLLECTION_MINT),
        //     group: tierConfig.label
        // });

        console.log(`Minting ${tier} tier NFT...`);

        // Placeholder for actual minting logic
        // This would be implemented with @metaplex-foundation/js

        return {
            success: true,
            tier: tier,
            price: tierConfig.price,
            message: `Successfully minted PURPLEX ${tier} NFT!`
        };
    } catch (err) {
        console.error('Minting failed:', err);
        throw err;
    }
}

/**
 * Mint with Crossmint (credit card)
 * @param {string} tier - Tier to mint
 * @param {string} email - Buyer's email
 */
export function mintWithCrossmint(tier, email) {
    if (!CONFIG.TIERS[tier]) {
        throw new Error('Invalid tier');
    }

    const tierConfig = CONFIG.TIERS[tier];

    // Open Crossmint checkout
    const checkoutUrl = new URL('https://www.crossmint.com/checkout');
    checkoutUrl.searchParams.set('clientId', CONFIG.CROSSMINT_CLIENT_ID);
    checkoutUrl.searchParams.set('collectionId', CONFIG.CROSSMINT_COLLECTION_ID);
    checkoutUrl.searchParams.set('mintConfig', JSON.stringify({
        type: 'candy-machine',
        group: tierConfig.label,
        quantity: 1
    }));

    if (email) {
        checkoutUrl.searchParams.set('emailAddress', email);
    }

    // Open in popup or redirect
    const popup = window.open(
        checkoutUrl.toString(),
        'crossmint-checkout',
        'width=450,height=700,left=100,top=100'
    );

    return popup;
}

/**
 * Get Candy Machine stats
 */
export async function getCandyMachineStats() {
    if (!connection) {
        initConnection();
    }

    try {
        // In production, fetch from Candy Machine account
        // const candyMachine = await metaplex.candyMachines().findByAddress({
        //     address: new PublicKey(CONFIG.CANDY_MACHINE_ID)
        // });

        // Placeholder stats
        return {
            totalSupply: 10000,
            itemsMinted: 2847,
            itemsRemaining: 7153,
            tiers: {
                bronze: { minted: 1500, remaining: 3500 },
                silver: { minted: 800, remaining: 2200 },
                gold: { minted: 400, remaining: 1100 },
                diamond: { minted: 147, remaining: 353 }
            }
        };
    } catch (err) {
        console.error('Failed to fetch stats:', err);
        throw err;
    }
}

/**
 * Check if user owns PURPLEX NFT
 * @param {string} walletAddress - Wallet to check
 */
export async function checkOwnership(walletAddress) {
    if (!connection) {
        initConnection();
    }

    try {
        // In production, query NFTs by collection
        // const nfts = await metaplex.nfts().findAllByOwner({
        //     owner: new PublicKey(walletAddress)
        // });

        return {
            owns: false,
            tier: null,
            tokenId: null
        };
    } catch (err) {
        console.error('Failed to check ownership:', err);
        return { owns: false, tier: null, tokenId: null };
    }
}

/**
 * Get holder benefits based on tier
 * @param {string} tier - NFT tier
 */
export function getTierBenefits(tier) {
    const benefits = {
        bronze: [
            'POWER PLAY basic streaming access',
            'Shot data tracking (limited)',
            'Community Discord access',
            'Basic video library'
        ],
        silver: [
            'POWER PLAY HD streaming',
            'Advanced shot analytics',
            'Discord + exclusive events',
            'Extended video library',
            'Pro tips series access'
        ],
        gold: [
            'POWER PLAY 4K streaming',
            'Full analytics suite',
            'AI swing analysis',
            'VIP Discord + events',
            'Full video library',
            'Pro lessons & BTS content',
            'Tournament priority registration'
        ],
        diamond: [
            'POWER PLAY 4K + multi-angle',
            'Enterprise analytics',
            'Unlimited AI coaching',
            'Monthly 1-on-1 coaching session',
            'Founders Club access',
            '50% off Seeker Phone',
            'DAO governance voting',
            'Free tournament entry + perks',
            'Lifetime access'
        ]
    };

    return benefits[tier] || [];
}

// Export config for external use
export { CONFIG };

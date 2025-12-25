# PURPLEX Candy Machine v3 Deployment

## Collection Overview

| Tier | Supply | Price (SOL) | Price (USD) | Features |
|------|--------|-------------|-------------|----------|
| Bronze | 5,000 | 0.25 | $49 | Basic streaming, shot tracking |
| Silver | 3,000 | 0.75 | $149 | HD streaming, advanced analytics |
| Gold | 1,500 | 2.5 | $499 | 4K streaming, AI analysis, tournaments |
| Diamond | 500 | 10 | $1,999 | Lifetime access, coaching, governance |

**Total Supply: 10,000 NFTs**

## Prerequisites

```bash
# Install Solana CLI
sh -c "$(curl -sSfL https://release.solana.com/v1.17.0/install)"

# Install Sugar CLI (Metaplex Candy Machine tool)
bash <(curl -sSf https://sugar.metaplex.com/install.sh)

# Verify installations
solana --version
sugar --version
```

## Setup

### 1. Configure Wallet

```bash
# Create new wallet (or use existing)
solana-keygen new --outfile ~/.config/solana/purplex-wallet.json

# Set as default
solana config set --keypair ~/.config/solana/purplex-wallet.json

# Set to devnet for testing
solana config set --url devnet

# Airdrop SOL for testing
solana airdrop 2
```

### 2. Update Configuration

Edit `config.json` and replace placeholders:
- `YOUR_CREATOR_WALLET_ADDRESS` - Your Solana wallet address
- `YOUR_TREASURY_WALLET_ADDRESS` - Address to receive mint proceeds
- `SILVER_ALLOWLIST_MERKLE_ROOT` - Merkle root for Silver tier allowlist
- `PURP_TOKEN_MINT_ADDRESS` - PURP token mint (for Gold tier gate)
- `GENESIS_COLLECTION_ADDRESS` - Genesis NFT collection (for Diamond tier gate)
- `CROSSMINT_SIGNER_ADDRESS` - Crossmint's signer for credit card mints

### 3. Prepare Assets

Place your NFT images in the `assets/` folder:
- `0.png` to `4999.png` - Bronze tier
- `5000.png` to `7999.png` - Silver tier
- `8000.png` to `9499.png` - Gold tier
- `9500.png` to `9999.png` - Diamond tier

Each image needs a corresponding JSON metadata file.

### 4. Validate Configuration

```bash
sugar validate
```

### 5. Upload Assets

```bash
# Upload to Bundlr (Arweave)
sugar upload

# Or use Shadow Drive
sugar upload --config config-shadow.json
```

### 6. Deploy Candy Machine

```bash
sugar deploy
```

### 7. Verify Deployment

```bash
sugar verify
```

## Guard Configuration

### Bronze Tier (Public)
- Price: 0.25 SOL
- No restrictions, anyone can mint
- Max 5 per wallet

### Silver Tier (Allowlist)
- Price: 0.75 SOL
- Requires allowlist proof
- Generate merkle tree:

```bash
sugar guard add --allowlist silver-allowlist.json
```

### Gold Tier (Token Gated)
- Price: 2.5 SOL
- Requires 100+ PURP tokens
- Must hold tokens during mint

### Diamond Tier (NFT Gated)
- Price: 10 SOL
- Requires Genesis Collection NFT
- Ultra-exclusive tier

### Crossmint Integration
- Third-party signer enabled
- Allows credit card purchases
- Configure in Crossmint dashboard

## Crossmint Setup

1. Create account at https://crossmint.com
2. Register your collection
3. Add your Candy Machine ID
4. Configure webhook for mint confirmation
5. Copy Client ID to frontend

## Frontend Integration

Update `marketplace.html` with your deployed Candy Machine:

```javascript
const CANDY_MACHINE_ID = 'YOUR_CANDY_MACHINE_ID';
const COLLECTION_MINT = 'YOUR_COLLECTION_MINT';
```

## Mainnet Deployment

```bash
# Switch to mainnet
solana config set --url mainnet-beta

# Ensure sufficient SOL for deployment (~2 SOL)
solana balance

# Deploy
sugar deploy

# Verify
sugar verify
```

## Commands Reference

```bash
# Check collection status
sugar show

# Withdraw funds from treasury
sugar withdraw

# Update guards
sugar guard update

# Freeze/thaw minting
sugar freeze
sugar thaw

# Reveal hidden NFTs (if using hidden settings)
sugar reveal
```

## Troubleshooting

### "Insufficient funds"
Ensure your wallet has enough SOL for deployment costs.

### "Invalid merkle proof"
Regenerate allowlist with `sugar guard add`.

### "Token gate failed"
User must hold required tokens BEFORE minting.

## Support

- Discord: https://discord.gg/purplesquirrel
- Docs: https://docs.purplesquirrel.media
- Metaplex: https://docs.metaplex.com

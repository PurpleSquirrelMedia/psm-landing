# Purple Squirrel Design System

Web3 Native design system built on Tailwind CSS. Solana-inspired, streaming-optimized.

## Quick Start

### Option 1: CSS Only (Any Framework)
```html
<link href="https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@400;500;600;700&display=swap" rel="stylesheet">
<link rel="stylesheet" href="design-system/tokens.css">
<link rel="stylesheet" href="design-system/components.css">
```

### Option 2: Tailwind (React/Vue/etc)
```bash
npm install tailwindcss
cp design-system/tailwind.config.js ./
```

## Brand Colors

| Token | Hex | Usage |
|-------|-----|-------|
| `--ps-purple` | `#9945FF` | Primary brand, CTAs |
| `--ps-green` | `#14F195` | Success, live indicators |
| `--ps-pink` | `#FF6B9D` | Accents, hover states |

## Components

### Buttons
```html
<button class="ps-btn ps-btn-primary">Get Started</button>
<button class="ps-btn ps-btn-secondary">Learn More</button>
<button class="ps-btn ps-btn-ghost">Cancel</button>
```

### Cards
```html
<div class="ps-card">
    <h3>Card Title</h3>
    <p>Card content goes here.</p>
</div>

<div class="ps-card ps-card-gradient">
    <!-- Has gradient top border -->
</div>
```

### Badges
```html
<span class="ps-badge">Solana</span>
<span class="ps-badge ps-badge-live">Live</span>
```

### Inputs
```html
<input class="ps-input" placeholder="Enter email">
```

### Typography
```html
<h1 class="ps-heading-xl">Big Title</h1>
<h2 class="ps-heading-lg">Section Title</h2>
<span class="ps-text-gradient">Gradient Text</span>
<p class="ps-text-muted">Secondary text</p>
```

### Layout
```html
<div class="ps-container">
    <div class="ps-grid ps-grid-3">
        <div class="ps-card">1</div>
        <div class="ps-card">2</div>
        <div class="ps-card">3</div>
    </div>
</div>
```

### Effects
```html
<div class="ps-glass">Glass morphism panel</div>
<div class="ps-glow">Purple glow shadow</div>
<div class="ps-bg-animated">Animated gradient background</div>
<div class="ps-animate-float">Floating animation</div>
```

## Spacing Scale

Based on 4px increments:
- `--ps-space-1`: 4px
- `--ps-space-2`: 8px
- `--ps-space-4`: 16px
- `--ps-space-6`: 24px
- `--ps-space-8`: 32px
- `--ps-space-12`: 48px
- `--ps-space-16`: 64px

## Dark/Light Mode

Dark mode is default. Toggle with:
```html
<html data-theme="dark">  <!-- default -->
<html data-theme="light"> <!-- light mode -->
```

## Browser Support

- Chrome 80+
- Firefox 75+
- Safari 13+
- Edge 80+

Works with: React, Vue, Svelte, Next.js, vanilla HTML

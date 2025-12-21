// Purple Squirrel Media - Authentication Module
// Supports: Email, Google, Apple, Solana Wallet

const PSM_AUTH = {
    // Supabase config - will be set up
    supabaseUrl: 'https://your-project.supabase.co',
    supabaseKey: 'your-anon-key',
    supabase: null,

    // Current user state
    user: null,
    session: null,

    // Initialize auth
    async init() {
        // Check for existing session
        const stored = localStorage.getItem('psm_session');
        if (stored) {
            try {
                this.session = JSON.parse(stored);
                this.user = this.session.user;
                this.updateUI();
            } catch (e) {
                localStorage.removeItem('psm_session');
            }
        }

        // Listen for auth state changes
        window.addEventListener('storage', (e) => {
            if (e.key === 'psm_session') {
                this.handleStorageChange(e);
            }
        });

        return this;
    },

    // Email/Password Sign Up
    async signUp(email, password, name) {
        try {
            // Call Oracle API for registration
            const response = await fetch('https://sound-prospective-handheld-turtle.trycloudflare.com/api/v1/auth/register', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ email, password, name })
            });

            if (!response.ok) {
                const error = await response.json();
                throw new Error(error.message || 'Registration failed');
            }

            const data = await response.json();
            this.setSession(data);
            return { success: true, user: data.user };
        } catch (error) {
            return { success: false, error: error.message };
        }
    },

    // Email/Password Sign In
    async signIn(email, password) {
        try {
            const response = await fetch('https://sound-prospective-handheld-turtle.trycloudflare.com/api/v1/auth/login', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ email, password })
            });

            if (!response.ok) {
                const error = await response.json();
                throw new Error(error.message || 'Login failed');
            }

            const data = await response.json();
            this.setSession(data);
            return { success: true, user: data.user };
        } catch (error) {
            return { success: false, error: error.message };
        }
    },

    // Google OAuth
    async signInWithGoogle() {
        // Redirect to Google OAuth via Oracle API
        window.location.href = 'https://sound-prospective-handheld-turtle.trycloudflare.com/api/v1/auth/google';
    },

    // Apple OAuth
    async signInWithApple() {
        window.location.href = 'https://sound-prospective-handheld-turtle.trycloudflare.com/api/v1/auth/apple';
    },

    // Solana Wallet Sign In
    async signInWithSolana() {
        if (!window.solana || !window.solana.isPhantom) {
            return { success: false, error: 'Please install Phantom wallet' };
        }

        try {
            // Connect wallet
            const resp = await window.solana.connect();
            const publicKey = resp.publicKey.toString();

            // Get nonce from server
            const nonceResp = await fetch(`https://sound-prospective-handheld-turtle.trycloudflare.com/api/v1/auth/solana/nonce?wallet=${publicKey}`);
            const { nonce } = await nonceResp.json();

            // Sign message
            const message = `Sign in to Purple Squirrel Media\nNonce: ${nonce}`;
            const encodedMessage = new TextEncoder().encode(message);
            const signedMessage = await window.solana.signMessage(encodedMessage, 'utf8');

            // Verify with server
            const verifyResp = await fetch('https://sound-prospective-handheld-turtle.trycloudflare.com/api/v1/auth/solana/verify', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({
                    wallet: publicKey,
                    signature: Array.from(signedMessage.signature),
                    nonce
                })
            });

            if (!verifyResp.ok) {
                throw new Error('Wallet verification failed');
            }

            const data = await verifyResp.json();
            this.setSession(data);
            return { success: true, user: data.user };
        } catch (error) {
            if (error.code === 4001) {
                return { success: false, error: 'User rejected the request' };
            }
            return { success: false, error: error.message };
        }
    },

    // Sign Out
    async signOut() {
        try {
            await fetch('https://sound-prospective-handheld-turtle.trycloudflare.com/api/v1/auth/logout', {
                method: 'POST',
                headers: this.getAuthHeaders()
            });
        } catch (e) {
            // Continue with local logout even if API fails
        }

        this.user = null;
        this.session = null;
        localStorage.removeItem('psm_session');
        this.updateUI();
        window.location.href = '/';
    },

    // Set session
    setSession(data) {
        this.session = {
            token: data.token,
            user: data.user,
            expiresAt: data.expiresAt
        };
        this.user = data.user;
        localStorage.setItem('psm_session', JSON.stringify(this.session));
        this.updateUI();
    },

    // Get auth headers for API calls
    getAuthHeaders() {
        if (!this.session?.token) return {};
        return {
            'Authorization': `Bearer ${this.session.token}`
        };
    },

    // Check if user is authenticated
    isAuthenticated() {
        if (!this.session) return false;
        if (this.session.expiresAt && new Date(this.session.expiresAt) < new Date()) {
            this.signOut();
            return false;
        }
        return true;
    },

    // Check if user has role
    hasRole(role) {
        return this.user?.roles?.includes(role) || false;
    },

    // Check if user is creator
    isCreator() {
        return this.hasRole('creator');
    },

    // Check if user is subscriber
    isSubscriber() {
        return this.hasRole('subscriber') || this.user?.subscription?.active;
    },

    // Check if user has NFT membership
    hasNFT() {
        return this.user?.nftHolder || false;
    },

    // Update UI based on auth state
    updateUI() {
        const authButtons = document.querySelectorAll('[data-auth]');
        const userInfo = document.querySelectorAll('[data-user]');
        const protectedContent = document.querySelectorAll('[data-protected]');

        authButtons.forEach(btn => {
            const action = btn.dataset.auth;
            if (action === 'show-logged-in') {
                btn.style.display = this.isAuthenticated() ? '' : 'none';
            } else if (action === 'show-logged-out') {
                btn.style.display = this.isAuthenticated() ? 'none' : '';
            }
        });

        userInfo.forEach(el => {
            const field = el.dataset.user;
            if (this.user && field) {
                el.textContent = this.user[field] || '';
            }
        });

        protectedContent.forEach(el => {
            const requiredRole = el.dataset.protected;
            if (requiredRole === 'authenticated') {
                el.style.display = this.isAuthenticated() ? '' : 'none';
            } else if (requiredRole === 'creator') {
                el.style.display = this.isCreator() ? '' : 'none';
            } else if (requiredRole === 'subscriber') {
                el.style.display = this.isSubscriber() ? '' : 'none';
            }
        });
    },

    // Handle OAuth callback
    async handleCallback() {
        const params = new URLSearchParams(window.location.search);
        const token = params.get('token');
        const error = params.get('error');

        if (error) {
            return { success: false, error: decodeURIComponent(error) };
        }

        if (token) {
            // Fetch user data with token
            const response = await fetch('https://sound-prospective-handheld-turtle.trycloudflare.com/api/v1/auth/me', {
                headers: { 'Authorization': `Bearer ${token}` }
            });

            if (response.ok) {
                const user = await response.json();
                this.setSession({ token, user });

                // Clean URL
                window.history.replaceState({}, '', window.location.pathname);
                return { success: true, user };
            }
        }

        return { success: false, error: 'Invalid callback' };
    },

    handleStorageChange(e) {
        if (e.newValue) {
            try {
                this.session = JSON.parse(e.newValue);
                this.user = this.session.user;
            } catch (err) {
                this.session = null;
                this.user = null;
            }
        } else {
            this.session = null;
            this.user = null;
        }
        this.updateUI();
    }
};

// Auto-initialize
document.addEventListener('DOMContentLoaded', () => PSM_AUTH.init());

// Export for use in other scripts
window.PSM_AUTH = PSM_AUTH;

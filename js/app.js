/* ========================================
   Purple Squirrel Media - Landing Page JS
   ======================================== */

document.addEventListener('DOMContentLoaded', () => {
    initNavbar();
    initSmoothScroll();
    initCounterAnimation();
    initTabs();
    initAnimations();
    initMobileMenu();
    initLiveContent();
});

/* ========================================
   Navbar Scroll Effect
   ======================================== */
function initNavbar() {
    const navbar = document.querySelector('.navbar');
    const navLinks = document.querySelectorAll('.nav-links a');

    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }

        // Update active nav link based on scroll position
        const sections = document.querySelectorAll('section[id]');
        let current = '';

        sections.forEach(section => {
            const sectionTop = section.offsetTop - 100;
            if (window.scrollY >= sectionTop) {
                current = section.getAttribute('id');
            }
        });

        navLinks.forEach(link => {
            link.classList.remove('active');
            if (link.getAttribute('href') === `#${current}`) {
                link.classList.add('active');
            }
        });
    });
}

/* ========================================
   Smooth Scroll
   ======================================== */
function initSmoothScroll() {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });
}

/* ========================================
   Counter Animation
   ======================================== */
function initCounterAnimation() {
    const counters = document.querySelectorAll('.stat-number');
    const speed = 200;

    const animateCounter = (counter) => {
        const target = +counter.getAttribute('data-count');
        const increment = target / speed;

        const updateCount = () => {
            const count = +counter.innerText;
            if (count < target) {
                counter.innerText = Math.ceil(count + increment);
                setTimeout(updateCount, 1);
            } else {
                counter.innerText = target.toLocaleString() + '+';
            }
        };

        updateCount();
    };

    // Use Intersection Observer to trigger animation when visible
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                animateCounter(entry.target);
                observer.unobserve(entry.target);
            }
        });
    }, { threshold: 0.5 });

    counters.forEach(counter => observer.observe(counter));
}

/* ========================================
   Content Tabs
   ======================================== */
function initTabs() {
    const tabBtns = document.querySelectorAll('.tab-btn');
    const categories = document.querySelectorAll('.category');

    tabBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            // Update active tab
            tabBtns.forEach(b => b.classList.remove('active'));
            btn.classList.add('active');

            // Filter content (for now, just animate)
            categories.forEach(cat => {
                cat.style.opacity = '0';
                cat.style.transform = 'translateY(20px)';
                setTimeout(() => {
                    cat.style.opacity = '1';
                    cat.style.transform = 'translateY(0)';
                }, 300);
            });
        });
    });
}

/* ========================================
   Scroll Animations
   ======================================== */
function initAnimations() {
    const elements = document.querySelectorAll('[data-aos]');

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const delay = entry.target.getAttribute('data-aos-delay') || 0;
                setTimeout(() => {
                    entry.target.classList.add('aos-animate');
                }, delay);
            }
        });
    }, { threshold: 0.1 });

    elements.forEach(el => {
        el.classList.add('aos-init');
        observer.observe(el);
    });

    // Add CSS for animations
    const style = document.createElement('style');
    style.textContent = `
        .aos-init {
            opacity: 0;
            transform: translateY(30px);
            transition: opacity 0.6s ease, transform 0.6s ease;
        }
        .aos-animate {
            opacity: 1;
            transform: translateY(0);
        }
    `;
    document.head.appendChild(style);
}

/* ========================================
   Mobile Menu
   ======================================== */
function initMobileMenu() {
    const menuBtn = document.querySelector('.mobile-menu-btn');
    const navLinks = document.querySelector('.nav-links');

    if (menuBtn) {
        menuBtn.addEventListener('click', () => {
            navLinks.classList.toggle('mobile-open');
            menuBtn.innerHTML = navLinks.classList.contains('mobile-open')
                ? '<i class="fas fa-times"></i>'
                : '<i class="fas fa-bars"></i>';
        });
    }

    // Add mobile menu styles
    const style = document.createElement('style');
    style.textContent = `
        @media (max-width: 768px) {
            .nav-links.mobile-open {
                display: flex;
                flex-direction: column;
                position: absolute;
                top: 100%;
                left: 0;
                right: 0;
                background: rgba(26, 10, 46, 0.98);
                padding: 20px;
                gap: 15px;
                backdrop-filter: blur(20px);
            }
        }
    `;
    document.head.appendChild(style);
}

/* ========================================
   Live Content Simulation
   ======================================== */
function initLiveContent() {
    // Simulate live viewer counts
    const viewerCounts = document.querySelectorAll('.viewer-count');

    setInterval(() => {
        viewerCounts.forEach(counter => {
            const currentText = counter.textContent;
            const match = currentText.match(/[\d.]+k?/);
            if (match) {
                let value = parseFloat(match[0]);
                if (match[0].includes('k')) {
                    value *= 1000;
                }
                // Random fluctuation
                const change = Math.floor(Math.random() * 50) - 25;
                value = Math.max(100, value + change);

                if (value >= 1000) {
                    counter.innerHTML = `<i class="fas fa-eye"></i> ${(value / 1000).toFixed(1)}k`;
                } else {
                    counter.innerHTML = `<i class="fas fa-eye"></i> ${value}`;
                }
            }
        });
    }, 3000);

    // Simulate chat messages
    const chatMessages = document.querySelector('.chat-messages');
    const messages = [
        { user: 'Sarah', text: 'This is amazing!' },
        { user: 'Mike', text: 'Best platform ever' },
        { user: 'Emma', text: 'Love the quality' },
        { user: 'James', text: 'Hello everyone!' },
        { user: 'Lisa', text: 'Great content' },
        { user: 'David', text: 'Keep it up!' },
    ];

    if (chatMessages) {
        setInterval(() => {
            const msg = messages[Math.floor(Math.random() * messages.length)];
            const msgEl = document.createElement('div');
            msgEl.className = 'chat-msg';
            msgEl.innerHTML = `
                <span class="chat-user">${msg.user}</span>
                <span class="chat-text">${msg.text}</span>
            `;
            msgEl.style.opacity = '0';
            msgEl.style.transform = 'translateY(10px)';

            chatMessages.appendChild(msgEl);

            // Animate in
            setTimeout(() => {
                msgEl.style.transition = 'all 0.3s ease';
                msgEl.style.opacity = '1';
                msgEl.style.transform = 'translateY(0)';
            }, 50);

            // Remove old messages
            while (chatMessages.children.length > 5) {
                chatMessages.removeChild(chatMessages.firstChild);
            }
        }, 4000);
    }

    // Pulse effect on live badges
    document.querySelectorAll('.live-badge').forEach(badge => {
        badge.classList.add('pulse');
    });
}

/* ========================================
   API Integration (for OTT Platform)
   ======================================== */
const API = {
    baseUrl: 'http://localhost:8083',

    async getLiveChannels() {
        try {
            const response = await fetch(`${this.baseUrl}/api/channels/live`);
            return await response.json();
        } catch (error) {
            console.log('API not available, using mock data');
            return this.getMockChannels();
        }
    },

    async getContent(category) {
        try {
            const response = await fetch(`${this.baseUrl}/api/content?category=${category}`);
            return await response.json();
        } catch (error) {
            console.log('API not available, using mock data');
            return this.getMockContent(category);
        }
    },

    getMockChannels() {
        return [
            { id: 1, name: 'Fitness Camp', viewers: 1200, live: true, category: 'fitness' },
            { id: 2, name: 'Theatre Arts', viewers: 856, live: true, category: 'theatre' },
            { id: 3, name: 'Educate', viewers: 2100, live: true, category: 'education' },
        ];
    },

    getMockContent(category) {
        const content = {
            fitness: [
                { id: 1, title: 'Do Exercise 01', thumbnail: 'fitness-1' },
                { id: 2, title: 'Do Exercise 02', thumbnail: 'fitness-2' },
                { id: 3, title: 'Do Exercise 03', thumbnail: 'fitness-3' },
            ],
            theatre: [
                { id: 4, title: 'Theatre 01', thumbnail: 'theatre-1' },
                { id: 5, title: 'Theatre 02', thumbnail: 'theatre-2' },
                { id: 6, title: 'Theatre 03', thumbnail: 'theatre-3' },
            ],
            education: [
                { id: 7, title: 'Learn 01', thumbnail: 'education-1' },
                { id: 8, title: 'Learn 02', thumbnail: 'education-2' },
                { id: 9, title: 'Learn 03', thumbnail: 'education-3' },
            ],
        };
        return content[category] || [];
    }
};

/* ========================================
   Plex Integration (Optional)
   ======================================== */
const PlexIntegration = {
    baseUrl: 'http://localhost:32400',

    async getLibraries() {
        try {
            const response = await fetch(`${this.baseUrl}/library/sections`, {
                headers: {
                    'Accept': 'application/json',
                    'X-Plex-Token': localStorage.getItem('plexToken') || ''
                }
            });
            return await response.json();
        } catch (error) {
            console.log('Plex not available');
            return null;
        }
    },

    async getRecentlyAdded() {
        try {
            const response = await fetch(`${this.baseUrl}/library/recentlyAdded`, {
                headers: {
                    'Accept': 'application/json',
                    'X-Plex-Token': localStorage.getItem('plexToken') || ''
                }
            });
            return await response.json();
        } catch (error) {
            console.log('Plex not available');
            return null;
        }
    }
};

// Export for use in other modules
window.PurpleSquirrel = {
    API,
    PlexIntegration
};

console.log('Purple Squirrel Media - Landing Page Loaded');

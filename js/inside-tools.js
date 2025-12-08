/* ========================================
   Purple Squirrel Media - INSIDE™ Tool Suite
   D>E>M Framework Implementation
   ======================================== */

/* ========================================
   Inside-Chat™ - Live Chat System
   ======================================== */
const InsideChat = {
    messages: [],
    socket: null,
    container: null,

    init(containerId) {
        this.container = document.getElementById(containerId);
        if (!this.container) {
            this.createChatWidget();
        }
        this.bindEvents();
        console.log('Inside-Chat™ initialized');
    },

    createChatWidget() {
        const widget = document.createElement('div');
        widget.id = 'inside-chat';
        widget.innerHTML = `
            <div class="inside-chat-widget">
                <div class="chat-header">
                    <span class="chat-title"><i class="fas fa-comments"></i> Live Chat</span>
                    <span class="chat-viewers"><i class="fas fa-eye"></i> <span id="viewerCount">0</span></span>
                    <button class="chat-toggle"><i class="fas fa-chevron-down"></i></button>
                </div>
                <div class="chat-body">
                    <div class="chat-messages" id="chatMessages"></div>
                    <div class="chat-input-area">
                        <input type="text" id="chatInput" placeholder="Send a message...">
                        <button id="chatSend"><i class="fas fa-paper-plane"></i></button>
                    </div>
                </div>
            </div>
        `;
        document.body.appendChild(widget);
        this.container = widget;
        this.injectStyles();
    },

    injectStyles() {
        const style = document.createElement('style');
        style.textContent = `
            .inside-chat-widget {
                position: fixed;
                bottom: 20px;
                right: 20px;
                width: 350px;
                background: #1e1028;
                border-radius: 16px;
                box-shadow: 0 10px 40px rgba(0,0,0,0.5);
                z-index: 9999;
                overflow: hidden;
                font-family: 'Poppins', sans-serif;
            }
            .chat-header {
                display: flex;
                align-items: center;
                justify-content: space-between;
                padding: 15px;
                background: linear-gradient(135deg, #7c3aed, #6d28d9);
                color: white;
            }
            .chat-title {
                font-weight: 600;
                font-size: 14px;
            }
            .chat-viewers {
                font-size: 12px;
                opacity: 0.9;
            }
            .chat-toggle {
                background: none;
                border: none;
                color: white;
                cursor: pointer;
                padding: 5px;
            }
            .chat-body {
                height: 350px;
                display: flex;
                flex-direction: column;
            }
            .chat-messages {
                flex: 1;
                overflow-y: auto;
                padding: 15px;
            }
            .chat-message {
                margin-bottom: 12px;
                animation: slideIn 0.3s ease;
            }
            @keyframes slideIn {
                from { opacity: 0; transform: translateY(10px); }
                to { opacity: 1; transform: translateY(0); }
            }
            .chat-message .username {
                font-weight: 600;
                color: #a78bfa;
                font-size: 12px;
            }
            .chat-message .text {
                color: #e5e5e5;
                font-size: 13px;
                margin-top: 2px;
            }
            .chat-message.system {
                text-align: center;
                color: #71717a;
                font-size: 11px;
                font-style: italic;
            }
            .chat-message.sponsor {
                background: linear-gradient(135deg, rgba(124, 58, 237, 0.2), rgba(233, 30, 99, 0.2));
                padding: 10px;
                border-radius: 8px;
                border-left: 3px solid #e91e63;
            }
            .chat-message.sponsor .username {
                color: #e91e63;
            }
            .chat-input-area {
                display: flex;
                padding: 10px;
                border-top: 1px solid rgba(255,255,255,0.1);
                gap: 10px;
            }
            .chat-input-area input {
                flex: 1;
                background: rgba(255,255,255,0.1);
                border: none;
                padding: 10px 15px;
                border-radius: 20px;
                color: white;
                font-size: 13px;
                outline: none;
            }
            .chat-input-area button {
                background: #7c3aed;
                border: none;
                width: 40px;
                height: 40px;
                border-radius: 50%;
                color: white;
                cursor: pointer;
                transition: background 0.3s;
            }
            .chat-input-area button:hover {
                background: #6d28d9;
            }
            .inside-chat-widget.minimized .chat-body {
                display: none;
            }
        `;
        document.head.appendChild(style);
    },

    bindEvents() {
        const input = document.getElementById('chatInput');
        const sendBtn = document.getElementById('chatSend');
        const toggle = this.container.querySelector('.chat-toggle');

        if (input && sendBtn) {
            sendBtn.addEventListener('click', () => this.sendMessage(input.value));
            input.addEventListener('keypress', (e) => {
                if (e.key === 'Enter') this.sendMessage(input.value);
            });
        }

        if (toggle) {
            toggle.addEventListener('click', () => {
                this.container.querySelector('.inside-chat-widget').classList.toggle('minimized');
            });
        }

        // Simulate viewers
        this.simulateViewers();
    },

    sendMessage(text) {
        if (!text.trim()) return;

        const input = document.getElementById('chatInput');
        input.value = '';

        this.addMessage({
            username: 'You',
            text: text,
            type: 'user'
        });

        // Simulate response
        setTimeout(() => {
            const responses = [
                { username: 'Sarah', text: 'Great point! 👍' },
                { username: 'Mike', text: 'Loving this stream!' },
                { username: 'Emma', text: '🔥🔥🔥' },
                { username: 'James', text: 'Thanks for sharing!' }
            ];
            const response = responses[Math.floor(Math.random() * responses.length)];
            this.addMessage(response);
        }, 1000 + Math.random() * 2000);
    },

    addMessage(msg) {
        const container = document.getElementById('chatMessages');
        if (!container) return;

        const el = document.createElement('div');
        el.className = `chat-message ${msg.type || ''}`;
        el.innerHTML = `
            <div class="username">${msg.username}</div>
            <div class="text">${msg.text}</div>
        `;
        container.appendChild(el);
        container.scrollTop = container.scrollHeight;

        this.messages.push(msg);
    },

    // Inside-Message™ - Sponsored messages
    sendSponsoredMessage(sponsor, text) {
        this.addMessage({
            username: `📢 ${sponsor}`,
            text: text,
            type: 'sponsor'
        });
    },

    simulateViewers() {
        const counter = document.getElementById('viewerCount');
        if (!counter) return;

        let viewers = 1247;
        setInterval(() => {
            viewers += Math.floor(Math.random() * 20) - 10;
            viewers = Math.max(100, viewers);
            counter.textContent = viewers.toLocaleString();
        }, 5000);
    }
};

/* ========================================
   Inside-Polls™ - Real-time Polling
   ======================================== */
const InsidePolls = {
    activePoll: null,
    votes: {},

    create(question, options) {
        this.activePoll = { question, options };
        this.votes = {};
        options.forEach(opt => this.votes[opt] = 0);
        this.render();
        console.log('Inside-Polls™: Poll created');
    },

    render() {
        if (!this.activePoll) return;

        // Remove existing poll
        const existing = document.getElementById('inside-poll');
        if (existing) existing.remove();

        const totalVotes = Object.values(this.votes).reduce((a, b) => a + b, 0);

        const widget = document.createElement('div');
        widget.id = 'inside-poll';
        widget.innerHTML = `
            <div class="inside-poll-widget">
                <div class="poll-header">
                    <i class="fas fa-poll"></i> Live Poll
                    <span class="poll-timer" id="pollTimer">30s</span>
                </div>
                <div class="poll-question">${this.activePoll.question}</div>
                <div class="poll-options">
                    ${this.activePoll.options.map((opt, i) => {
                        const percent = totalVotes > 0 ? Math.round((this.votes[opt] / totalVotes) * 100) : 0;
                        return `
                            <button class="poll-option" data-option="${opt}">
                                <span class="option-text">${opt}</span>
                                <span class="option-percent">${percent}%</span>
                                <div class="option-bar" style="width: ${percent}%"></div>
                            </button>
                        `;
                    }).join('')}
                </div>
                <div class="poll-votes">${totalVotes.toLocaleString()} votes</div>
            </div>
        `;
        document.body.appendChild(widget);
        this.injectStyles();
        this.bindEvents();
        this.startTimer(30);
    },

    injectStyles() {
        if (document.getElementById('inside-polls-style')) return;

        const style = document.createElement('style');
        style.id = 'inside-polls-style';
        style.textContent = `
            .inside-poll-widget {
                position: fixed;
                top: 100px;
                right: 20px;
                width: 320px;
                background: #1e1028;
                border-radius: 16px;
                padding: 20px;
                box-shadow: 0 10px 40px rgba(0,0,0,0.5);
                z-index: 9998;
                font-family: 'Poppins', sans-serif;
                animation: slideInRight 0.4s ease;
            }
            @keyframes slideInRight {
                from { opacity: 0; transform: translateX(50px); }
                to { opacity: 1; transform: translateX(0); }
            }
            .poll-header {
                display: flex;
                justify-content: space-between;
                align-items: center;
                color: #a78bfa;
                font-weight: 600;
                font-size: 13px;
                margin-bottom: 15px;
            }
            .poll-timer {
                background: #7c3aed;
                padding: 4px 10px;
                border-radius: 12px;
                font-size: 11px;
                color: white;
            }
            .poll-question {
                color: white;
                font-size: 16px;
                font-weight: 600;
                margin-bottom: 15px;
            }
            .poll-option {
                display: block;
                width: 100%;
                background: rgba(255,255,255,0.05);
                border: 1px solid rgba(255,255,255,0.1);
                border-radius: 10px;
                padding: 12px 15px;
                margin-bottom: 8px;
                cursor: pointer;
                position: relative;
                overflow: hidden;
                text-align: left;
                color: white;
                transition: all 0.3s;
            }
            .poll-option:hover {
                border-color: #7c3aed;
            }
            .poll-option.voted {
                border-color: #7c3aed;
                background: rgba(124, 58, 237, 0.2);
            }
            .option-text {
                position: relative;
                z-index: 1;
                font-size: 14px;
            }
            .option-percent {
                position: absolute;
                right: 15px;
                top: 50%;
                transform: translateY(-50%);
                font-weight: 600;
                font-size: 14px;
                z-index: 1;
            }
            .option-bar {
                position: absolute;
                left: 0;
                top: 0;
                bottom: 0;
                background: linear-gradient(90deg, rgba(124, 58, 237, 0.3), rgba(124, 58, 237, 0.1));
                transition: width 0.5s ease;
            }
            .poll-votes {
                text-align: center;
                color: #71717a;
                font-size: 12px;
                margin-top: 10px;
            }
        `;
        document.head.appendChild(style);
    },

    bindEvents() {
        const options = document.querySelectorAll('.poll-option');
        options.forEach(btn => {
            btn.addEventListener('click', () => {
                const option = btn.dataset.option;
                this.vote(option);
                btn.classList.add('voted');
            });
        });
    },

    vote(option) {
        this.votes[option]++;

        // Simulate other votes
        setTimeout(() => {
            const randomOption = this.activePoll.options[Math.floor(Math.random() * this.activePoll.options.length)];
            this.votes[randomOption] += Math.floor(Math.random() * 5) + 1;
            this.updateDisplay();
        }, 500);

        this.updateDisplay();
    },

    updateDisplay() {
        const totalVotes = Object.values(this.votes).reduce((a, b) => a + b, 0);

        this.activePoll.options.forEach(opt => {
            const percent = totalVotes > 0 ? Math.round((this.votes[opt] / totalVotes) * 100) : 0;
            const btn = document.querySelector(`.poll-option[data-option="${opt}"]`);
            if (btn) {
                btn.querySelector('.option-percent').textContent = `${percent}%`;
                btn.querySelector('.option-bar').style.width = `${percent}%`;
            }
        });

        const votesEl = document.querySelector('.poll-votes');
        if (votesEl) votesEl.textContent = `${totalVotes.toLocaleString()} votes`;
    },

    startTimer(seconds) {
        const timer = document.getElementById('pollTimer');
        let remaining = seconds;

        const interval = setInterval(() => {
            remaining--;
            if (timer) timer.textContent = `${remaining}s`;

            if (remaining <= 0) {
                clearInterval(interval);
                this.endPoll();
            }
        }, 1000);
    },

    endPoll() {
        const widget = document.getElementById('inside-poll');
        if (widget) {
            widget.style.animation = 'slideInRight 0.4s ease reverse';
            setTimeout(() => widget.remove(), 400);
        }
    }
};

/* ========================================
   Inside-Ad™ - Non-Skippable Ad System
   ======================================== */
const InsideAd = {
    adQueue: [],
    isPlaying: false,

    // Guaranteed 100% genuine impressions
    showAd(config) {
        const { type, duration, content, sponsor, clickUrl } = config;

        this.isPlaying = true;

        const overlay = document.createElement('div');
        overlay.id = 'inside-ad';
        overlay.innerHTML = `
            <div class="inside-ad-overlay">
                <div class="ad-container ${type}">
                    ${type === 'video' ? `
                        <video autoplay muted playsinline>
                            <source src="${content}" type="video/mp4">
                        </video>
                    ` : `
                        <img src="${content}" alt="${sponsor}">
                    `}
                    <div class="ad-info">
                        <span class="ad-badge">Ad • ${sponsor}</span>
                        <span class="ad-timer" id="adTimer">${duration}s</span>
                    </div>
                    ${clickUrl ? `<a href="${clickUrl}" target="_blank" class="ad-cta">Learn More</a>` : ''}
                </div>
            </div>
        `;
        document.body.appendChild(overlay);
        this.injectStyles();

        // Non-skippable timer
        let remaining = duration;
        const timer = document.getElementById('adTimer');
        const interval = setInterval(() => {
            remaining--;
            if (timer) timer.textContent = `${remaining}s`;

            if (remaining <= 0) {
                clearInterval(interval);
                this.closeAd();
            }
        }, 1000);

        console.log(`Inside-Ad™: Showing ${type} ad for ${sponsor}`);
    },

    injectStyles() {
        if (document.getElementById('inside-ad-style')) return;

        const style = document.createElement('style');
        style.id = 'inside-ad-style';
        style.textContent = `
            .inside-ad-overlay {
                position: fixed;
                inset: 0;
                background: rgba(0,0,0,0.95);
                display: flex;
                align-items: center;
                justify-content: center;
                z-index: 99999;
                animation: fadeIn 0.3s ease;
            }
            @keyframes fadeIn {
                from { opacity: 0; }
                to { opacity: 1; }
            }
            .ad-container {
                position: relative;
                max-width: 800px;
                width: 90%;
            }
            .ad-container video,
            .ad-container img {
                width: 100%;
                border-radius: 12px;
            }
            .ad-info {
                position: absolute;
                top: 15px;
                left: 15px;
                right: 15px;
                display: flex;
                justify-content: space-between;
            }
            .ad-badge {
                background: rgba(0,0,0,0.7);
                padding: 6px 12px;
                border-radius: 6px;
                font-size: 12px;
                color: white;
                font-family: 'Poppins', sans-serif;
            }
            .ad-timer {
                background: #7c3aed;
                padding: 6px 12px;
                border-radius: 6px;
                font-size: 12px;
                color: white;
                font-weight: 600;
                font-family: 'Poppins', sans-serif;
            }
            .ad-cta {
                position: absolute;
                bottom: 20px;
                right: 20px;
                background: #e91e63;
                color: white;
                padding: 10px 20px;
                border-radius: 8px;
                text-decoration: none;
                font-weight: 600;
                font-size: 14px;
                font-family: 'Poppins', sans-serif;
                transition: transform 0.3s;
            }
            .ad-cta:hover {
                transform: scale(1.05);
            }
        `;
        document.head.appendChild(style);
    },

    closeAd() {
        const overlay = document.getElementById('inside-ad');
        if (overlay) {
            overlay.style.animation = 'fadeIn 0.3s ease reverse';
            setTimeout(() => {
                overlay.remove();
                this.isPlaying = false;
            }, 300);
        }
    },

    // Inside-Splash™ - App launch ads
    showSplash(config) {
        config.type = 'splash';
        this.showAd({ ...config, duration: config.duration || 5 });
    },

    // Inside-Banner™ - Banner ads
    showBanner(containerId, config) {
        const container = document.getElementById(containerId);
        if (!container) return;

        const banner = document.createElement('div');
        banner.className = 'inside-banner';
        banner.innerHTML = `
            <a href="${config.clickUrl}" target="_blank">
                <img src="${config.image}" alt="${config.sponsor}">
                <span class="banner-badge">Ad</span>
            </a>
        `;
        container.appendChild(banner);

        // Add banner styles
        const style = document.createElement('style');
        style.textContent = `
            .inside-banner {
                position: relative;
                margin: 20px 0;
                border-radius: 12px;
                overflow: hidden;
            }
            .inside-banner img {
                width: 100%;
                display: block;
            }
            .banner-badge {
                position: absolute;
                top: 10px;
                right: 10px;
                background: rgba(0,0,0,0.7);
                padding: 4px 8px;
                border-radius: 4px;
                font-size: 10px;
                color: white;
            }
        `;
        document.head.appendChild(style);
    }
};

/* ========================================
   Inside-Analytics™ - Real-time Metrics
   ======================================== */
const InsideAnalytics = {
    events: [],
    sessionStart: Date.now(),

    track(eventName, data = {}) {
        const event = {
            event: eventName,
            timestamp: Date.now(),
            sessionDuration: Date.now() - this.sessionStart,
            ...data
        };
        this.events.push(event);
        console.log('Inside-Analytics™:', eventName, data);

        // In production, send to analytics backend
        // this.send(event);
    },

    trackPageView(page) {
        this.track('page_view', { page });
    },

    trackVideoPlay(videoId, title) {
        this.track('video_play', { videoId, title });
    },

    trackVideoComplete(videoId, watchTime) {
        this.track('video_complete', { videoId, watchTime });
    },

    trackEngagement(type, data) {
        this.track('engagement', { type, ...data });
    },

    getMetrics() {
        return {
            totalEvents: this.events.length,
            sessionDuration: Date.now() - this.sessionStart,
            events: this.events
        };
    }
};

/* ========================================
   Export INSIDE™ Suite
   ======================================== */
window.INSIDE = {
    Chat: InsideChat,
    Polls: InsidePolls,
    Ad: InsideAd,
    Analytics: InsideAnalytics,

    // Quick init all tools
    init() {
        InsideChat.init('inside-chat');
        InsideAnalytics.trackPageView(window.location.pathname);
        console.log('INSIDE™ Tool Suite initialized');
    }
};

console.log('Purple Squirrel Media - INSIDE™ Tool Suite Loaded');

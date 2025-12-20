/**
 * Purple Squirrel Media - Ad SDK
 * VAST/VPAID compliant viewability tracking & ad serving
 * Version: 1.0.0
 */

(function(window) {
    'use strict';

    const PSM_ADS = {
        version: '1.0.0',
        apiBase: 'https://api.purplesquirrel.media/v1',
        debug: false,

        // IAB/MRC Viewability Standards
        VIEWABILITY: {
            VIDEO_THRESHOLD: 0.50,      // 50% of pixels in view
            VIDEO_TIME: 2000,            // 2 continuous seconds
            DISPLAY_THRESHOLD: 0.50,     // 50% of pixels
            DISPLAY_TIME: 1000,          // 1 second
            LARGE_DISPLAY_THRESHOLD: 0.30 // 30% for ads > 242,500 pixels
        },

        // Active trackers
        trackers: new Map(),
        impressions: new Set(),

        /**
         * Initialize the SDK
         */
        init: function(options = {}) {
            this.apiBase = options.apiBase || this.apiBase;
            this.debug = options.debug || false;
            this.publisherId = options.publisherId || null;

            this.log('PSM Ads SDK initialized', options);

            // Setup intersection observer for viewability
            this.setupViewabilityObserver();

            return this;
        },

        /**
         * Log debug messages
         */
        log: function(...args) {
            if (this.debug) {
                console.log('[PSM-ADS]', ...args);
            }
        },

        /**
         * Setup Intersection Observer for viewability tracking
         */
        setupViewabilityObserver: function() {
            const self = this;

            this.observer = new IntersectionObserver((entries) => {
                entries.forEach(entry => {
                    const trackerId = entry.target.dataset.psmTracker;
                    if (!trackerId) return;

                    const tracker = self.trackers.get(trackerId);
                    if (!tracker) return;

                    const ratio = entry.intersectionRatio;
                    const threshold = tracker.type === 'video'
                        ? self.VIEWABILITY.VIDEO_THRESHOLD
                        : self.VIEWABILITY.DISPLAY_THRESHOLD;

                    if (ratio >= threshold) {
                        if (!tracker.viewableStart) {
                            tracker.viewableStart = Date.now();
                            self.log('Viewability started', trackerId, ratio);
                        }

                        const requiredTime = tracker.type === 'video'
                            ? self.VIEWABILITY.VIDEO_TIME
                            : self.VIEWABILITY.DISPLAY_TIME;

                        const elapsed = Date.now() - tracker.viewableStart;

                        if (elapsed >= requiredTime && !tracker.viewable) {
                            tracker.viewable = true;
                            self.fireViewableImpression(tracker);
                        }
                    } else {
                        tracker.viewableStart = null;
                    }
                });
            }, {
                threshold: [0, 0.25, 0.5, 0.75, 1.0]
            });
        },

        /**
         * Create a video ad player
         */
        createVideoAd: function(container, vastUrl, options = {}) {
            const self = this;
            const trackerId = this.generateId();

            return new Promise((resolve, reject) => {
                this.fetchVAST(vastUrl)
                    .then(vastData => {
                        const player = this.buildVideoPlayer(container, vastData, options);

                        // Setup tracking
                        const tracker = {
                            id: trackerId,
                            type: 'video',
                            campaignId: vastData.campaignId,
                            creativeId: vastData.creativeId,
                            element: player.element,
                            viewable: false,
                            viewableStart: null,
                            events: vastData.tracking || {},
                            quartiles: { q1: false, q2: false, q3: false, complete: false }
                        };

                        this.trackers.set(trackerId, tracker);
                        player.element.dataset.psmTracker = trackerId;
                        this.observer.observe(player.element);

                        // Track video events
                        this.setupVideoTracking(player, tracker);

                        // Fire impression on start
                        player.video.addEventListener('play', () => {
                            if (!this.impressions.has(trackerId)) {
                                this.fireImpression(tracker);
                                this.impressions.add(trackerId);
                            }
                        }, { once: true });

                        resolve({ player, trackerId, vastData });
                    })
                    .catch(reject);
            });
        },

        /**
         * Fetch and parse VAST XML
         */
        fetchVAST: function(url) {
            return fetch(url)
                .then(response => response.text())
                .then(xml => this.parseVAST(xml));
        },

        /**
         * Parse VAST XML to object
         */
        parseVAST: function(xmlString) {
            const parser = new DOMParser();
            const xml = parser.parseFromString(xmlString, 'text/xml');

            const ad = xml.querySelector('Ad');
            if (!ad) throw new Error('No ad found in VAST');

            const linear = ad.querySelector('Linear');
            const mediaFile = linear?.querySelector('MediaFile');
            const duration = linear?.querySelector('Duration')?.textContent;

            // Extract tracking URLs
            const tracking = {};
            ad.querySelectorAll('Tracking').forEach(t => {
                const event = t.getAttribute('event');
                tracking[event] = tracking[event] || [];
                tracking[event].push(t.textContent.trim());
            });

            // Get impression URLs
            const impressions = [];
            ad.querySelectorAll('Impression').forEach(i => {
                impressions.push(i.textContent.trim());
            });

            // Get click tracking
            const clickThrough = ad.querySelector('ClickThrough')?.textContent?.trim();
            const clickTracking = [];
            ad.querySelectorAll('ClickTracking').forEach(c => {
                clickTracking.push(c.textContent.trim());
            });

            return {
                campaignId: ad.getAttribute('id'),
                creativeId: ad.querySelector('Creative')?.getAttribute('id'),
                adSystem: ad.querySelector('AdSystem')?.textContent,
                duration: this.parseDuration(duration),
                mediaUrl: mediaFile?.textContent?.trim(),
                mediaType: mediaFile?.getAttribute('type'),
                width: mediaFile?.getAttribute('width'),
                height: mediaFile?.getAttribute('height'),
                tracking,
                impressions,
                clickThrough,
                clickTracking
            };
        },

        /**
         * Parse duration string to seconds
         */
        parseDuration: function(duration) {
            if (!duration) return 0;
            const parts = duration.split(':').map(Number);
            return (parts[0] * 3600) + (parts[1] * 60) + parts[2];
        },

        /**
         * Build video player element
         */
        buildVideoPlayer: function(container, vastData, options) {
            const wrapper = document.createElement('div');
            wrapper.className = 'psm-ad-wrapper';
            wrapper.style.cssText = 'position:relative;width:100%;background:#000;';

            const video = document.createElement('video');
            video.className = 'psm-ad-video';
            video.src = vastData.mediaUrl;
            video.style.cssText = 'width:100%;height:auto;';
            video.playsInline = true;
            video.muted = options.muted !== false;

            // Skip button (if skippable)
            let skipBtn = null;
            if (options.skippable) {
                skipBtn = document.createElement('button');
                skipBtn.className = 'psm-skip-btn';
                skipBtn.innerHTML = `Skip Ad in <span class="countdown">${options.skipOffset || 5}</span>s`;
                skipBtn.style.cssText = `
                    position:absolute;bottom:20px;right:20px;
                    background:rgba(0,0,0,0.8);color:#fff;
                    border:1px solid #fff;padding:8px 16px;
                    cursor:pointer;font-size:14px;display:none;
                `;
                skipBtn.disabled = true;
            }

            // Click overlay for clickthrough
            const overlay = document.createElement('div');
            overlay.className = 'psm-click-overlay';
            overlay.style.cssText = 'position:absolute;top:0;left:0;right:0;bottom:40px;cursor:pointer;';
            overlay.addEventListener('click', () => {
                if (vastData.clickThrough) {
                    // Fire click tracking
                    vastData.clickTracking.forEach(url => this.firePixel(url));
                    this.trackEvent('click', vastData.campaignId, vastData.creativeId);
                    window.open(vastData.clickThrough, '_blank');
                }
            });

            // Ad badge
            const badge = document.createElement('div');
            badge.className = 'psm-ad-badge';
            badge.textContent = 'AD';
            badge.style.cssText = `
                position:absolute;top:10px;left:10px;
                background:rgba(255,255,255,0.9);color:#000;
                padding:2px 6px;font-size:10px;font-weight:bold;
                border-radius:2px;
            `;

            wrapper.appendChild(video);
            wrapper.appendChild(overlay);
            wrapper.appendChild(badge);
            if (skipBtn) wrapper.appendChild(skipBtn);

            container.appendChild(wrapper);

            return { element: wrapper, video, skipBtn };
        },

        /**
         * Setup video event tracking
         */
        setupVideoTracking: function(player, tracker) {
            const video = player.video;
            const self = this;

            // Start
            video.addEventListener('play', () => {
                this.fireTrackingUrls(tracker.events.start);
                this.trackEvent('start', tracker.campaignId, tracker.creativeId);
            }, { once: true });

            // Pause/Resume
            video.addEventListener('pause', () => {
                if (!video.ended) {
                    this.fireTrackingUrls(tracker.events.pause);
                    this.trackEvent('pause', tracker.campaignId, tracker.creativeId);
                }
            });

            video.addEventListener('play', () => {
                if (video.currentTime > 0) {
                    this.fireTrackingUrls(tracker.events.resume);
                    this.trackEvent('resume', tracker.campaignId, tracker.creativeId);
                }
            });

            // Quartiles
            video.addEventListener('timeupdate', () => {
                const progress = video.currentTime / video.duration;

                if (progress >= 0.25 && !tracker.quartiles.q1) {
                    tracker.quartiles.q1 = true;
                    this.fireTrackingUrls(tracker.events.firstQuartile);
                    this.trackEvent('firstQuartile', tracker.campaignId, tracker.creativeId);
                }

                if (progress >= 0.50 && !tracker.quartiles.q2) {
                    tracker.quartiles.q2 = true;
                    this.fireTrackingUrls(tracker.events.midpoint);
                    this.trackEvent('midpoint', tracker.campaignId, tracker.creativeId);
                }

                if (progress >= 0.75 && !tracker.quartiles.q3) {
                    tracker.quartiles.q3 = true;
                    this.fireTrackingUrls(tracker.events.thirdQuartile);
                    this.trackEvent('thirdQuartile', tracker.campaignId, tracker.creativeId);
                }
            });

            // Complete
            video.addEventListener('ended', () => {
                if (!tracker.quartiles.complete) {
                    tracker.quartiles.complete = true;
                    this.fireTrackingUrls(tracker.events.complete);
                    this.trackEvent('complete', tracker.campaignId, tracker.creativeId);
                }
            });

            // Mute/Unmute
            video.addEventListener('volumechange', () => {
                if (video.muted) {
                    this.fireTrackingUrls(tracker.events.mute);
                } else {
                    this.fireTrackingUrls(tracker.events.unmute);
                }
            });

            // Fullscreen
            video.addEventListener('fullscreenchange', () => {
                if (document.fullscreenElement) {
                    this.fireTrackingUrls(tracker.events.fullscreen);
                } else {
                    this.fireTrackingUrls(tracker.events.exitFullscreen);
                }
            });
        },

        /**
         * Fire impression to API and VAST URLs
         */
        fireImpression: function(tracker) {
            // Fire VAST impression URLs
            if (tracker.impressionUrls) {
                tracker.impressionUrls.forEach(url => this.firePixel(url));
            }

            // Fire to our API
            this.trackEvent('impression', tracker.campaignId, tracker.creativeId);

            this.log('Impression fired', tracker.id);
        },

        /**
         * Fire viewable impression (MRC standard met)
         */
        fireViewableImpression: function(tracker) {
            this.trackEvent('viewable', tracker.campaignId, tracker.creativeId);
            this.log('Viewable impression fired', tracker.id);
        },

        /**
         * Fire tracking URLs
         */
        fireTrackingUrls: function(urls) {
            if (!urls || !Array.isArray(urls)) return;
            urls.forEach(url => this.firePixel(url));
        },

        /**
         * Fire a tracking pixel
         */
        firePixel: function(url) {
            if (!url) return;

            // Replace macros
            url = url
                .replace(/\[TIMESTAMP\]/g, Date.now())
                .replace(/\[CACHEBUSTING\]/g, Math.random().toString(36).substr(2));

            const img = new Image();
            img.src = url;
            this.log('Pixel fired:', url);
        },

        /**
         * Track event to PSM API
         */
        trackEvent: function(event, campaignId, creativeId, data = {}) {
            const payload = {
                event,
                campaignId,
                creativeId,
                publisherId: this.publisherId,
                timestamp: Date.now(),
                userAgent: navigator.userAgent,
                referrer: document.referrer,
                url: window.location.href,
                ...data
            };

            // Use sendBeacon for reliability
            if (navigator.sendBeacon) {
                navigator.sendBeacon(
                    `${this.apiBase}/track`,
                    JSON.stringify(payload)
                );
            } else {
                fetch(`${this.apiBase}/track`, {
                    method: 'POST',
                    headers: { 'Content-Type': 'application/json' },
                    body: JSON.stringify(payload),
                    keepalive: true
                });
            }

            this.log('Event tracked:', event, payload);
        },

        /**
         * Create a display ad
         */
        createDisplayAd: function(container, options = {}) {
            const trackerId = this.generateId();

            const wrapper = document.createElement('div');
            wrapper.className = 'psm-display-ad';
            wrapper.dataset.psmTracker = trackerId;
            wrapper.style.cssText = `
                position:relative;
                width:${options.width || 300}px;
                height:${options.height || 250}px;
                background:#1a1a2e;
                border-radius:8px;
                overflow:hidden;
            `;

            if (options.imageUrl) {
                const img = document.createElement('img');
                img.src = options.imageUrl;
                img.style.cssText = 'width:100%;height:100%;object-fit:cover;';
                wrapper.appendChild(img);
            }

            // Click handler
            wrapper.addEventListener('click', () => {
                if (options.clickUrl) {
                    this.trackEvent('click', options.campaignId, options.creativeId);
                    window.open(options.clickUrl, '_blank');
                }
            });

            container.appendChild(wrapper);

            // Setup tracking
            const tracker = {
                id: trackerId,
                type: 'display',
                campaignId: options.campaignId,
                creativeId: options.creativeId,
                element: wrapper,
                viewable: false,
                viewableStart: null
            };

            this.trackers.set(trackerId, tracker);
            this.observer.observe(wrapper);

            // Fire impression immediately when created
            this.fireImpression(tracker);
            this.impressions.add(trackerId);

            return { element: wrapper, trackerId };
        },

        /**
         * Request ad from server
         */
        requestAd: function(options = {}) {
            const params = new URLSearchParams({
                type: options.type || 'video',
                placement: options.placement || 'preroll',
                width: options.width || 640,
                height: options.height || 360,
                publisher: this.publisherId,
                ...options
            });

            return fetch(`${this.apiBase}/ads/request?${params}`)
                .then(response => response.json());
        },

        /**
         * Generate unique ID
         */
        generateId: function() {
            return 'psm_' + Date.now().toString(36) + Math.random().toString(36).substr(2, 9);
        },

        /**
         * Destroy tracker and cleanup
         */
        destroy: function(trackerId) {
            const tracker = this.trackers.get(trackerId);
            if (tracker) {
                this.observer.unobserve(tracker.element);
                this.trackers.delete(trackerId);
                this.impressions.delete(trackerId);
                this.log('Tracker destroyed', trackerId);
            }
        },

        /**
         * Get ad performance stats
         */
        getStats: function() {
            const stats = {
                activeTrackers: this.trackers.size,
                impressions: this.impressions.size,
                trackers: []
            };

            this.trackers.forEach((tracker, id) => {
                stats.trackers.push({
                    id,
                    type: tracker.type,
                    viewable: tracker.viewable,
                    quartiles: tracker.quartiles
                });
            });

            return stats;
        }
    };

    // Expose to global
    window.PSM_ADS = PSM_ADS;

    // Auto-init if data attribute present
    document.addEventListener('DOMContentLoaded', () => {
        const autoInit = document.querySelector('[data-psm-ads-init]');
        if (autoInit) {
            PSM_ADS.init({
                publisherId: autoInit.dataset.psmPublisherId,
                debug: autoInit.dataset.psmDebug === 'true'
            });
        }
    });

})(window);

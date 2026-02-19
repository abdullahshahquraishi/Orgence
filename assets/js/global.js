/**
 * Orgence AI — Global JavaScript
 *
 * Handles all shared interactive behaviours:
 *   - Scroll progress bar
 *   - Scroll-triggered element reveals
 *   - Active nav link tracking
 *   - Header brand alternating fade
 *
 * Load this file at the END of <body>, after all components
 * have been injected, so all DOM elements are present.
 */

(function () {
    'use strict';

    /* ── Scroll progress bar ──────────────────────────────── */
    const progress = document.getElementById('scroll-progress');
    if (progress) {
        window.addEventListener('scroll', () => {
            const scrolled = window.scrollY;
            const total    = document.body.scrollHeight - window.innerHeight;
            progress.style.width = (total > 0 ? (scrolled / total) * 100 : 0) + '%';
        }, { passive: true });
    }

    /* ── Scroll-triggered reveal ──────────────────────────── */
    const revealObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                revealObserver.unobserve(entry.target);
            }
        });
    }, { threshold: 0.1, rootMargin: '0px 0px -48px 0px' });

    document.querySelectorAll('[data-reveal]').forEach(el => revealObserver.observe(el));

    /* ── Active nav link on scroll ────────────────────────── */
    const sections = document.querySelectorAll('section[id]');
    const navLinks  = document.querySelectorAll('.nav-link');

    if (sections.length && navLinks.length) {
        const navObserver = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    navLinks.forEach(link => {
                        // Match on both '#anchor' and 'index.html#anchor' hrefs
                        const href   = link.getAttribute('href') || '';
                        const anchor = '#' + entry.target.id;
                        link.classList.toggle('active', href.endsWith(anchor));
                    });
                }
            });
        }, { threshold: 0.45 });

        sections.forEach(s => navObserver.observe(s));
    }

    /* ── Header brand alternating fade (10 s loop) ────────── */
    const brandLong  = document.getElementById('header-brand-long');
    const brandShort = document.getElementById('header-brand-short');

    if (brandLong && brandShort) {
        let showingLong = false;

        setInterval(() => {
            showingLong = !showingLong;
            brandLong.style.opacity  = showingLong ? '1' : '0';
            brandShort.style.opacity = showingLong ? '0' : '1';
        }, 10000);
    }

})();

/**
 * Orgence AI — Global JavaScript (v2 skeleton)
 *
 * Core interactive behaviours shared across all pages.
 * Load this file at the END of <body>, after components are injected.
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

    /* ── Navigation toggle ─────────────────────────────────── */
    // Wire up nav toggle/close here as you build the header component.

})();

/**
 * Orgence AI — Global JavaScript
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

    /* ── FAQ accordion ────────────────────────────────────── */
    document.querySelectorAll('.faq-question').forEach(btn => {
        btn.addEventListener('click', () => {
            const isOpen   = btn.getAttribute('aria-expanded') === 'true';
            const answer   = btn.nextElementSibling;

            // Close all other items
            document.querySelectorAll('.faq-question').forEach(other => {
                if (other !== btn) {
                    other.setAttribute('aria-expanded', 'false');
                    other.nextElementSibling.style.maxHeight = '0';
                }
            });

            // Toggle this item
            if (isOpen) {
                btn.setAttribute('aria-expanded', 'false');
                answer.style.maxHeight = '0';
            } else {
                btn.setAttribute('aria-expanded', 'true');
                answer.style.maxHeight = answer.scrollHeight + 'px';
            }
        });
    });

    /* ── Navigation toggle (mobile hamburger) ─────────────── */
    const navToggle = document.getElementById('nav-toggle');
    const navMobile = document.getElementById('nav-mobile');

    if (navToggle && navMobile) {

        navToggle.addEventListener('click', () => {
            const isOpen = navMobile.classList.toggle('open');
            navToggle.classList.toggle('open', isOpen);
            navToggle.setAttribute('aria-expanded', String(isOpen));
            navMobile.setAttribute('aria-hidden',   String(!isOpen));
        });

        // Close menu when a link is tapped
        navMobile.querySelectorAll('a').forEach(link => {
            link.addEventListener('click', () => {
                navMobile.classList.remove('open');
                navToggle.classList.remove('open');
                navToggle.setAttribute('aria-expanded', 'false');
                navMobile.setAttribute('aria-hidden',   'true');
            });
        });

        // Close menu on Escape key
        document.addEventListener('keydown', (e) => {
            if (e.key === 'Escape' && navMobile.classList.contains('open')) {
                navMobile.classList.remove('open');
                navToggle.classList.remove('open');
                navToggle.setAttribute('aria-expanded', 'false');
                navMobile.setAttribute('aria-hidden',   'true');
                navToggle.focus();
            }
        });
    }

    /* ── Process steps (interactive + auto-cycle) ─────────── */
    const fcSteps = document.querySelectorAll('.fc-steps .fc-step');
    if (fcSteps.length) {
        let current   = 0;
        let autoTimer = null;

        function activateStep(idx) {
            current = idx;
            fcSteps.forEach((step, i) => {
                const on = (i === idx);
                step.classList.toggle('active', on);
                let badge = step.querySelector('.fc-step-badge');
                if (on && !badge) {
                    badge = document.createElement('span');
                    badge.className = 'fc-step-badge';
                    badge.textContent = 'Active';
                    step.appendChild(badge);
                } else if (!on && badge) {
                    badge.remove();
                }
            });
        }

        function startAuto() {
            clearInterval(autoTimer);
            autoTimer = setInterval(() => {
                activateStep((current + 1) % fcSteps.length);
            }, 3200);
        }

        function stopAuto() {
            clearInterval(autoTimer);
            autoTimer = null;
        }

        fcSteps.forEach((step, idx) => {
            step.addEventListener('click', () => {
                stopAuto();
                activateStep(idx);
                // Resume auto after 7s of no interaction
                autoTimer = setTimeout(startAuto, 7000);
            });
        });

        // Pause while hovering the panel
        const stepsWrap = fcSteps[0].closest('.fc-steps');
        if (stepsWrap) {
            stepsWrap.addEventListener('mouseenter', stopAuto);
            stepsWrap.addEventListener('mouseleave', startAuto);
        }

        // Lock card height after the first paint so no description transition
        // ever causes the surrounding layout to reflow.
        // Step 01 is already .active in HTML, so the description is fully
        // rendered before this callback fires — we capture the correct height.
        const fcCard = fcSteps[0].closest('.feature-card');
        if (fcCard) {
            requestAnimationFrame(() => requestAnimationFrame(() => {
                fcCard.style.height   = fcCard.offsetHeight + 'px';
                fcCard.style.overflow = 'hidden';
            }));
        }

        startAuto();
    }

})();

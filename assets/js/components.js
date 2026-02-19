/**
 * Orgence AI — Shared HTML Components
 *
 * Header and footer are defined once here and injected into
 * every page. To add a new page:
 *
 *   1. Add a placeholder in the body:
 *        <div id="header-mount"></div>
 *        <script>document.getElementById('header-mount').outerHTML =
 *            OrgenceComponents.header('your-page');</script>
 *
 *   2. Do the same for the footer with 'footer-mount'.
 *
 *   3. To add a nav link, edit the `navLinks` array below.
 */

const OrgenceComponents = (() => {

    /* ── Navigation links ──────────────────────────────────
       href values are relative to the homepage (index.html).
       Off-page links are automatically prefixed with 'index.html'.
    ───────────────────────────────────────────────────────── */
    const navLinks = [
        { label: 'The Challenge', anchor: '#problem'    },
        { label: 'Methodology',   anchor: '#process'    },
        { label: 'Diagnostic',    anchor: '#diagnostic' },
    ];

    function buildNav(page) {
        const prefix = page === 'home' ? '' : 'index.html';
        return navLinks.map(({ label, anchor }) =>
            `<a class="nav-link hover:text-forest-green transition-colors duration-300"
                href="${prefix}${anchor}">${label}</a>`
        ).join('\n        ');
    }

    /* Mobile nav links — large, italic, displayed in the overlay */
    function buildMobileNav(page) {
        const prefix = page === 'home' ? '' : 'index.html';
        return navLinks.map(({ label, anchor }) =>
            `<a class="mobile-nav-link" href="${prefix}${anchor}">${label}</a>`
        ).join('\n        ');
    }

    function buildBrand() {
        return `<div id="header-brand-origin">
                <span id="header-brand-long">Organisational Intelligence</span>
                <span id="header-brand-short">Orgence AI</span>
            </div>`;
    }

    /* Desktop CTA — hidden below md breakpoint */
    function buildCTA(page) {
        if (page === 'home') {
            return `<a href="briefing.html"
                class="hidden md:flex border border-forest-green/20 hover:border-forest-green
                       text-forest-green text-[10px] tracking-[0.2em] uppercase
                       py-3 px-8 transition-all duration-300">
                Inquire
            </a>`;
        }
        return `<a href="index.html"
            class="hidden md:flex items-center gap-2 border border-forest-green/20
                   hover:border-forest-green text-forest-green text-[10px]
                   tracking-[0.2em] uppercase py-3 px-8 transition-all duration-300">
            <span class="material-symbols-outlined text-sm">arrow_back</span>
            Back
        </a>`;
    }

    /* Mobile CTA — shown inside the full-screen overlay */
    function buildMobileCTA(page) {
        if (page === 'home') {
            return `<a href="briefing.html"
                class="block text-center border border-white/20 hover:border-white/60
                       text-earth-primary text-[10px] tracking-[0.2em] uppercase font-bold
                       py-4 transition-all duration-300">
                Request Briefing
            </a>`;
        }
        return `<a href="index.html"
            class="flex items-center justify-center gap-2 border border-white/20
                   hover:border-white/60 text-earth-primary text-[10px] tracking-[0.2em]
                   uppercase font-bold py-4 transition-all duration-300">
            <span class="material-symbols-outlined text-sm">arrow_back</span>
            Back to Home
        </a>`;
    }

    /* ── Public API ────────────────────────────────────────── */
    return {

        /**
         * Render the site header.
         * @param {string} page - 'home' | any other page slug
         */
        header(page = 'home') {
            return `
<div id="scroll-progress"></div>
<header id="site-header" class="w-full py-6 lg:py-8 px-8 lg:px-16 flex justify-between items-center sticky top-0 z-50 bg-earth-primary/80 backdrop-blur-md">
    <a href="index.html" class="flex items-center gap-3 shrink-0">
        <span class="material-symbols-outlined text-forest-green text-2xl">token</span>
        ${buildBrand()}
    </a>
    <nav class="hidden md:flex gap-12 text-[10px] font-bold tracking-[0.2em] uppercase text-text-muted">
        ${buildNav(page)}
    </nav>
    <div class="flex items-center gap-4">
        ${buildCTA(page)}
        <!-- Hamburger: visible only below md breakpoint -->
        <button id="nav-toggle"
                class="md:hidden flex flex-col justify-center gap-[5px] p-2 -mr-2"
                aria-label="Open navigation"
                aria-expanded="false">
            <span class="hamburger-bar"></span>
            <span class="hamburger-bar"></span>
            <span class="hamburger-bar"></span>
        </button>
    </div>
</header>

<!-- ── Mobile navigation overlay ──────────────────────── -->
<div id="mobile-nav" aria-hidden="true">
    <!-- Top bar -->
    <div class="flex justify-between items-center py-6 px-8 border-b border-white/10">
        <a href="index.html" class="flex items-center gap-3">
            <span class="material-symbols-outlined text-earth-primary text-2xl">token</span>
            <span class="font-serif text-earth-primary uppercase tracking-[0.05em]">Orgence AI</span>
        </a>
        <button id="nav-close" class="p-2 -mr-2" aria-label="Close navigation">
            <span class="material-symbols-outlined text-earth-primary text-2xl">close</span>
        </button>
    </div>
    <!-- Nav links -->
    <nav class="flex flex-col px-8 mt-10 flex-1 overflow-y-auto">
        ${buildMobileNav(page)}
    </nav>
    <!-- CTA -->
    <div class="px-8 pb-10">
        ${buildMobileCTA(page)}
    </div>
</div>`;
        },

        /**
         * Render the site footer.
         */
        footer() {
            return `
<footer class="bg-forest-green text-earth-primary px-8 lg:px-16 pt-20 pb-10">
<div class="narrative-container">

    <!-- ── CTA strip ──────────────────────────────────────── -->
    <div class="flex flex-col sm:flex-row justify-between items-start sm:items-center
                gap-8 pb-16 border-b border-white/10" data-reveal>
        <p class="text-2xl md:text-3xl font-serif italic text-earth-primary/80 leading-snug max-w-lg">
            Ready to get clarity on<br class="hidden md:block"/> your AI roadmap?
        </p>
        <a href="briefing.html"
           class="shrink-0 border border-white/20 hover:border-white/60 hover:bg-white/5
                  text-earth-primary text-[10px] tracking-[0.2em] uppercase font-bold
                  py-4 px-10 transition-all duration-300 flex items-center gap-3">
            Request Briefing
            <span class="material-symbols-outlined text-base">arrow_forward</span>
        </a>
    </div>

    <!-- ── Main grid: brand + link columns ────────────────── -->
    <div class="grid grid-cols-1 md:grid-cols-12 gap-16 py-16 border-b border-white/10">

        <!-- Brand column -->
        <div class="md:col-span-4" data-reveal>
            <a href="index.html" class="flex items-center gap-3 mb-6">
                <span class="material-symbols-outlined text-earth-primary text-xl">token</span>
                <span class="font-serif text-earth-primary uppercase tracking-[0.05em] text-sm">Orgence AI</span>
            </a>
            <p class="text-earth-primary/50 font-light text-sm leading-relaxed max-w-xs mb-10">
                Strategic advisory for e-commerce founders navigating the AI era.
                We deliver clarity, not code.
            </p>
            <!-- Social -->
            <div class="flex gap-6">
                <a href="#"
                   class="text-[10px] font-bold uppercase tracking-[0.2em] text-earth-primary/40
                          hover:text-earth-primary transition-colors duration-300">
                    LinkedIn
                </a>
            </div>
        </div>

        <!-- Link columns -->
        <div class="md:col-span-8 grid grid-cols-2 md:grid-cols-3 gap-12" data-reveal data-delay="1">

            <!-- Services -->
            <div>
                <h4 class="text-[10px] font-bold uppercase tracking-[0.2em] text-white/30 mb-6">
                    Services
                </h4>
                <nav class="flex flex-col gap-4">
                    <a class="footer-link" href="index.html#diagnostic">The Diagnostic</a>
                    <a class="footer-link" href="index.html#process">Methodology</a>
                    <a class="footer-link" href="index.html#problem">The Challenge</a>
                    <a class="footer-link" href="briefing.html">Request Briefing</a>
                </nav>
            </div>

            <!-- Company -->
            <div>
                <h4 class="text-[10px] font-bold uppercase tracking-[0.2em] text-white/30 mb-6">
                    Company
                </h4>
                <nav class="flex flex-col gap-4">
                    <a class="footer-link" href="#">About</a>
                    <a class="footer-link" href="#">Careers</a>
                    <a class="footer-link" href="#">Press</a>
                    <a class="footer-link" href="#">Partners</a>
                </nav>
            </div>

            <!-- Contact -->
            <div>
                <h4 class="text-[10px] font-bold uppercase tracking-[0.2em] text-white/30 mb-6">
                    Contact
                </h4>
                <nav class="flex flex-col gap-4">
                    <a class="footer-link" href="mailto:hello@orgence.ai">hello@orgence.ai</a>
                    <a class="footer-link" href="#">Book a Call</a>
                    <a class="footer-link" href="#">LinkedIn</a>
                </nav>
            </div>

        </div>
    </div>

    <!-- ── Bottom bar ──────────────────────────────────────── -->
    <div class="pt-10 flex flex-col md:flex-row justify-between items-center gap-6">
        <p class="text-[10px] text-white/25 font-bold tracking-[0.1em] uppercase">
            © 2026 Orgence AI. All rights reserved.
        </p>
        <div class="flex flex-wrap justify-center md:justify-end items-center gap-x-8 gap-y-3
                    text-[10px] text-white/25 font-bold tracking-[0.1em] uppercase">
            <a href="#" class="hover:text-white/60 transition-colors">Privacy Policy</a>
            <a href="#" class="hover:text-white/60 transition-colors">Terms of Service</a>
            <span class="text-white/10 hidden md:inline">|</span>
            <span>London</span>
            <span class="text-white/15">·</span>
            <span>New York</span>
            <span class="text-white/15">·</span>
            <span>San Francisco</span>
        </div>
    </div>

</div>
</footer>`;
        },
    };

})();

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
 *   3. To add a nav link in the overlay, edit the nav block inside header().
 */

const OrgenceComponents = (() => {

    /* ── Public API ────────────────────────────────────────── */
    return {

        /**
         * Render the site header.
         * Outputs a floating nav pill (top-left) + a full-page overlay.
         * @param {string} page - page slug (kept for API compatibility)
         */
        header(page = 'home') {
            return `
<div id="scroll-progress"></div>

<!-- ── Floating nav pill ──────────────────────────────────── -->
<div id="nav-pill">
    <button id="nav-toggle"
            class="flex flex-col justify-center gap-[5px] p-1.5"
            aria-label="Open navigation"
            aria-expanded="false">
        <span class="hamburger-bar"></span>
        <span class="hamburger-bar"></span>
        <span class="hamburger-bar"></span>
    </button>
    <a href="index.html" id="nav-pill-brand" aria-label="Orgence AI home">
        <span class="material-symbols-outlined nav-pill-icon">token</span>
        <span class="nav-pill-wordmark">Orgence AI</span>
    </a>
</div>

<!-- ── Full-page navigation overlay ──────────────────────── -->
<div id="mobile-nav" aria-hidden="true">

    <!-- Top bar -->
    <div class="flex justify-between items-center py-6 px-8 lg:px-16 border-b border-white/10 shrink-0">
        <a href="index.html" class="flex items-center gap-3">
            <span class="material-symbols-outlined text-earth-primary text-2xl">token</span>
            <span class="font-serif text-earth-primary uppercase tracking-[0.05em]">Orgence AI</span>
        </a>
        <button id="nav-close" class="flex items-center justify-center p-2 -mr-2"
                aria-label="Close navigation">
            <span class="material-symbols-outlined text-earth-primary text-2xl">close</span>
        </button>
    </div>

    <!-- Body: context + links -->
    <div class="flex flex-col lg:flex-row flex-1 min-h-0">

        <!-- Left context panel (desktop only) -->
        <div class="hidden lg:flex flex-col justify-between px-16 py-16
                    border-r border-white/10 shrink-0" style="width:38%">
            <div>
                <p class="text-[10px] uppercase tracking-[0.3em] font-bold text-white/25 mb-10">
                    Strategic Advisory
                </p>
                <p class="font-serif italic text-earth-primary/50 text-2xl leading-relaxed max-w-xs">
                    Organisational intelligence before AI implementation.
                </p>
            </div>
            <div>
                <p class="text-[10px] uppercase tracking-[0.3em] font-bold text-white/25 mb-5">
                    Contact
                </p>
                <a href="mailto:hello@orgence.ai"
                   class="block text-sm font-light text-earth-primary/50
                          hover:text-earth-primary transition-colors duration-200 mb-3">
                    hello@orgence.ai
                </a>
                <a href="#"
                   class="block text-sm font-light text-earth-primary/50
                          hover:text-earth-primary transition-colors duration-200">
                    LinkedIn
                </a>
            </div>
        </div>

        <!-- Right nav links -->
        <nav class="flex flex-col px-8 lg:px-20 pt-10 lg:pt-14 flex-1 overflow-y-auto">

            <div class="mb-8">
                <p class="text-[10px] uppercase tracking-[0.3em] font-bold text-white/25 mb-5">
                    Pages
                </p>
                <a class="mobile-nav-link" href="index.html">Home</a>
                <a class="mobile-nav-link" href="about.html">About</a>
            </div>

            <div class="pt-8 border-t border-white/10">
                <p class="text-[10px] uppercase tracking-[0.3em] font-bold text-white/25 mb-5">
                    The Service
                </p>
                <a class="mobile-nav-link" href="index.html#problem">The Challenge</a>
                <a class="mobile-nav-link" href="index.html#process">Methodology</a>
                <a class="mobile-nav-link" href="index.html#diagnostic">Diagnostic</a>
            </div>

        </nav>
    </div>

    <!-- CTA strip -->
    <div class="px-8 lg:px-16 pt-8 pb-10 border-t border-white/10 shrink-0">
        <a href="briefing.html"
           class="flex items-center justify-center gap-3 border border-white/20
                  hover:border-white/60 text-earth-primary text-[10px] tracking-[0.2em]
                  uppercase font-bold py-4 transition-all duration-300">
            Request Briefing
            <span class="material-symbols-outlined text-sm">arrow_forward</span>
        </a>
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
                    <a class="footer-link" href="about.html">About</a>
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

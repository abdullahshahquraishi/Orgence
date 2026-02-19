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

    function buildBrand() {
        return `<div id="header-brand-origin">
                <span id="header-brand-long">Organisational Intelligence</span>
                <span id="header-brand-short">Orgence AI</span>
            </div>`;
    }

    function buildCTA(page) {
        if (page === 'home') {
            return `<a href="briefing.html"
                class="hidden sm:flex border border-forest-green/20 hover:border-forest-green
                       text-forest-green text-[10px] tracking-[0.2em] uppercase
                       py-3 px-8 transition-all duration-300">
                Inquire
            </a>`;
        }
        return `<a href="index.html"
            class="hidden sm:flex items-center gap-2 border border-forest-green/20
                   hover:border-forest-green text-forest-green text-[10px]
                   tracking-[0.2em] uppercase py-3 px-8 transition-all duration-300">
            <span class="material-symbols-outlined text-sm">arrow_back</span>
            Back
        </a>`;
    }

    /* ── Public API ────────────────────────────────────────── */
    return {

        /**
         * Render the site header.
         * @param {string} page - 'home' | any other page slug
         */
        header(page = 'home') {
            const homeHref = page === 'home' ? 'index.html' : 'index.html';
            return `
<div id="scroll-progress"></div>
<header id="site-header" class="w-full py-8 px-8 lg:px-16 flex justify-between items-center sticky top-0 z-50 bg-earth-primary/80 backdrop-blur-md">
    <a href="${homeHref}" class="flex items-center gap-3">
        <span class="material-symbols-outlined text-forest-green text-2xl">token</span>
        ${buildBrand()}
    </a>
    <nav class="hidden md:flex gap-12 text-[10px] font-bold tracking-[0.2em] uppercase text-text-muted">
        ${buildNav(page)}
    </nav>
    ${buildCTA(page)}
</header>`;
        },

        /**
         * Render the site footer.
         */
        footer() {
            return `
<footer class="py-20 bg-earth-secondary px-8 lg:px-16 border-t border-forest-green/5">
    <div class="narrative-container">
        <div class="flex flex-col md:flex-row justify-between items-start gap-20">
            <div class="flex flex-col gap-8" data-reveal>
                <a href="index.html" class="flex items-center gap-3">
                    <span class="material-symbols-outlined text-forest-green">token</span>
                    <span class="text-forest-green font-serif text-xl tracking-wide uppercase">Orgence AI</span>
                </a>
                <p class="text-text-muted text-sm font-light max-w-xs leading-relaxed">
                    Strategic advisory for the artificial intelligence era.
                </p>
            </div>
            <div class="grid grid-cols-2 gap-16 lg:gap-32" data-reveal data-delay="1">
                <div class="flex flex-col gap-6">
                    <h4 class="text-[10px] font-bold uppercase tracking-[0.2em] text-text-muted">Company</h4>
                    <nav class="flex flex-col gap-4 text-sm font-light text-text-muted">
                        <a class="hover:text-forest-green transition-colors" href="#">About</a>
                        <a class="hover:text-forest-green transition-colors" href="#">Careers</a>
                        <a class="hover:text-forest-green transition-colors" href="#">Contact</a>
                    </nav>
                </div>
                <div class="flex flex-col gap-6">
                    <h4 class="text-[10px] font-bold uppercase tracking-[0.2em] text-text-muted">Legal</h4>
                    <nav class="flex flex-col gap-4 text-sm font-light text-text-muted">
                        <a class="hover:text-forest-green transition-colors" href="#">Privacy Policy</a>
                        <a class="hover:text-forest-green transition-colors" href="#">Terms of Service</a>
                    </nav>
                </div>
            </div>
        </div>
        <div class="mt-20 pt-10 border-t border-forest-green/5 flex flex-col md:flex-row
                    justify-between items-center gap-6 text-[10px] text-text-muted/60
                    font-bold tracking-[0.1em] uppercase">
            <div>© 2026 Orgence AI. All rights reserved.</div>
            <div class="flex gap-8">
                <span>London</span>
                <span>New York</span>
                <span>San Francisco</span>
            </div>
        </div>
    </div>
</footer>`;
        },
    };

})();

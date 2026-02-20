/**
 * Orgence AI — Shared HTML Components
 *
 * Header and footer are defined once here and injected into
 * every page via:
 *
 *   document.getElementById('site-header').outerHTML = OrgenceComponents.header();
 *   document.getElementById('site-footer').outerHTML = OrgenceComponents.footer();
 */

const OrgenceComponents = (() => {

    return {

        /**
         * Site header / navigation.
         * @param {string} page - active page slug ('home' | 'services' | 'work' | 'about')
         */
        header(page = 'home') {
            const link = (slug, label, href) => {
                const active = page === slug ? ' style="color:#111111;"' : '';
                return `<li><a href="${href}"${active}>${label}</a></li>`;
            };

            return `
<div id="scroll-progress"></div>

<header class="site-header">

    <nav class="site-nav">
        <div class="nav-container">

            <!-- Logo -->
            <a href="/" class="nav-logo"><img src="/assets/logo.png" alt="Orgence" class="nav-logo-img"></a>

            <!-- Centre links -->
            <ul class="nav-links">
                ${link('services', 'Services',     '#services')}
                ${link('work',     'Work',          '#work')}
                ${link('about',    'About',         '#about')}
                ${link('contact',  'Contact',       '#contact')}
            </ul>

            <!-- Mobile hamburger -->
            <button class="nav-hamburger" id="nav-toggle" aria-label="Toggle navigation" aria-expanded="false">
                <span></span>
                <span></span>
                <span></span>
            </button>

        </div>
    </nav>

    <!-- Mobile dropdown -->
    <div class="nav-mobile" id="nav-mobile" aria-hidden="true">
        <ul>
            <li><a href="#services">Services</a></li>
            <li><a href="#work">Work</a></li>
            <li><a href="#about">About</a></li>
            <li><a href="#contact">Contact</a></li>
        </ul>
        <a href="#contact" class="nav-cta">Get started</a>
    </div>

</header>`;
        },

        /**
         * Site footer.
         */
        footer() {
            return `
<footer class="site-footer">
    <div class="footer-container">

        <div class="footer-top">

            <!-- Brand -->
            <div class="footer-brand">
                <a href="/" class="footer-logo"><img src="/assets/logo.png" alt="Orgence" class="footer-logo-img"></a>
                <p class="footer-tagline">AI strategy and implementation for ambitious companies.</p>
            </div>

            <!-- Link columns -->
            <div class="footer-cols">

                <div class="footer-col">
                    <h4>Services</h4>
                    <ul>
                        <li><a href="#">AI Strategy</a></li>
                        <li><a href="#">Implementation</a></li>
                        <li><a href="#">Training &amp; Workshops</a></li>
                        <li><a href="#">Audit &amp; Advisory</a></li>
                    </ul>
                </div>

                <div class="footer-col">
                    <h4>Company</h4>
                    <ul>
                        <li><a href="#">About</a></li>
                        <li><a href="#">Work</a></li>
                        <li><a href="#">Blog</a></li>
                        <li><a href="#">Contact</a></li>
                    </ul>
                </div>

                <div class="footer-col">
                    <h4>Legal</h4>
                    <ul>
                        <li><a href="#">Privacy Policy</a></li>
                        <li><a href="#">Terms of Service</a></li>
                        <li><a href="#">LinkedIn</a></li>
                        <li><a href="#">Twitter / X</a></li>
                    </ul>
                </div>

            </div>
        </div>

        <div class="footer-bottom">
            <p>&copy; Orgence AI 2026. All rights reserved.</p>
        </div>

    </div>
</footer>`;
        },

    };

})();

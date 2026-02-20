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
                ${link('services', 'Services',     '/#services')}
                ${link('work',     'Work',          '/#work')}
                ${link('about',    'About',         '/#about')}
                ${link('contact',  'Contact',       '/contact.html')}
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
            <li><a href="/#services">Services</a></li>
            <li><a href="/#work">Work</a></li>
            <li><a href="/#about">About</a></li>
            <li><a href="/contact.html">Contact</a></li>
        </ul>
        <a href="/contact.html" class="nav-cta">Get started</a>
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

        <!-- ── Main row: tagline | nav | CTA ── -->
        <div class="footer-main">

            <div class="footer-tagline-block">
                <p class="footer-big-tagline">Shaping the future<br>of business through<br>artificial intelligence.</p>
            </div>

            <nav class="footer-nav">
                <a href="#services">Services</a>
                <a href="#work">Work</a>
                <a href="#about">About</a>
                <a href="#contact">Contact</a>
                <a href="#">Blog</a>
            </nav>

            <div class="footer-assist">
                <h3 class="footer-assist-heading">How can we help?</h3>
                <p class="footer-assist-body">Ready to embed AI into the heart of your business? Our team is here to guide every step.</p>
                <a href="/contact.html" class="footer-assist-btn">Get in touch &nbsp;&rarr;</a>
            </div>

        </div>

        <!-- ── Bottom bar: logo | legal | social ── -->
        <div class="footer-bottom">
            <a href="/" class="footer-logo-link">
                <img src="/assets/logo.png" alt="Orgence" class="footer-logo-img">
            </a>
            <div class="footer-legal">
                <a href="#">Privacy Policy</a>
                <a href="#">Terms of Service</a>
                <a href="#">Cookie Preferences</a>
            </div>
            <div class="footer-social">
                <span class="footer-social-label">Follow us</span>
                <a href="#" aria-label="LinkedIn" class="footer-social-icon">
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M20.447 20.452H17.21v-5.569c0-1.328-.025-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.984V9.187h3.102v1.481h.044c.432-.818 1.487-1.681 3.061-1.681 3.272 0 3.876 2.154 3.876 4.956v6.509zM5.337 7.433a1.8 1.8 0 1 1 0-3.601 1.8 1.8 0 0 1 0 3.601zM6.959 20.452H3.714V9.187h3.245v11.265zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg>
                </a>
                <a href="#" aria-label="Twitter / X" class="footer-social-icon">
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-4.714-6.231-5.401 6.231H2.747l7.73-8.835L1.254 2.25H8.08l4.258 5.626 5.906-5.626zm-1.161 17.52h1.833L7.084 4.126H5.117z"/></svg>
                </a>
            </div>
        </div>

    </div>
</footer>`;
        },

    };

})();

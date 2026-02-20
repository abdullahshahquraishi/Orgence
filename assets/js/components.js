/**
 * Orgence AI — Shared HTML Components (v2 skeleton)
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
         * @param {string} page - page slug (for active state etc.)
         */
        header(page = 'home') {
            return `
<div id="scroll-progress"></div>

<!-- ── Navigation ───────────────────────────────────────────── -->
<!-- Build header here -->
`;
        },

        /**
         * Site footer.
         */
        footer() {
            return `
<footer>
    <!-- Build footer here -->
</footer>`;
        },

    };

})();

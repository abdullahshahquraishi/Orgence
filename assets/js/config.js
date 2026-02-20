/**
 * Orgence AI — Tailwind Configuration
 *
 * Single source of truth for the design system:
 * colors, fonts, spacing overrides.
 *
 * IMPORTANT: Load this AFTER the Tailwind CDN <script> tag.
 */

tailwind.config = {
    darkMode: "class",
    theme: {
        extend: {
            colors: {
                /* ── Brand palette ──────────────────────────────── */
                "orgence-orange":      "#f96300",
                "orgence-orange-dark": "#e05800",
                "orgence-black":       "#111111",
                "orgence-dark-gray":   "#555555",
                "orgence-mid-gray":    "#8a8a8a",
                "orgence-light-gray":  "#F5F5F5",
                "orgence-border":      "#E8E8E8",
                "orgence-white":       "#FFFFFF",
            },
            fontFamily: {
                /* Place font files in assets/fonts/ for these to activate.
                   System fallbacks are used until then. */
                "sans":  ["Zalando Sans", "Helvetica Neue", "Arial", "sans-serif"],
                "serif": ["Century Expanded", "Georgia", "Times New Roman", "serif"],
            },
            letterSpacing: {
                "display": "-0.04em",
                "heading": "-0.02em",
                "wide":    "0.08em",
            },
            maxWidth: {
                "content": "1280px",
            },
        },
    },
};

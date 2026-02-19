/**
 * Orgence AI — Tailwind Configuration
 *
 * Single source of truth for the design system:
 * colors, fonts, spacing overrides.
 *
 * IMPORTANT: Load this AFTER the Tailwind CDN <script> tag.
 * The CDN defines the `tailwind` global object; this file then sets
 * tailwind.config, which Tailwind reads on DOMContentLoaded.
 */

tailwind.config = {
    darkMode: "class",
    theme: {
        extend: {
            colors: {
                /* ── Brand palette ──────────────────────── */
                "earth-primary":   "#FAF9F6",   /* page background */
                "earth-secondary": "#F2EFED",   /* alt section bg  */
                "forest-green":    "#1B3022",   /* primary brand   */
                "terracotta":      "#8D493A",   /* accent          */
                /* ── Typography ────────────────────────── */
                "text-main":       "#1A1C19",
                "text-muted":      "#5C5E5B",
                /* ── Borders ────────────────────────────── */
                "border-earth":    "rgba(27, 48, 34, 0.1)",
            },
            fontFamily: {
                "sans":  ["Inter", "sans-serif"],
                "serif": ["Libre Baskerville", "serif"],
            },
            letterSpacing: {
                "tighter": "-0.04em",
                "widest":  "0.15em",
            },
        },
    },
};

import type { Config } from "tailwindcss";
import withMT from "@material-tailwind/react/utils/withMT";
import flattenColorPalette from "tailwindcss/lib/util/flattenColorPalette";

export default withMT({
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
      animation: {
        scroll:
          "scroll var(--animation-duration, 40s) var(--animation-direction, forwards) linear infinite",
        slide: "slide 15s linear infinite",
        slideReverse: "slideReverse 15s linear infinite",
      },
      keyframes: {
        slide: {
          from: { transform: "translatex(0)" },
          to: { transform: "translatex(-50%)" },
        },
        slideReverse: {
          from: { transform: "translatex(-50%)" },
          to: { transform: "translatex(0)" },
        },
        scroll: {
          to: {
            transform: "translate(calc(-50% - 0.5rem))",
          },
        },
      },
    },
  },
  plugins: [addVariablesForColors],
} satisfies Config);

function addVariablesForColors({ addBase, theme }: any) {
  const allColors = flattenColorPalette(theme("colors"));
  const newVars = Object.fromEntries(
    Object.entries(allColors).map(([key, val]) => [`--${key}`, val]),
  );

  addBase({
    ":root": newVars,
  });
}

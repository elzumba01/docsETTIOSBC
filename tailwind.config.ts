import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      colors: {
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      keyframes: {
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
      },
      typography: {
        DEFAULT: {
          css: {
            maxWidth: 'none',
            color: 'hsl(var(--foreground))',
            a: {
              color: 'hsl(var(--primary))',
              '&:hover': {
                color: 'hsl(var(--primary) / 0.8)',
              },
              textDecoration: 'underline',
              textUnderlineOffset: '4px',
            },
            'h1, h2, h3, h4, h5, h6': {
              color: 'hsl(var(--foreground))',
              fontWeight: 'bold',
            },
            h1: {
              fontSize: '2.5rem',
              marginTop: '2rem',
              marginBottom: '1rem',
            },
            h2: {
              fontSize: '2rem',
              marginTop: '2.5rem',
              marginBottom: '1rem',
              paddingBottom: '0.5rem',
              borderBottomWidth: '1px',
              borderBottomColor: 'hsl(var(--border))',
            },
            h3: {
              fontSize: '1.5rem',
              marginTop: '2rem',
              marginBottom: '1rem',
            },
            p: {
              marginTop: '1.5rem',
              marginBottom: '1.5rem',
              lineHeight: '1.75',
            },
            ul: {
              listStyleType: 'disc',
              marginTop: '1.5rem',
              marginBottom: '1.5rem',
              paddingLeft: '1.5rem',
            },
            ol: {
              listStyleType: 'decimal',
              marginTop: '1.5rem',
              marginBottom: '1.5rem',
              paddingLeft: '1.5rem',
            },
            li: {
              marginTop: '0.5rem',
              marginBottom: '0.5rem',
            },
            code: {
              color: 'hsl(var(--foreground))',
              backgroundColor: 'hsl(var(--muted))',
              borderRadius: '0.25rem',
              padding: '0.15rem 0.3rem',
              fontFamily: 'monospace',
            },
            pre: {
              backgroundColor: 'hsl(var(--muted))',
              padding: '1rem',
              borderRadius: '0.5rem',
              overflow: 'auto',
              code: {
                backgroundColor: 'transparent',
                padding: '0',
              },
            },
            table: {
              width: '100%',
              borderCollapse: 'collapse',
              marginTop: '1.5rem',
              marginBottom: '1.5rem',
            },
            th: {
              backgroundColor: 'hsl(var(--muted))',
              padding: '0.75rem',
              borderWidth: '1px',
              borderColor: 'hsl(var(--border))',
              textAlign: 'left',
            },
            td: {
              padding: '0.75rem',
              borderWidth: '1px',
              borderColor: 'hsl(var(--border))',
            },
          },
        },
      },
    },
  },
  plugins: [
    require("tailwindcss-animate"),
    require('@tailwindcss/typography'),
  ],
};

export default config;

// tailwind.config.ts
import type { Config } from "tailwindcss";

export default {
  darkMode: ["class"],
  content: ["./pages/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}", "./app/**/*.{ts,tsx}", "./src/**/*.{ts,tsx}"],
  prefix: "",
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
        sidebar: {
          DEFAULT: "hsl(var(--sidebar-background))",
          foreground: "hsl(var(--sidebar-foreground))",
          primary: "hsl(var(--sidebar-primary))",
          "primary-foreground": "hsl(var(--sidebar-primary-foreground))",
          accent: "hsl(var(--sidebar-accent))",
          "accent-foreground": "hsl(var(--sidebar-accent-foreground))",
          border: "hsl(var(--sidebar-border))",
          ring: "hsl(var(--sidebar-ring))",
        },
        gradient: {
          orange: "hsl(var(--gradient-orange))",
          blue: "hsl(var(--gradient-blue))",
          purple: "hsl(var(--gradient-purple))",
        },
        // Custom orange color
        orange: {
          DEFAULT: "hsl(var(--gradient-orange))",
          light: "hsl(var(--gradient-orange) / 0.1)",
          dark: "hsl(var(--gradient-orange) / 0.2)",
        },
      },
      backgroundImage: {
        'gradient-primary': 'var(--gradient-primary)',
        'gradient-orb': 'var(--gradient-orb)',
        'gradient-radial': 'radial-gradient(circle, var(--tw-gradient-from), var(--tw-gradient-to))',
        'gradient-radial-at-t': 'radial-gradient(circle at top, var(--tw-gradient-from), var(--tw-gradient-to))',
        'gradient-radial-at-b': 'radial-gradient(circle at bottom, var(--tw-gradient-from), var(--tw-gradient-to))',
        'gradient-radial-at-l': 'radial-gradient(circle at left, var(--tw-gradient-from), var(--tw-gradient-to))',
        'gradient-radial-at-r': 'radial-gradient(circle at right, var(--tw-gradient-from), var(--tw-gradient-to))',
      },
      boxShadow: {
        'glow': 'var(--shadow-glow)',
        'card': 'var(--shadow-card)',
        'glow-sm': '0 0 20px hsl(var(--gradient-orange) / 0.2)',
        'glow-lg': '0 0 60px hsl(var(--gradient-orange) / 0.4)',
      },
      transitionProperty: {
        'smooth': 'var(--transition-smooth)',
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      keyframes: {
        "accordion-down": {
          from: {
            height: "0",
          },
          to: {
            height: "var(--radix-accordion-content-height)",
          },
        },
        "accordion-up": {
          from: {
            height: "var(--radix-accordion-content-height)",
          },
          to: {
            height: "0",
          },
        },
        "float": {
          "0%, 100%": {
            transform: "translateY(0) scale(1)",
          },
          "50%": {
            transform: "translateY(-20px) scale(1.05)",
          },
        },
        "pulse-glow": {
          "0%, 100%": {
            opacity: "0.5",
          },
          "50%": {
            opacity: "1",
          },
        },
        "spin-slow": {
          from: {
            transform: "rotate(0deg)",
          },
          to: {
            transform: "rotate(360deg)",
          },
        },
        "slide-in-right": {
          from: {
            transform: "translateX(100%)",
            opacity: "0",
          },
          to: {
            transform: "translateX(0)",
            opacity: "1",
          },
        },
        "slide-in-left": {
          from: {
            transform: "translateX(-100%)",
            opacity: "0",
          },
          to: {
            transform: "translateX(0)",
            opacity: "1",
          },
        },
        "fade-in": {
          from: {
            opacity: "0",
          },
          to: {
            opacity: "1",
          },
        },
        "scale-in": {
          from: {
            transform: "scale(0.9)",
            opacity: "0",
          },
          to: {
            transform: "scale(1)",
            opacity: "1",
          },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
        "float": "float 6s ease-in-out infinite",
        "pulse-glow": "pulse-glow 2s ease-in-out infinite",
        "spin-slow": "spin-slow 20s linear infinite",
        "slide-in-right": "slide-in-right 0.6s ease-out",
        "slide-in-left": "slide-in-left 0.6s ease-out",
        "fade-in": "fade-in 0.6s ease-out",
        "scale-in": "scale-in 0.6s ease-out",
      },
      animationDelay: {
        '0': '0s',
        '200': '200ms',
        '400': '400ms',
        '600': '600ms',
        '800': '800ms',
        '1000': '1s',
        '2000': '2s',
        '3000': '3s',
        '4000': '4s',
      },
      backdropBlur: {
        xs: '2px',
      },
      spacing: {
        '18': '4.5rem',
        '88': '22rem',
        '120': '30rem',
      },
      fontFamily: {
        'arabic': ['Cairo', 'system-ui', 'sans-serif'],
      },
      screens: {
        'xs': '480px',
        '3xl': '1920px',
      },
      transitionDuration: {
        '2000': '2000ms',
        '3000': '3000ms',
      },
      zIndex: {
        '60': '60',
        '70': '70',
        '80': '80',
        '90': '90',
        '100': '100',
      },
      scale: {
        '102': '1.02',
        '103': '1.03',
      },
    },
  },
  plugins: [
    require("tailwindcss-animate"),
    // Plugin for animation delay utilities
    ({ addUtilities }: any) => {
      const delays = {
        '.animation-delay-0': { 'animation-delay': '0s' },
        '.animation-delay-200': { 'animation-delay': '200ms' },
        '.animation-delay-400': { 'animation-delay': '400ms' },
        '.animation-delay-600': { 'animation-delay': '600ms' },
        '.animation-delay-800': { 'animation-delay': '800ms' },
        '.animation-delay-1000': { 'animation-delay': '1s' },
        '.animation-delay-2000': { 'animation-delay': '2s' },
        '.animation-delay-3000': { 'animation-delay': '3s' },
        '.animation-delay-4000': { 'animation-delay': '4s' },
      };
      addUtilities(delays);
    },
    // Plugin for glass morphism
    ({ addUtilities }: any) => {
      const glass = {
        '.glass': {
          'background': 'hsl(var(--background) / 0.8)',
          'backdrop-filter': 'blur(10px)',
          '-webkit-backdrop-filter': 'blur(10px)',
          'border': '1px solid hsl(var(--border) / 0.5)',
        },
        '.glass-card': {
          'background': 'hsl(var(--card) / 0.9)',
          'backdrop-filter': 'blur(12px)',
          '-webkit-backdrop-filter': 'blur(12px)',
          'border': '1px solid hsl(var(--border) / 0.5)',
        },
      };
      addUtilities(glass);
    },
    // Plugin for text gradient
    ({ addUtilities }: any) => {
      const textGradients = {
        '.gradient-text': {
          'background': 'var(--gradient-primary)',
          '-webkit-background-clip': 'text',
          '-webkit-text-fill-color': 'transparent',
          'background-clip': 'text',
        },
        '.text-orange': {
          'color': 'hsl(var(--gradient-orange))',
        },
        '.bg-orange': {
          'background-color': 'hsl(var(--gradient-orange))',
        },
        '.bg-orange-light': {
          'background-color': 'hsl(var(--gradient-orange) / 0.1)',
        },
      };
      addUtilities(textGradients);
    },
    // Plugin for hero dark background
    ({ addUtilities }: any) => {
      const backgrounds = {
        '.hero-dark': {
          'background-color': '#222323',
        },
        '.dark .hero-dark': {
          'background-color': '#0a0a0a',
        },
      };
      addUtilities(backgrounds);
    },
  ],
} satisfies Config;
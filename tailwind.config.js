/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        // Core brand palette
        brand: {
          red:       '#C8102E',   // deep crimson — primary
          'red-dark':'#8B0000',   // blood red — depth/shadows
          'red-light':'#E63950',  // rose red — hover states
          'red-muted':'#F7C5CE',  // blush — subtle backgrounds
          white:     '#FAFAFA',   // off-white — base
          'white-pure':'#FFFFFF', // pure white
          'white-warm':'#FFF5F5', // warm white — tinted surfaces
          cream:     '#FFF0F0',   // cream — card backgrounds
          charcoal:  '#1A0A0A',   // near-black with red undertone
          'gray-red': '#3D1A1A',  // dark muted red-gray
        },
      },
      fontFamily: {
        display: ['"Playfair Display"', 'Georgia', 'serif'],
        body:    ['"DM Sans"', 'sans-serif'],
        mono:    ['"DM Mono"', 'monospace'],
      },
      backgroundImage: {
        'gradient-brand':   'linear-gradient(135deg, #C8102E 0%, #8B0000 100%)',
        'gradient-blush':   'linear-gradient(135deg, #FFF0F0 0%, #F7C5CE 100%)',
        'gradient-crimson': 'linear-gradient(180deg, #1A0A0A 0%, #3D1A1A 50%, #8B0000 100%)',
        'gradient-hero':    'radial-gradient(ellipse at top, #8B0000 0%, #1A0A0A 70%)',
      },
      boxShadow: {
        'red-glow':  '0 0 30px rgba(200,16,46,0.4)',
        'red-soft':  '0 4px 24px rgba(200,16,46,0.15)',
        'red-harsh': '6px 6px 0px #8B0000',
        'card':      '0 8px 32px rgba(139,0,0,0.12)',
      },
      animation: {
        'pulse-red': 'pulse-red 2s cubic-bezier(0.4,0,0.6,1) infinite',
        'float':     'float 6s ease-in-out infinite',
      },
      keyframes: {
        'pulse-red': {
          '0%,100%': { boxShadow: '0 0 0 0 rgba(200,16,46,0.4)' },
          '50%':     { boxShadow: '0 0 0 12px rgba(200,16,46,0)' },
        },
        float: {
          '0%,100%': { transform: 'translateY(0px)' },
          '50%':     { transform: 'translateY(-12px)' },
        },
      },
    },
  },
  plugins: [],
}
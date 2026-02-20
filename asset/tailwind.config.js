/** @type {import('tailwindcss').Config} */
// ═══════════════════════════════════════════════════════
// GRUPO N9 — Tailwind CSS Configuration
// Version 1.1 — Fevereiro 2026
//
// CONCEITO: N9 = "Número 9". Na logo, N = corpo do elefante,
// 9 = cabeça com orelha. Sempre usar PNG transparente.
// ═══════════════════════════════════════════════════════

module.exports = {
  content: ['./src/**/*.{html,js,jsx,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        n9: {
          primary:         '#2C3E50',
          accent:          '#333333',
          secondary:       '#555555',
          'text-light':    '#7F8C8D',
          'bg-light':      '#F8F9FA',
          'primary-dark':  '#1A252F',
          'primary-light': '#3D5166',
          'gray-mid':      '#6C7A89',
          'gray-light':    '#BDC3C7',
          'gray-lighter':  '#D5DBDB',
          'bg-alt':        '#ECF0F1',
          'gray-neutral':  '#95A5A6',
        },
      },
      fontFamily: {
        n9: ["'Helvetica Neue'", 'Helvetica', "'Nunito Sans'", 'Arial', 'sans-serif'],
        'n9-alt': ["'Source Sans Pro'", "'Open Sans'", 'sans-serif'],
        'n9-mono': ["'SF Mono'", "'Fira Code'", "'Cascadia Code'", 'monospace'],
      },
      fontSize: {
        'n9-xs':   ['0.75rem',  { lineHeight: '1.4' }],
        'n9-sm':   ['0.875rem', { lineHeight: '1.5' }],
        'n9-base': ['1rem',     { lineHeight: '1.6' }],
        'n9-lg':   ['1.125rem', { lineHeight: '1.5' }],
        'n9-xl':   ['1.25rem',  { lineHeight: '1.35' }],
        'n9-2xl':  ['1.5rem',   { lineHeight: '1.3' }],
        'n9-3xl':  ['1.875rem', { lineHeight: '1.25' }],
        'n9-4xl':  ['2.25rem',  { lineHeight: '1.2' }],
      },
      boxShadow: {
        'n9-sm': '0 1px 2px rgba(26, 37, 47, 0.06)',
        'n9-md': '0 4px 12px rgba(26, 37, 47, 0.08)',
        'n9-lg': '0 8px 24px rgba(26, 37, 47, 0.12)',
      },
      borderRadius: {
        'n9-sm': '4px',
        'n9-md': '8px',
        'n9-lg': '12px',
        'n9-xl': '16px',
      },
      spacing: {
        'n9-1':  '0.25rem',
        'n9-2':  '0.5rem',
        'n9-3':  '0.75rem',
        'n9-4':  '1rem',
        'n9-6':  '1.5rem',
        'n9-8':  '2rem',
        'n9-12': '3rem',
        'n9-16': '4rem',
      },
      // Logo minimum sizes reference:
      // Full logo:  min-w-[120px] (digital) / 30mm (print)
      // Icon only:  min-w-[32px]  (digital) / 12mm (print)
      width: {
        'n9-logo-full':    '160px',
        'n9-logo-md':      '120px',
        'n9-logo-sm':      '80px',
        'n9-logo-icon':    '40px',
        'n9-logo-favicon': '32px',
      },
    },
  },
  plugins: [],
};

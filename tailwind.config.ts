import type { Config } from 'tailwindcss';
import { PluginAPI } from 'tailwindcss/types/config';

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        black: '#1D1D1B',
        white: '#FFFFFF',
        'gray-01': '#A4ADAC',
        'gray-02': '#D6DBDB',
        'gray-03': '#E8EDEE',
        'gray-04': '#F2F6F6',
        orange: '#FF5900',
        'dark-orange': '#E0570E',
        error: '#FF4026',
        background: 'var(--background)',
        foreground: 'var(--foreground)',

        'header-nav-default': '#1D1D1B',
        'header-nav-hover': '#FF5900',
        'header-nav-active': '#FF5900',
      },

      fontSize: {
        'button-base': [
          '14px',
          {
            lineHeight: '24%',
            letterSpacing: '-0.5%',
          },
        ],
        'heading-lg': [
          'var(--font-size-heading-lg)',
          {
            lineHeight: 'var(--line-height-heading-lg)',
            letterSpacing: 'var(--letter-spacing-heading-lg)',
          },
        ],
        'heading-base': [
          'var(--font-size-heading-base)',
          {
            lineHeight: 'var(--line-height-heading-base)',
            letterSpacing: 'var(--letter-spacing-heading-base)',
          },
        ],
        'heading-md': [
          'var(--font-size-heading-md)',
          {
            lineHeight: 'var(--line-height-heading-md)',
            letterSpacing: 'var(--letter-spacing-heading-md)',
          },
        ],
        'body-lg': [
          'var(--font-size-body-lg)',
          {
            lineHeight: 'var(--line-height-body-lg)',
            letterSpacing: 'var(--letter-spacing-body-lg)',
          },
        ],
        'body-base': [
          'var(--font-size-body-base)',
          {
            lineHeight: 'var(--line-height-body-base)',
            letterSpacing: 'var(--letter-spacing-body-base)',
          },
        ],
        'body-md': [
          'var(--font-size-body-md)',
          {
            lineHeight: 'var(--line-height-body-md)',
            letterSpacing: 'var(--letter-spacing-body-md)',
          },
        ],
      },
    },
  },
  plugins: [
    function ({ addBase }: PluginAPI) {
      addBase({
        /* Mobile */
        ':root': {
          '--font-size-heading-lg': '36px',
          '--line-height-heading-lg': '110%',
          '--letter-spacing-heading-lg': '-4%',

          '--font-size-heading-base': '24px',
          '--line-height-heading-base': '100%',
          '--letter-spacing-heading-base': '0%',

          '--font-size-heading-md': '20px',
          '--line-height-heading-md': '100%',
          '--letter-spacing-heading-md': '0%',

          '--font-size-body-lg': '16px',
          '--line-height-body-lg': '100%',
          '--letter-spacing-body-lg': '0%',

          '--font-size-body-base': '14px',
          '--line-height-body-base': '100%',
          '--letter-spacing-body-base': '0%',
        },
        /* Tablet */
        '@screen md': {
          ':root': {
            '--font-size-heading-lg': '52px',
            '--line-height-heading-lg': '110%',
            '--letter-spacing-heading-lg': '-4%',

            '--font-size-heading-base': '28px',
            '--line-height-heading-base': '120%',
            '--letter-spacing-heading-base': '0%',

            '--font-size-heading-md': '16px',
            '--line-height-heading-md': '100%',
            '--letter-spacing-heading-md': '0%',

            '--font-size-body-lg': '14px',
            '--line-height-body-lg': '120%',
            '--letter-spacing-body-lg': '0%',

            '--font-size-body-base': '12px',
            '--line-height-body-base': '116%',
            '--letter-spacing-body-base': '0%',
          },
        },
        /* Desktop */
        '@screen lg': {
          ':root': {
            '--font-size-heading-lg': '80px',
            '--line-height-heading-lg': '110%',
            '--letter-spacing-heading-lg': '-4%',

            '--font-size-heading-base': '32px',
            '--line-height-heading-base': '120%',
            '--letter-spacing-heading-base': '0%',

            '--font-size-heading-md': '24px',
            '--line-height-heading-md': '132%',
            '--letter-spacing-heading-md': '0%',

            '--font-size-body-lg': '22px',
            '--line-height-body-lg': '132%',
            '--letter-spacing-body-lg': '0%',

            '--font-size-body-base': '18px',
            '--line-height-body-base': '122%',
            '--letter-spacing-body-base': '0%',

            '--font-size-body-md': '14px',
            '--line-height-body-md': '120%',
            '--letter-spacing-body-md': '0%',
          },
        },
      });
    },
  ],
};
export default config;

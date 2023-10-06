/** @type {import('tailwindcss').Config} */
import { fontFamily } from 'tailwindcss/defaultTheme';

// function hexToRgbA(hex) {
//   var c;
//   if (/^#([A-Fa-f0-9]{3}){1,2}$/.test(hex)) {
//     c = hex.substring(1).split('');
//     if (c.length == 3) {
//       c = [c[0], c[0], c[1], c[1], c[2], c[2]];
//     }
//     c = '0x' + c.join('');
//     return 'rgba(' + [(c >> 16) & 255, (c >> 8) & 255, c & 255].join(',') + ',1)';
//   }
//   throw new Error('Bad Hex');
// }

// function withOpacity(variableName) {
//   return ({ opacityValue }) => {
//     // value = `var(variableName)`;
//     // rgbValue = hexToRgbA(value);
//     if (opacityValue !== undefined) {
//       return `rgba(var(${variableName}), ${opacityValue})`
//     }
//     return `rgb(var(${variableName}))`
//   }
// }

function withOpacity(variableName) {
  return ({ opacityValue }) => {
    // value = `var(variableName)`;
    // rgbValue = hexToRgbA(value);
    if (opacityValue !== undefined) {

      // return `rgba(var(${variableName}), ${opacityValue})`
    }
    return `rgb(var(${variableName}))`
  }
}

module.exports = {
  mode: process.env.TAILWIND_MODE ? "jit" : "",
  purge: ["./src/**/*.{ts,html,scss}"],
  // content: ["./src/**/*.{html,ts}"],
  theme: {
    fontFamily: {
      ...fontFamily,
      sans: ["Roboto", "Helvetica Neue", "sans-serif", ...fontFamily.sans],
    },
    extend: {
      colors: {
        wave: {
          50: withOpacity('--wave-50'),
          100: withOpacity('--wave-100'),
          200: withOpacity('--wave-200'),
          300: withOpacity('--wave-300'),
          400: withOpacity('--wave-400'),
          500: withOpacity('--wave-500'),
          600: withOpacity('--wave-600'),
          700: withOpacity('--wave-700'),
          800: withOpacity('--wave-800'),
          900: withOpacity('--wave-900'),
          a100: withOpacity('--wave-a100'),
          a200: withOpacity('--wave-a200'),
          a400: withOpacity('--wave-a400'),
          a700: withOpacity('--wave-a700'),
        },
        // primary: {
        //   100: "var(--primary-100)",
        //   500: "var(--primary-500)",
        //   700: "var(--primary-700)",
        // },
        // accent: {
        //   500: "var(--accent-500)",
        // },
        // warn: {
        //   500: "var(--warn-500)",
        // },
        contrast: {
          50: "var(--contrast-50)",
          100: "var(--contrast-100)",
          200: "var(--contrast-200)",
          300: "var(--contrast-300)",
          400: "var(--contrast-400)",
          500: "var(--contrast-500)",
          600: "var(--contrast-600)",
          700: "var(--contrast-700)",
          800: "var(--contrast-800)",
          900: "var(--contrast-900)",
          a100: "var(--contrast-a100)",
          a200: "var(--contrast-a200)",
          a400: "var(--contrast-a400)",
          a700: "var(--contrast-a700)",
        }
      }
    },
  },
  plugins: [],
}


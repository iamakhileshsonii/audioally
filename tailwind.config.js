/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,js,jsx}",  // Your existing content path
    "./node_modules/flowbite/**/*.js"  // Flowbite content path
  ],
  theme: {
     opacity: {
      '0': '0',
      '20': '0.2',
      '40': '0.4',
      '60': '0.6',
      '80': '0.8',
      '100': '1',
    },
    extend: {
      colors: {
        red: {
          light: '#3a8dff',
          default: '#E2072F',
          dark: '#C80036',
        },
        green: {
          light: '#6fcf97',
          default: '#27ae60',
          dark: '#365E32',
        },
        customRed: {
          light: '#ff6f6f',
          DEFAULT: '#e74c3c',
          dark: '#c0392b',
        },
        darkAccent: {
          light: '#535353',
          default: '#2e2e2e',
          dark: '#161616'
        },
        white: {
          default: '#ffffff',
          offWhite: '#d8d8d8',
          dark: '#6d6d6d',
        },
        sectionBg: {
          light:'#f8f8f8',
        }
        // Add more custom colors as needed
      },
    
    },
  },
  plugins: [
    require('flowbite/plugin')
  ]
}

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
          dark: '#0056b3',
        },
        green: {
          light: '#6fcf97',
          default: '#27ae60',
          dark: '#219653',
        },
        customRed: {
          light: '#ff6f6f',
          DEFAULT: '#e74c3c',
          dark: '#c0392b',
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

import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      

      screens: {
        sp:'500px',
        sm:'640px',
        md:'768px',
        mv:'900px',
        mm:'1000px',
        lg:'1100px',
        xl:'1440px',

      },

      backgroundPosition: {
        'yellow-position-1': 'left -17rem  top -15rem',
        'yellow-position-2': 'left -4.375rem top -5rem',
        'water mark':'left 0 top 0'

      },
      
      
    },
  },
  plugins: [],
}
export default config

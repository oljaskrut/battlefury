/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./src/**/*.{html,js,svelte,ts}'],
	theme: {
		extend: {
			colors: {
				'accent-1': '#FAFAFA',
				'accent-2': '#EAEAEA',
				'accent-7': '#333',
				success: '#0070f3',
				cyan: '#79FFE1',
				'blue-500': '#2276FC',
				'yellow-100': '#fef7da'
			},
			spacing: {
				28: '7rem'
			},
			letterSpacing: {
				tighter: '-.04em'
			},
			lineHeight: {
				tight: 1.2
			},
			fontSize: {
				'5xl': '2.5rem',
				'6xl': '2.75rem',
				'7xl': '4.5rem',
				'8xl': '6.25rem'
			},
			boxShadow: {
				small: '0 5px 10px ',
				medium: '0 8px 30px '
			}
		}
	},
	plugins: []
}

export default {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            fontFamily: {
                sans: ['Inter', 'sans-serif'],
                serif: ['"Playfair Display"', 'serif'],
                display: ['Outfit', 'sans-serif'],
            },
            colors: {
                'pink-luxury': '#F3E5E9', // Very subtle pink
                'pink-accent': '#D4A5A5', // Muted rose for accents
                'pink-vibrant': '#E85D75', // Pop of pink
                'text-main': '#1a1a1a',
                'text-sub': '#4a4a4a',
            },
            letterSpacing: {
                'tightest': '-0.05em',
                'widest-luxury': '0.15em',
            }
        },
    },
    plugins: [],
}

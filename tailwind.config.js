module.exports = {
  content: [
    "./src/**/*.{astro,js,jsx,ts,tsx,mdx,md}",
    "./public/**/*.html"
  ],
  theme: {
    extend: {
      fontFamily: {
        'heading': ['Libre Baskerville', 'Times New Roman', 'serif'],
        'body': ['Source Serif 4', 'Georgia', 'serif'],
        'accent': ['Crimson Text', 'Baskerville', 'serif'],
        'ui': ['Inter', 'Helvetica Neue', 'sans-serif'],
      },
      letterSpacing: {
        'book': '0.01em',
        'tight-book': '-0.01em',
        'tighter-book': '-0.02em',
      }
    },
  },
  plugins: [],
};

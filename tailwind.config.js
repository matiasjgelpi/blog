module.exports = {
  content: [
    "./src/**/*.{astro,js,jsx,ts,tsx,mdx,md}",
    "./public/**/*.html"
  ],
  theme: {
    extend: {
      fontFamily: {
        'heading': ['Playfair Display', 'Times New Roman', 'serif'],
        'body': ['Merriweather', 'Georgia', 'serif'],
        'ui': ['Lato', 'Helvetica Neue', 'sans-serif'],
      },
      colors: {
        'primary-blue': '#1e40af',
        'secondary-blue': '#3b82f6',
        'light-blue': '#dbeafe',
        'dark-navy': '#1e293b',
        'charcoal': '#374151',
        'light-gray': '#f8fafc',
        'medium-gray': '#64748b',
      },
      letterSpacing: {
        'elegant': '0.3px',
        'tight-elegant': '-0.3px',
        'tighter-elegant': '-0.5px',
      }
    },
  },
  plugins: [],
};

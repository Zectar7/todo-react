module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}",],
  theme: {
    extend: {},
    width: {
      '300': '300px',
    },
    backgroundColor: theme => ({
      ...theme('colors'),
      'primary': '#fafafa',
    })
  },
  plugins: [],
}

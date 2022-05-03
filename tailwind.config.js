module.exports = {
  content: [ './index.html', './src/components/**/*.jsx' ],
  theme: {
    extend: {
      colors: {
        'my-bg-white': '#fafafa',
        'my-bg-second': '#f0f5ed',
        'my-bg-third': '#05c46b',

        'my-button': '#fafafa',
        'my-button-border': '#05c46b',
        'my-button-font': '#05c46b',

        'my-button-hover': '#05c46b',
        'my-button-hover-border': '#05c46b',
        'my-button-hover-font': '#fafafa',
        
        'my-font-one': '#2b2e4a',
        'my-font-two': '#05c46b',
        'my-font-three': '#fafafa',
      }
    },
  },
  plugins: [],
}

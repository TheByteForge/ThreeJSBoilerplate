// example theme.js

export default {
  // fontSizes: [12, 14, 16, 20, 24, 32, 48, 64],
  space: [0, 4, 8, 16, 32, 64, 128, 256],
  fonts: {
    primary: 'Gotham, HelveticaNeue, Helvetica Neue, Roboto, Arial, sans-serif',
    sans: 'system-ui, sans-serif',
    mono: 'Menlo, monospace',
  },
  shadows: {
    small: '0 0 4px rgba(0, 0, 0, .125)',
    large: '0 0 24px rgba(0, 0, 0, .125)',
  },
  colors: {
    primary: '#000',
    secondary: '#454E5F',
    tertiary: '#2a2b31',
    text: '#fff',
    price: '#aaaaaa',
    overlay: '#e5e8f1',
    white: '#fff',
    black: '#000',
  },
  fontSize: {
    xl: '3rem',
    lg: '2rem',
    md: '1.75rem',
    sm: '1.5rem',
    xs: '1.25rem',
  },
  fontWeights: [100, 200, 300, 400, 500, 600, 700, 800, 900],
  letterSpacings: {
    normal: 'normal',
    tracked: '0.1em',
    tight: '-0.05em',
    mega: '0.25em',
  },
  lineHeights: {
    normal: '1.639rem',
    tight: '2.264rem',
    large: '2.889rem',
  },
  borders: [
    0,
    '1px solid',
    '2px solid',
    '4px solid',
    '8px solid',
    '16px solid',
    '32px solid',
  ],
  buttons: {
    primary: {
      color: '#fff',
      backgroundColor: '#000',
      padding: '1rem',
    },
    outline: {
      color: 'blue',
      backgroundColor: 'transparent',
      boxShadow: 'inset 0 0 0 2px',
    },
  },
};

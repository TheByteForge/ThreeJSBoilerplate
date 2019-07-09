import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  html,
  body {
    height: 100%;
    width: 100%;
  }

  body {
    font-family: 'IBM Plex Sans', 'Helvetica Neue', Helvetica, sans-serif;
  }

  body.fontLoaded {
    font-family: 'IBM Plex Sans', 'Helvetica Neue', Helvetica, sans-serif;
  }

  #app {
    background-color: #fafafa;
    min-height: 100%;
    min-width: 100%;
    background: ${props => props.theme.colors.secondary};
  }
  
  body::-webkit-scrollbar {
    width: .25em;
  }
  
  body::-webkit-scrollbar-track {
    background-color: #161616;
  }
  
  body::-webkit-scrollbar-thumb {
    background-color: #7f7e77;
    outline: 1px solid slategrey;
  }

  p,
  label {
    font-family: 'IBM Plex Sans', 'Helvetica Neue', Helvetica, sans-serif;
    line-height: 1.5em;
  }
`;

export default GlobalStyle;

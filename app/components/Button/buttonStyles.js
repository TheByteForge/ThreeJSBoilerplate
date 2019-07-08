import { css } from 'styled-components';

const buttonStyles = css`
  display: inline-block;
  box-sizing: border-box;
  padding: 1.5rem 6rem;
  text-decoration: none;
  border-radius: 2px;
  -webkit-font-smoothing: antialiased;
  -webkit-touch-callout: none;
  user-select: none;
  cursor: pointer;
  outline: 0;
  font-family: 'IBM Plex Sans', 'Helvetica Neue', Helvetica, Arial, sans-serif;
  font-weight: bold;
  font-size: 1rem;
  border: 1px solid rgba(101, 51, 255, 1);
  background: rgba(101, 81, 255, 0.8);
  color: #fff;
  transition: ease all 300ms;

  &:active {
    background: ${props => props.theme.colors.primary};
    color: #fff;
  }

  &:hover {
    background: ${props => props.theme.colors.tertiary};
    transition: ease all 300ms;
    -webkit-box-shadow: 0px 10px 21px -6px rgba(0, 0, 0, 0.51);
    -moz-box-shadow: 0px 10px 21px -6px rgba(0, 0, 0, 0.51);
    box-shadow: 0px 10px 21px -6px rgba(0, 0, 0, 0.51);
  }
`;

export default buttonStyles;

import styled from 'styled-components';

const StyledNavigation = styled.div`
  background: ${props => props.theme.colors.secondary};
  display: flex;
  justify-content: space-around;
  align-items: center;
  flex-direction: row;
  width: 100%;
  z-index: 1000;

  a {
    width: 100%;
  }
`;

export default StyledNavigation;

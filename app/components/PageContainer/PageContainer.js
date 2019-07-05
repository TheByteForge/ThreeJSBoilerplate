import styled from 'styled-components';

const PageContainer = styled.div`
  background: ${props => props.theme.colors.tertiary};
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  height: auto;
`;

export default PageContainer;

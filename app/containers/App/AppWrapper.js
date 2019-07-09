import styled from 'styled-components';

const AppWrapper = styled.div`
  max-width: calc(1440px + 16px * 2);
  min-height: 100%;
  margin-right: auto;
  margin-left: auto;
  display: flex;
  flex-direction: column;
  -webkit-box-shadow: 0px 10px 33px 1px rgba(19, 19, 31, 0.75);
  -moz-box-shadow: 0px 10px 33px 1px rgba(19, 19, 31, 0.75);
  box-shadow: 0px 10px 33px 1px rgba(19, 19, 31, 0.75);
`;

export default AppWrapper;

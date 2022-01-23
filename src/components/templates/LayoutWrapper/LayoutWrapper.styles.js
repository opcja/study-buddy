import styled from 'styled-components';

export const LayoutWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(12, 1fr);
  grid-template-rows: 120px 110px auto;
  width: 100%;
  min-height: 100vh;

  background-color: ${({ theme }) => theme.colors.lightGrey};
`;

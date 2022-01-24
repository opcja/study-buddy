import styled from 'styled-components';

export const Wrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(12, 1fr);
  grid-template-rows: 120px 50px auto;
  width: 100%;
  min-height: 100vh;

  background-color: ${({ theme }) => theme.colors.layoutBackgroudGrey};
`;

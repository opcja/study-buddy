import styled from 'styled-components';

export const Wrapper = styled.div`
  grid-column: 2/6;
  grid-row: 3;
  margin: 0 40px;
  border-radius: 25px;
  max-width: 312px;
  max-height: 400px;
  background-color: ${({ theme }) => theme.colors.white};
  padding: 40px 24px 0;
  box-shadow: 0 -3px 6px rgba(0, 0, 0, 0.16), 0 3px 6px rgba(0, 0, 0, 0.23);
`;

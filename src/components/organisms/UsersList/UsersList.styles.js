import styled from 'styled-components';

export const Wrapper = styled.div`
  grid-row: 3/4;
  grid-column: 2/6;
  max-width: 380px;
  background-color: ${({ theme }) => theme.colors.white};
  padding: 40px 8px 0;
  margin: 0 0 20px 40px;
  border-radius: 25px;
  box-shadow: 0 -3px 6px rgba(0, 0, 0, 0.16), 0 3px 6px rgba(0, 0, 0, 0.23);
`;

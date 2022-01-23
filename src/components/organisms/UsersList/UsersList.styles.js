import styled from 'styled-components';

export const Wrapper = styled.div`
  grid-row: 3/4;
  grid-column: 3/7;
  background-color: ${({ theme }) => theme.colors.white};
  padding: 0px 24px;
  margin-bottom: 20px;
  border-radius: 25px;
  box-shadow: 0 -3px 6px rgba(0, 0, 0, 0.16), 0 3px 6px rgba(0, 0, 0, 0.23);
`;

export const StyledTitle = styled.h1`
  font-size: ${({ theme }) => theme.fontSize.xl};
  color: ${({ theme }) => theme.colors.darkGrey};
  margin-bottom: 20px;
`;

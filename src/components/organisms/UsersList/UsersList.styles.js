import styled from 'styled-components';

export const Wrapper = styled.div`
  margin: 25px;
  background-color: white;
  padding: 40px 68px;
  border-radius: 25px;
  box-shadow: 0 5px 15px -2px rgba(0, 0, 0, 0.3);
`;

export const StyledTitle = styled.h1`
  font-size: ${({ theme }) => theme.fontSize.xl};
  color: ${({ theme }) => theme.colors.darkGrey};
  margin-bottom: 20px;
`;

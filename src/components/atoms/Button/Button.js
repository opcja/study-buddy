import styled from 'styled-components';

export const Button = styled.button`
  width: 100%;
  margin: 15px 0;
  padding: 7px 20px;
  font-size: ${({ theme }) => theme.fontSize.s};
  background-color: ${({ theme }) => theme.colors.grey};
  border-radius: 20px;
  border: none;
  font-weight: bold;
  color: ${({ theme }) => theme.colors.darkGery};
`;

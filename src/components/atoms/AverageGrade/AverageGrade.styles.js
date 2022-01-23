import styled, { css } from 'styled-components';

export const Wrapper = styled.div`
  width: 35px;
  height: 35px;
  border-radius: 50%;
  ${({ average }) => {
    if (average >= 5) {
      return css`
        background-color: ${({ theme }) => theme.colors.success};
      `;
    } else if (average >= 3 && average < 5) {
      return css`
        background-color: ${({ theme }) => theme.colors.warning};
      `;
    } else {
      return css`
        background-color: ${({ theme }) => theme.colors.error};
      `;
    }
  }};
  color: white;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: ${({ theme }) => theme.fontSize.m};
  font-weight: bold;
  margin-right: 30px;
`;

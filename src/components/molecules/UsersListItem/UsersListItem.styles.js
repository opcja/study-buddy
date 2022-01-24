import styled from 'styled-components';

export const Wrapper = styled.li`
  display: flex;
  align-items: center;
  position: relative;
  margin: 40px auto;
  width: 85%;
  &:not(:last-child)::after {
    content: '';
    position: absolute;
    bottom: -20px;
    width: 100%;
    height: 1px;
    background-color: lightgray;
  }
  p {
    color: ${({ theme }) => theme.colors.darkGrey};
  }
  p:nth-of-type(1) {
    font-size: ${({ theme }) => theme.fontSize.l};
    font-weight: bold;
  }
  p:nth-of-type(2) {
    font-size: ${({ theme }) => theme.fontSize.s};
  }
`;

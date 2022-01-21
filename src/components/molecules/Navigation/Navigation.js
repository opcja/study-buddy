import styled from 'styled-components';

export const Navigation = styled.nav`
  ul {
    display: flex;
    flex-direction: column;
    list-style: none;
  }

  li:not(:last-child) {
    margin-bottom: 24px;
  }

  a {
    display: block;
    color: ${({ theme }) => theme.colors.darkGrey};
    text-decoration: none;
    font-size: ${({ theme }) => theme.fontSize.s};
    font-weight: bold;
    text-align: right;
  }
`;

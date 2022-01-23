import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const Logo = styled.div`
  grid-row: 1/2;
  width: 100%;
  height: 60px;
  background-color: ${({ theme }) => theme.colors.darkGrey};
  padding: 10px;
  margin: 20px 0px 40px;

  h1 {
    color: ${({ theme }) => theme.colors.white};
    font-size: 15px;
    text-align: right;
  }
`;

export const StyledNavigation = styled.nav`
  grid-row: 1/4;
  box-shadow: 0 3px 6px rgba(0, 0, 0, 0.16), 0 3px 6px rgba(0, 0, 0, 0.23);
  background-color: ${({ theme }) => theme.colors.white};

  ul {
    display: flex;
    flex-direction: column;
    list-style: none;
    margin-right: 20px;
  }

  li:not(:last-child) {
    margin-bottom: 20px;
  }
`;

const activeclassname = 'active-link';
export const StyledLink = styled(NavLink).attrs({ activeclassname })`
  display: block;
  color: ${({ theme }) => theme.colors.darkGrey};
  text-decoration: none;
  font-size: ${({ theme }) => theme.fontSize.s};
  font-weight: bold;
  text-align: right;
  position: relative;

  &.active {
    &::after {
      opacity: 1;
    }
  }

  &::after {
    opacity: 0;
    transition: opacity 0.4s ease-in-out;
    content: '';
    position: absolute;
    width: 12px;
    height: 3px;
    top: 50%;
    transform: translateY(-50%);
    right: -16px;
    background-color: ${({ theme }) => theme.colors.darkPurple};
  }
`;

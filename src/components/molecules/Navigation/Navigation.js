import React from 'react';
import { StyledNavigation, StyledLink, Logo } from './Navigation.styles';

const Navigation = () => (
  <StyledNavigation>
    <Logo>
      <h1>
        Study
        <br />
        Buddy
      </h1>
    </Logo>
    <ul>
      <li>
        <StyledLink exact="true" to="/">
          Dashboard
        </StyledLink>
      </li>
      <li>
        <StyledLink to="/add-user">Add user</StyledLink>
      </li>
      {/* <li>
        <StyledLink activeClassName="active-link" to="/settings">
          Settings
        </StyledLink>
      </li>
      <li>
        <StyledLink activeClassName="active-link" to="/">
          Logout
        </StyledLink>
      </li> */}
    </ul>
  </StyledNavigation>
);

export default Navigation;

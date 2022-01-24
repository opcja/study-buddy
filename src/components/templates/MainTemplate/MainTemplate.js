import React from 'react';
import styled from 'styled-components';
import { Wrapper } from './MainTemplate.styles';
import Navigation from 'components/molecules/Navigation/Navigation';

const SearchBar = styled.div`
  grid-row: 1/2;
  grid-column: 3/7;
`;

const MainTemplate = ({ children }) => {
  return (
    <Wrapper>
      <Navigation />
      {children}
    </Wrapper>
  );
};

export default MainTemplate;

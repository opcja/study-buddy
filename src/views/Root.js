import React from 'react';
import Dashboard from './Dashboard';
import { ThemeProvider } from 'styled-components';
import { GlobalStyle } from 'assets/styles/GlobalStyle';
import { theme } from 'assets/styles/theme';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import AddUserForm from './AddUserForm';
import Navigation from 'components/molecules/Navigation/Navigation';
import { LayoutWrapper } from 'components/templates/LayoutWrapper/LayoutWrapper.styles';
import UsersProvider from 'providers/UsersProvider';

const Root = () => {
  return (
    <Router>
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <LayoutWrapper>
          <UsersProvider>
            <Navigation></Navigation>
            <Routes>
              <Route path="/add-user" element={<AddUserForm />}></Route>
              <Route path="/" element={<Dashboard />}></Route>
            </Routes>
          </UsersProvider>
        </LayoutWrapper>
      </ThemeProvider>
    </Router>
  );
};

export default Root;

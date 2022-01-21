import React, { useState } from 'react';
import UsersList from 'components/organisms/UsersList/UsersList';
import styled, { ThemeProvider } from 'styled-components';
import { GlobalStyle } from 'assets/styles/GlobalStyle';
import { theme } from 'assets/styles/theme';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Form from 'components/organisms/Form/Form';
import { users as usersData } from 'data/users';
import { Navigation } from 'components/molecules/Navigation/Navigation';

const Wrapper = styled.div`
  background-color: ${({ theme }) => theme.colors.lightGrey};
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100vh;
`;

const initialFormState = {
  name: '',
  attendance: '',
  average: '',
};

const Root = () => {
  const [users, setUsers] = useState(usersData);
  const [formValues, setFormValues] = useState(initialFormState);

  const deleteUser = (name) => {
    const filteredUsers = users.filter((user) => user.name !== name);
    setUsers(filteredUsers);
  };

  const handleInputChange = (e) => {
    setFormValues({
      ...formValues,
      [e.target.name]: e.target.value,
    });
  };

  const handleAddUser = (e) => {
    e.preventDefault();
    const newUser = {
      name: formValues.name,
      attendance: formValues.attendance,
      average: formValues.average,
    };

    setUsers([newUser, ...users]);
    setFormValues(initialFormState);
  };

  return (
    <Router>
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <Wrapper>
          <Navigation>
            <ul>
              <li>
                <Link to="/">Dashboard</Link>
              </li>
              <li>
                <Link to="/add-user">Add user</Link>
              </li>
              <li>
                <Link to="/settings">Settings</Link>
              </li>
              <li>
                <Link to="/">Logout</Link>
              </li>
            </ul>
          </Navigation>
          <Routes>
            <Route
              path="/add-user"
              element={<Form formValues={formValues} handleAddUser={handleAddUser} handleInputChange={handleInputChange} />}
            ></Route>
            <Route path="/" element={<UsersList deleteUser={deleteUser} users={users} />}></Route>
          </Routes>
        </Wrapper>
      </ThemeProvider>
    </Router>
  );
};

export default Root;

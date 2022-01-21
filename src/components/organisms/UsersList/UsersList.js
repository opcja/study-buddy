import React from 'react';
import UsersListItem from 'components/molecules/UsersListItem/UsersListItem';
import { Wrapper, StyledTitle } from 'components/organisms/UsersList/UsersList.styles';

const UsersList = ({ users, deleteUser }) => {
  return (
    <>
      <Wrapper>
        <StyledTitle>Student List</StyledTitle>
        <ul>
          {users.map((userData) => (
            <UsersListItem deleteUser={deleteUser} key={userData.name} userData={userData} />
          ))}
        </ul>
      </Wrapper>
    </>
  );
};

export default UsersList;

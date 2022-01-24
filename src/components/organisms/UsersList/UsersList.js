import React from 'react';
import UsersListItem from 'components/molecules/UsersListItem/UsersListItem';
import { Wrapper } from 'components/organisms/UsersList/UsersList.styles';
import PropTypes from 'prop-types';
import { UserShape } from 'types';
import { StyledTitle } from 'components/atoms/Title/StyledTitle';

const UsersList = ({ users }) => {
  return (
    <>
      <Wrapper>
        <StyledTitle>Students list</StyledTitle>
        <ul>
          {users.map((userData) => (
            <UsersListItem key={userData.name} userData={userData} />
          ))}
        </ul>
      </Wrapper>
    </>
  );
};

UsersList.propTypes = {
  users: PropTypes.arrayOf(PropTypes.shape(UserShape)),
  deleteUser: PropTypes.func,
};

export default UsersList;

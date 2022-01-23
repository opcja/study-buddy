import React from 'react';
import UsersListItem from 'components/molecules/UsersListItem/UsersListItem';
import { Wrapper } from 'components/organisms/UsersList/UsersList.styles';
import PropTypes from 'prop-types';
import { UserShape } from 'types';

const UsersList = ({ users }) => {
  return (
    <>
      <Wrapper>
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

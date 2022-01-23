import React, { useContext } from 'react';
import { UsersContext } from 'providers/UsersProvider';
import UsersList from 'components/organisms/UsersList/UsersList';

const Dashboard = () => {
  const { users } = useContext(UsersContext);

  return <UsersList users={users} />;
};

export default Dashboard;

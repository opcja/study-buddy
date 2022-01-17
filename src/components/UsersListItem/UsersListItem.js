import React from 'react';
import PropTypes from 'prop-types';

const UsersListItem = ({ userData: { name, averange, attendance = '0%' } }) => (
  <li>
    <div>{averange}</div>
    <div>
      <p>{name}</p>
      <p>attendance: {attendance}</p>
    </div>
    <button>X</button>
  </li>
);

UsersListItem.propTypes = {
  userData: PropTypes.shape({
    averange: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    attendance: PropTypes.string,
  }),
};

export default UsersListItem;

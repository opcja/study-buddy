import React from 'react';
import PropTypes from 'prop-types';
import DeleteButton from 'components/atoms/DeleteButton/DeleteButton';
import { Wrapper } from 'components/molecules/UsersListItem/UsersListItem.styles';
import AverageGrade from 'components/atoms/AverageGrade/AverageGrade';

const UsersListItem = ({ deleteUser, userData: { average, name, attendance = '0%' } }) => (
  <Wrapper>
    <AverageGrade average={average}></AverageGrade>
    <div>
      <p>{name}</p>
      <p>attendance: {attendance}</p>
    </div>
    <DeleteButton onClick={() => deleteUser(name)} />
  </Wrapper>
);

UsersListItem.propTypes = {
  userData: PropTypes.shape({
    average: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    attendance: PropTypes.string,
  }),
};

export default UsersListItem;

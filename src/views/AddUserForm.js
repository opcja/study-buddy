import React, { useState, useContext } from 'react';
import styled from 'styled-components';
import { StyledTitle } from 'components/organisms/UsersList/UsersList.styles';
import { Button } from 'components/atoms/Button/Button';
import FormField from 'components/molecules/FormField/FormField';
import { UsersContext } from 'providers/UsersProvider';

const initialFormState = {
  name: '',
  attendance: '',
  average: '',
};

const Wrapper = styled.div`
  grid-column: 2/6;
  grid-row: 3;
  margin: 0 auto;
`;

const AddUserForm = () => {
  const [formValues, setFormValues] = useState(initialFormState);
  const { handleAddUser } = useContext(UsersContext);

  const handleInputChange = (e) => {
    setFormValues({
      ...formValues,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmitUser = (e) => {
    e.preventDefault();
    handleAddUser(formValues);
    setFormValues(initialFormState);
  };

  return (
    <Wrapper as="form" onSubmit={handleSubmitUser}>
      <StyledTitle>Add new student</StyledTitle>
      <FormField label="Name" id="name" name="name" value={formValues.name} onChange={handleInputChange} />
      <FormField label="Attendance" id="attendance" name="attendance" value={formValues.attendance} onChange={handleInputChange} />
      <FormField label="Average" id="average" name="average" value={formValues.average} onChange={handleInputChange} />
      <Button type="submit">Add</Button>
    </Wrapper>
  );
};

export default AddUserForm;

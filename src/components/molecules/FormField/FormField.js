import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import { Label } from 'components/atoms/Label/Label';
import { Input } from 'components/atoms/Input/Input';

const Wrapper = styled.div`
  margin-top: 12px;
  display: flex;
  flex-direction: column;
  align-items: start;

  label {
    margin-bottom: 6px;
    margin-left: 4px;
  }
`;

const FormField = ({ value, onChange, label, name, id, type = 'text', ...props }) => {
  return (
    <>
      <Wrapper>
        <Label htmlFor={id}>{label}</Label>
        <Input name={name} id={id} type={type} value={value} onChange={onChange}></Input>
      </Wrapper>
    </>
  );
};

FormField.propTypes = {
  label: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
  type: PropTypes.string,
};

export default FormField;

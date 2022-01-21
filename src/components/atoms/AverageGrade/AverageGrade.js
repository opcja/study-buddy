import React from 'react';
import { Wrapper } from 'components/atoms/AverageGrade/AverageGrade.styles';

const AverageGrade = ({ average }) => (
  <Wrapper average={average}>
    <div>{average}</div>
  </Wrapper>
);

export default AverageGrade;

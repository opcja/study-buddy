import React from 'react';
import FormField from './FormField';
import { renderWithProviders } from 'helpers/renderWithProviders';

describe('FormField', () => {
  it('Renders the component', () => {
    renderWithProviders(<FormField label="name" id="name" name="name" />);
  });
});

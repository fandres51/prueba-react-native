import React from 'react';
import { render, fireEvent } from '@testing-library/react-native';
import Update from '../app/update';

describe('Update', () => {
  it('renders correctly', () => {
    const { getByText } = render(<Update />);

    // Replace 'Formulario de Actualización' with the actual text you expect to be in the component
    expect(getByText('Formulario de Actualización')).toBeTruthy();
  });

  it('triggers sendData when form is submitted', () => {
    const sendData = jest.fn();
    const { getByText } = render(<Update sendData={sendData} />);

    // Replace 'Submit' with the actual text in your submit button
    const submitButton = getByText('Submit');

    fireEvent.press(submitButton);

    expect(sendData).toHaveBeenCalled();
  });
});
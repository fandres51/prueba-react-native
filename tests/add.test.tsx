import React from 'react';
import { render, fireEvent, waitFor } from '@testing-library/react-native';
import Add from '../app/add';

describe('Add', () => {
  it('renders correctly', () => {
    const { getByText } = render(<Add />);

    expect(getByText('Add Product')).toBeTruthy();
  });

  it('shows an alert when the product ID already exists', async () => {
    // Mock the fetch function to simulate a product ID that already exists
    global.fetch = jest.fn(() =>
      Promise.resolve({
        json: () => Promise.resolve(true),
      })
    );

    const { getByText, getByPlaceholderText } = render(<Add />);
    const idInput = getByPlaceholderText('Product ID');
    const addButton = getByText('Add Product');

    // Simulate typing into the product ID input
    fireEvent.changeText(idInput, '1');

    // Simulate pressing the add button
    fireEvent.press(addButton);

    // Wait for the alert to be shown
    await waitFor(() => getByText('ID ya existe'));
  });
});
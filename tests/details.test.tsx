import React from 'react';
import { render, fireEvent } from '@testing-library/react-native';
import Details from '../app/[details]';

describe('Details', () => {
  it('renders correctly', () => {
    const { getByText } = render(<Details />);

    // Replace 'Detail Text' with the actual text you expect to be in the component
    expect(getByText('Detail Text')).toBeTruthy();
  });

  it('triggers deletion when delete button is pressed', () => {
    const deleteItem = jest.fn();
    const { getByText } = render(<Details deleteItem={deleteItem} />);

    // Replace 'Delete' with the actual text in your delete button
    const deleteButton = getByText('Delete');

    fireEvent.press(deleteButton);

    expect(deleteItem).toHaveBeenCalled();
  });
});
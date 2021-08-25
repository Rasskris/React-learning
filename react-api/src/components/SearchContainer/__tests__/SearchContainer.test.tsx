import React from 'react';
import userEvent from '@testing-library/user-event';
import customRender, { fireEvent } from '../../../test-utils';
import { SearchContainer } from '..';

describe('SearchContainer', () => {
  test('should change input value when user typing', () => {
    const { getByRole } = customRender(<SearchContainer />);
    const input = getByRole('textbox');

    expect(input).toHaveValue('');
    userEvent.type(input, 'beef');
    expect(input).toHaveValue('beef');
  });

  test('should change checked property when user click to radio-button', () => {
    const { getByLabelText } = customRender(<SearchContainer />);
    const radiobutton = getByLabelText(/dinner/i);

    expect(radiobutton).not.toBeChecked();
    userEvent.click(radiobutton);
    expect(radiobutton).toBeChecked();
  });

  test('should change value of select element', () => {
    const { getByTestId } = customRender(<SearchContainer />);
    const selectElement = getByTestId(/dropdown/i);

    fireEvent.change(selectElement, { target: { value: 15 } });
    expect(selectElement).toHaveValue('15');

    fireEvent.change(selectElement, { target: { value: 20 } });
    expect(selectElement).toHaveValue('20');
  });

  test('should reset input value when user submit search-string', () => {
    const { getByRole, getByTestId } = customRender(<SearchContainer />);
    const input = getByRole('textbox');
    const form = getByTestId('form');

    userEvent.type(input, 'peach');
    expect(input).toHaveValue('peach');

    fireEvent.submit(form);
    expect(input).toHaveValue('');
  });
});

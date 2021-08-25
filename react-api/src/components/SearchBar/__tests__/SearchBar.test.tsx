import React from 'react';
import userEvent from '@testing-library/user-event';
import { render } from '../../../test-utils';
import { SearchBar } from '..';

const setup = () => {
  const handleChange = jest.fn();
  const utils = render(<SearchBar handleChange={handleChange} searchString="" />);

  const input = utils.getByRole('textbox');
  return {
    input,
    handleChange,
    ...utils,
  };
};

describe('SearchBar', () => {
  test('searchbar rerender with new props', () => {
    const { handleChange, rerender, input, getByRole } = setup();

    expect(input).toHaveValue('');

    rerender(<SearchBar handleChange={handleChange} searchString="beef" />);
    expect(getByRole('textbox')).toHaveValue('beef');
  });

  test('calls the handlechange callback', async () => {
    const { input, handleChange } = setup();

    await userEvent.type(input, 'crep');

    expect(handleChange).toHaveBeenCalledTimes(4);
  });
});

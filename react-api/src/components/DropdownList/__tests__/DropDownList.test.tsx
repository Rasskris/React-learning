import React from 'react';
import { render, fireEvent } from '../../../test-utils';
import { DropDownList } from '..';

const setup = () => {
  const handleChange = jest.fn();
  const utils = render(<DropDownList handleChange={handleChange} countItemsPerPage={10} />);
  const selectElement = utils.getByTestId(/dropdown/i);

  return { selectElement, handleChange, ...utils };
};

describe('DropDownList', () => {
  test('should render with prop value', () => {
    const { selectElement } = setup();

    expect(selectElement).toHaveValue('10');
  });

  test('should render with options value', () => {
    const { selectElement } = setup();

    expect(selectElement.childNodes[0]).toHaveValue('10');
    expect(selectElement.childNodes[1]).toHaveValue('15');
    expect(selectElement.childNodes[2]).toHaveValue('20');
  });

  test('calls the handlechange callback', () => {
    const { selectElement, handleChange } = setup();

    fireEvent.change(selectElement, { target: { value: 15 } });
    fireEvent.change(selectElement, { target: { value: 20 } });

    expect(handleChange).toBeCalledTimes(2);
  });
});

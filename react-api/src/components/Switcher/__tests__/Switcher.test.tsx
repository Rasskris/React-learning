import React from 'react';
import { render } from '@testing-library/react';
import { Switcher } from '..';

describe('Switcher', () => {
  test('rerender Swither with new props', () => {
    const handleChange = jest.fn();
    const { getByRole, rerender } = render(
      <Switcher handleChange={handleChange} value="dinner" isSelected={false} />,
    );

    expect(getByRole('radio')).not.toBeChecked();
    rerender(<Switcher handleChange={handleChange} value="dinner" isSelected />);
    expect(getByRole('radio')).toBeChecked();
  });
});

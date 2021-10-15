import React from 'react';
import customRender from '../../../test-utils';
import { Header } from '..';

describe('Header', () => {
  test('should have correct headind text', () => {
    const { getByRole } = customRender(<Header />);

    expect(getByRole('heading')).toHaveTextContent('Recipes for Every Day');
  });
});

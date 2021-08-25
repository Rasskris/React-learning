import React from 'react';
import customRender from '../../../test-utils';
import { NavBar } from '..';

describe('NavBar', () => {
  test('should have active class', () => {
    const { getByTestId } = customRender(<NavBar />);
    const homeLink = getByTestId('link-home');

    expect(homeLink).toHaveClass('active');
  });

  test('should not have active class', () => {
    const { getByTestId } = customRender(<NavBar />);
    const homeLink = getByTestId('link-about');

    expect(homeLink).not.toHaveClass('active');
  });
});

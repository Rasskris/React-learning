import React from 'react';
import fetchMock from 'jest-fetch-mock';
import userEvent from '@testing-library/user-event';
import customRender, { fireEvent } from './test-utils';
import App from './App';
import { response } from './mokeService/responses';

beforeEach((): void => {
  fetchMock.resetMocks();
});

describe('App', () => {
  test('should render home-page', async () => {
    const { findByTestId } = customRender(<App />);

    const homePage = await findByTestId('home-page');

    expect(homePage).toBeInTheDocument();
  });

  test('should render recipes-list when user submit search string', async () => {
    const { findByTestId, getByTestId, findByRole } = customRender(<App />);

    const searchBar = await findByRole('textbox');

    userEvent.type(searchBar, 'milk');
    fireEvent.submit(getByTestId('form'));
    fetchMock.mockResponse(JSON.stringify(response));

    const recipesList = await findByTestId('recipes-list');

    expect(recipesList).toBeInTheDocument();
  });

  test('should render about-page when user click link about', () => {
    const { getByTestId } = customRender(<App />);

    userEvent.click(getByTestId('link-about'));

    expect(getByTestId('about-page')).toBeInTheDocument();
  });
});

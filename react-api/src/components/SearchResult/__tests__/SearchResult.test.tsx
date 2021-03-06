import React from 'react';
import customRender from '../../../test-utils';
import { SearchResult } from '..';
import { responseWithMore, responseWithoutMore } from '../../../mokeService/responses';

describe('SearchResult', () => {
  test('should render recipe-list and pagination when more result equal true', () => {
    const { getByTestId } = customRender(<SearchResult response={responseWithMore} />);

    const recipesList = getByTestId(/recipes-list/);
    const pagination = getByTestId(/pagination/);

    expect(recipesList).toBeInTheDocument();
    expect(pagination).toBeInTheDocument();
  });

  test('should render error message when more result equal false', () => {
    const { getByTestId } = customRender(<SearchResult response={responseWithoutMore} />);

    const errorMessage = getByTestId(/error-message/);

    expect(errorMessage).toBeInTheDocument();
  });
});

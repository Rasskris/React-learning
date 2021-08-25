import React from 'react';
import customRender from '../../../test-utils';
import { SearchResult } from '..';
import { responseWithMore, responseWithoutMore } from '../../../__fixtures__/response';

describe('SearchResult', () => {
  const searchString = 'egg';

  test('render recipe-list and pagination when more result equal true', () => {
    const { getByTestId } = customRender(
      <SearchResult response={responseWithMore} searchString={searchString} />,
    );
    const recipesList = getByTestId(/recipes-list/);
    const pagination = getByTestId(/pagination/);

    expect(recipesList).toBeInTheDocument();
    expect(pagination).toBeInTheDocument();
  });

  test('render error message when more result equal false', () => {
    const { getByTestId } = customRender(
      <SearchResult response={responseWithoutMore} searchString={searchString} />,
    );
    const errorMessage = getByTestId(/error-message/);

    expect(errorMessage).toBeInTheDocument();
  });
});

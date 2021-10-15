import React from 'react';
import customRender from '../../../test-utils';
import { Recipe } from '..';
import { recipe } from '../../../mokeService/recipe';

describe('Recipe component', () => {
  test('should render image', () => {
    const { getByRole } = customRender(<Recipe recipe={recipe} />);

    expect(getByRole('img')).toBeInTheDocument();
  });

  test('should render correct title', () => {
    const { getByTestId } = customRender(<Recipe recipe={recipe} />);

    expect(getByTestId('title')).toHaveTextContent(recipe.label);
  });

  test('should render correct calories', () => {
    const { getByTestId } = customRender(<Recipe recipe={recipe} />);

    expect(getByTestId('calories')).toHaveTextContent(String(recipe.calories));
  });

  test('should render correct count of ingredients', () => {
    const { getByTestId } = customRender(<Recipe recipe={recipe} />);

    expect(getByTestId('ingredients')).toHaveTextContent(String(recipe.ingredientLines.length));
  });
});

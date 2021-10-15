import React from 'react';
import './RecipesList.scss';
import { Recipe } from '../Recipe';
import { Data } from '../../types';

const RecipesList = React.memo(({ data }: { data: Omit<Data, 'recipe'> }): JSX.Element => {
  const { hits: recipes } = data;

  return (
    <section data-testid="recipes-list" className="recipes-list">
      {recipes.map(({ recipe }) => (
        <Recipe key={recipe.uri} recipe={recipe} />
      ))}
    </section>
  );
});

RecipesList.displayName = 'RecipeList';
export default RecipesList;

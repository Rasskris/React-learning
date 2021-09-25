import React from 'react';
import './RecipesList.scss';
import { Recipe } from '../Recipe';
import { Data } from '../../types';

const RecipesList = ({ data }: { data: Data }): JSX.Element => {
  const { hits: recipes } = data;

  return (
    <section className="recipes-list">
      {recipes.map(({ recipe }) => (
        <Recipe key={recipe.uri} recipe={recipe} />
      ))}
    </section>
  );
};

export default RecipesList;

import React from 'react';
import './Recipe.scss';
import { IRecipe } from '../../interfaces';

const Recipe = ({ recipe }: { recipe: IRecipe }): JSX.Element => {
  const { label, calories, ingredientLines } = recipe;
  return (
    <div className="recipe">
      <img className="recipe__img" src={recipe.image} alt="Recipe" />
      <h3 className="recipe__title">{label}</h3>
      <div className="recipe__info">
        <span className="recipe__info-item calories">
          <span className="recipe__info-num">{calories.toFixed(0)}</span> calories
        </span>
        <span className="recipe__info-item">
          <span className="recipe__info-num">{ingredientLines.length}</span> ingredients
        </span>
      </div>
    </div>
  );
};

export default Recipe;

import React from 'react';
import { Link } from 'react-router-dom';
import './Recipe.scss';
import { IRecipe } from '../../interfaces';
import { parseUri } from '../../helpers';

const Recipe = ({ recipe }: { recipe: IRecipe }): JSX.Element => {
  const { label, calories, ingredientLines, uri } = recipe;
  const id = parseUri(uri);

  return (
    <div className="recipe">
      <img className="recipe__img" src={recipe.image} alt="Recipe" />
      <p className="recipe__title">{label}</p>
      <div className="recipe__info">
        <span className="recipe__info-item calories">
          <span className="recipe__info-num">{calories.toFixed(0)}</span> calories
        </span>
        <span className="recipe__info-item">
          <span className="recipe__info-num">{ingredientLines.length}</span> ingredients
        </span>
      </div>
      <Link to={`/details/${id}`}>Details...</Link>
    </div>
  );
};

export default Recipe;

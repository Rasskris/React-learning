import React from 'react';
import './RecipeFull.scss';
import { IRecipeFull } from '../../interfaces';

const RecipeFull = React.memo(({ recipe }: { recipe: IRecipeFull }): JSX.Element => {
  const {
    image,
    label,
    calories,
    ingredientLines,
    mealType,
    yield: servings,
    healthLabels,
    totalWeight,
    cuisineType,
    dishType,
  } = recipe;

  return (
    <article className="recipeFull">
      <h2 className="recipeFull__title">{label}</h2>
      <div className="recipeFull__wrapper1">
        <img className="recipeFull__img" src={image} alt={label} />
        <div className="recipeFull__info">
          <div>
            <p>Meal Type: {mealType}</p>
            <p>Cuisine Type: {cuisineType}</p>
            <p>Dish Type: {dishType}</p>
          </div>
          <div className="recipeFull__nutrition">
            <div className="nutrition__item calories">
              <p>{calories.toFixed(0)} kcal</p>
              <p>Calories</p>
            </div>
            <div className="nutrition__item weight">
              <p>{totalWeight.toFixed(0)} g</p>
              <p>Weight</p>
            </div>
            <div className="nutrition__item servings">
              <p>{servings.toFixed(0)} </p>
              <p>Servings</p>
            </div>
          </div>
        </div>
      </div>
      <div className="recipeFull__wrapper2">
        <div className="recipeFull__ingredients ingredients">
          <p className="ingredients__title">{ingredientLines.length} Ingredients</p>
          <ul className="ingredients__list">
            {ingredientLines.map((item) => (
              <li key={item} className="ingredients__item">
                {item}
              </li>
            ))}
          </ul>
        </div>
        <div className="recipeFull__healthLabels healthLabels">
          <p className="healthLabels__title">Health labels:</p>
          <ul className="healthLabels__list">
            {healthLabels.map((item) => (
              <li className="healthLabels__item" key={item}>
                {item}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </article>
  );
});

RecipeFull.displayName = 'RecipeFull';
export default RecipeFull;

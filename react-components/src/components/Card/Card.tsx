import './Card.scss';
import React from 'react';
import { ICard } from '../../interfaces';

const Card = ({ cardData }: { cardData: ICard }): JSX.Element => {
  const { image, title, description, countOfLikes, countOfComments } = cardData;

  return (
    <div className="card">
      <div
        className="card__img"
        style={{ backgroundImage: `url("../../assets/images/${image}.png")` }}
      />
      <p className="card__title">{title}</p>
      <p className="card__desc">{description}</p>
      <div className="card__stats">
        <span className="card__like">{countOfLikes}</span>
        <span className="card__comment">{countOfComments}</span>
      </div>
    </div>
  );
};

export default Card;

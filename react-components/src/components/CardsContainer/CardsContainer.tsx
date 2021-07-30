import './CardsContainer.scss';
import React, { useState } from 'react';
import { Card } from '../Card';
import { ICard } from '../../interfaces';
import { dataOfCards } from '../../constants';

const CardsContainer = (): JSX.Element => {
  const [cardsData] = useState<ICard[]>(dataOfCards);

  return (
    <section className="cards-container">
      {cardsData.map((data: ICard) => (
        <Card key={data.title} cardData={data} />
      ))}
    </section>
  );
};

export default CardsContainer;

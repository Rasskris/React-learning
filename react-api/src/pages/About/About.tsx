import React from 'react';
import './About.scss';

const titleText = 'Simply Good - Home cooking Ideas!';
const descriptionText =
  'Cook delicious family meals everyday with our recipes. Discover over 2.8 million recipes.';

const About = (): JSX.Element => {
  return (
    <section className="about">
      <h2 className="about__title">{titleText}</h2>
      <p className="about__description">{descriptionText}</p>
      <div className="about__img" />
    </section>
  );
};

export default About;

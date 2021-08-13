import React from 'react';
import './About.scss';

const About = (): JSX.Element => {
  return (
    <section className="about">
      <h2 className="about__title">Simply Good - Home cooking Ideas!</h2>
      <p className="about__description">
        Cook delicious family meals everyday with our recipes. Discover over 10000 recipes.
      </p>
      <div className="about__img" />
    </section>
  );
};

export default About;

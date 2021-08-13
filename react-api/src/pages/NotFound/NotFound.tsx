import React from 'react';
import { Link } from 'react-router-dom';
import './NotFound.scss';

const NotFound = (): JSX.Element => {
  return (
    <section className="notFound">
      <h2 className="notFound__title">Sorry</h2>
      <p className="notFound__desc">That page cannot be found</p>
      <Link to="/">Back to the homepage...</Link>
      <div className="notFound__img" />
    </section>
  );
};

export default NotFound;

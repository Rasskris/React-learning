import React from 'react';
import './Card.scss';
import { IFormDataState } from '../../interfaces';

const Card = ({ cardData }: { cardData: IFormDataState }): JSX.Element => {
  const { firstName, lastName, email, country, dateOfBirth, contactChoice, agreeWithRules } =
    cardData;

  return (
    <div className="card user">
      <p className="card__field user__firstname">
        <span className="card__field-title">First Name:</span>
        {firstName}
      </p>
      <p className="card__field user__lastname">
        <span className="card__field-title">Last Name:</span>
        {lastName}
      </p>
      <p className="card__field user__email">
        <span className="card__field-title">Email:</span>
        {email}
      </p>
      <p className="card__field user__data-of-birth">
        <span className="card__field-title">Country:</span>
        {country}
      </p>
      <p className="card__field user__data-of-birth">
        <span className="card__field-title">Date of Birth:</span>
        {dateOfBirth}
      </p>
      <p className="card__field user__contact-choice">
        <span className="card__field-title">Contact choice:</span>
        {contactChoice}
      </p>
      <p className="card__field user__agree-with-rules">
        <span className="card__field-title">Agree with rules:</span>
        {agreeWithRules ? 'yes' : 'no'}
      </p>
    </div>
  );
};

export default Card;

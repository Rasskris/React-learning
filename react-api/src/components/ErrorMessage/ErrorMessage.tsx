import React from 'react';
import './ErrorMessage.scss';

const ErrorMessage = ({ errorMessage }: { errorMessage: string }): JSX.Element => {
  return (
    <div className="errorMessage">
      <h3 className="errorMessage__text">{errorMessage}</h3>
      <div className="errorMessage__img" />
    </div>
  );
};
export default ErrorMessage;

import React from 'react';
import './ErrorMessage.scss';

const ErrorMessage = ({ error }: { error: string | number }): JSX.Element => {
  return (
    <div data-testid="error-message" className="errorMessage">
      <h3 className="errorMessage__text">{error}</h3>
      <div className="errorMessage__img" />
    </div>
  );
};
export default ErrorMessage;

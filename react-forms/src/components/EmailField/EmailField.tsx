import React from 'react';
import { FieldProps } from '../../types';

const fieldName = 'email';

const EmailField = ({ handleChange, value, renderErrors }: Omit<FieldProps, 'isChecked'>): JSX.Element => {
  return (
    <label htmlFor={fieldName}>
      <p>Email: {renderErrors(fieldName)}</p>
      <input
        onChange={handleChange}
        className="form__input"
        type="email"
        name={fieldName}
        placeholder="homer.simpson@doh.com"
        value={value}
        required
      />
    </label>
  );
};

export default EmailField;

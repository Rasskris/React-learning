import React from 'react';
import { FieldProps } from '../../types';

const fieldName = 'firstName';

const FirstnameField = ({ handleChange, value, renderErrors }: Omit<FieldProps, 'isChecked'>): JSX.Element => {
  return (
    <label htmlFor={fieldName}>
      <p>First Name: {renderErrors(fieldName)}</p>
      <input
        onChange={handleChange}
        className="form__input"
        type="text"
        name={fieldName}
        placeholder="Homer"
        value={value}
        required
      />
    </label>
  );
};

export default FirstnameField;

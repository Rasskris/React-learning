import React from 'react';
import { FieldProps } from '../../types';

const fieldName = 'lastName';

const LastnameField = ({ handleChange, value, renderErrors }: Omit<FieldProps, 'isChecked'>): JSX.Element => {
  return (
    <label htmlFor={fieldName}>
      <p>Last Name: {renderErrors(fieldName)}</p>
      <input
        onChange={handleChange}
        className="form__input"
        type="text"
        name={fieldName}
        placeholder="Simpson"
        value={value}
        required
      />
    </label>
  );
};

export default LastnameField;

import React from 'react';
import { FieldProps } from '../../types';

const fieldName = 'agreeWithRules';

const CheckboxField = ({ handleChange, isChecked }: Omit<FieldProps, 'value' | 'renderErrors'>): JSX.Element => {
  return (
    <label htmlFor={fieldName}>
      <p>Agree with rules:</p>
      <input
        className="form__input-checkbox"
        id={fieldName}
        type="checkbox"
        onChange={handleChange}
        name={fieldName}
        checked={isChecked || false}
        required
      />
    </label>
  );
};

export default CheckboxField;

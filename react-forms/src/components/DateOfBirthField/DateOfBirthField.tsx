import './DateOfBirthField.scss';
import React from 'react';
import { FieldProps } from '../../types';

const fieldName = 'dateOfBirth';

const DateOfBirthField = ({ handleChange, value }: Omit<FieldProps, 'isChecked' | 'renderErrors'>): JSX.Element => {
  return (
    <label htmlFor={fieldName}>
      <p>Date of Birth:</p>
      <input
        className="form__input-date"
        id={fieldName}
        type="date"
        onChange={handleChange}
        name={fieldName}
        value={value}
        required
      />
    </label>
  );
};

export default DateOfBirthField;

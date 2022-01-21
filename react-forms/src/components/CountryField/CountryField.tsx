/* eslint-disable prettier/prettier */
import './CountryField.scss';
import React from 'react';
import { FieldProps } from '../../types';

const fieldName = 'country';

const CountryField = ({ handleChange, value }: Omit<FieldProps, 'isChecked' | 'renderErrors'>): JSX.Element => {
  return (
    <label htmlFor={fieldName}>
      <p>Choose your country:</p>
      <select
        onChange={handleChange}
        className="form__select"
        name={fieldName}
        id={fieldName}
        value={value}
      >
        <option value="Russia">Russia</option>
        <option value="Minsk">Minsk</option>
        <option value="Poland">USA</option>
      </select>
    </label>
  );
};

export default CountryField;

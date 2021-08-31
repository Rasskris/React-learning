import './ContactChoiceField.scss';
import React from 'react';
import { FieldProps } from '../../types';

const fieldName = 'contactChoice';

const ContactChoice = ({ handleChange, value }: Omit<FieldProps, 'isChecked' | 'renderErrors'>): JSX.Element => {
  return (
    <label className="form__label" htmlFor={fieldName}>
      <p>Contact choice:</p>
      <label className="form__label-contact" htmlFor="contactEmail">
        Email
        <input
          className="form__input-radio"
          id="contactEmail"
          type="radio"
          onChange={handleChange}
          name={fieldName}
          value="email"
          checked={value === 'email'}
        />
      </label>
      <label className="form__label-contact" htmlFor="contactPhone">
        Phone
        <input
          className="form__input-radio"
          id="contactPhone"
          type="radio"
          onChange={handleChange}
          name={fieldName}
          value="phone"
          checked={value === 'phone'}
        />
      </label>
    </label>
  );
};

export default ContactChoice;

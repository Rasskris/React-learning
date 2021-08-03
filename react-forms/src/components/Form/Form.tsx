import React, { ChangeEvent, FormEvent, useReducer, useState } from 'react';
import './Form.scss';
import { formFieldNames, initFormDataState, actionType } from './constants';
import { formReducer, validateTextInput } from './helpers';
import { IErrorsForm } from '../../interfaces';
import { FormProp } from '../../types';

const Form = ({ setFormDataArray }: FormProp): JSX.Element => {
  const [errorsForm, setErrorsForm] = useState<IErrorsForm>({});

  const [formDataState, setFormDataState] = useReducer(formReducer, initFormDataState);

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();

    setFormDataArray((prevState) => [...prevState, formDataState]);
    setFormDataState({
      type: actionType.RESET,
    });
  };

  const handleChange = ({ target }: ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = target;
    const isCheckbox = target.type === 'checkbox';
    const payload = {
      [name]: isCheckbox ? (target as HTMLInputElement).checked : value,
    };

    setFormDataState({
      type: actionType.CHANGE,
      payload,
    });

    if (target.type !== 'text' && target.type !== 'email') {
      return;
    }

    const validationResult = validateTextInput(name, value);

    setErrorsForm((prevState) => ({
      ...prevState,
      [name]: { textError: validationResult.textError },
    }));
  };

  const { firstName, lastName, email, country, dateOfBirth, contactChoice, agreeWithRules } =
    formDataState;

  const {
    fieldNameFirstName,
    fieldNameLastName,
    fieldNameEmail,
    fieldNameCountryList,
    fieldNameDateOfBirth,
    fieldNameContactChoice,
    fieldNameAgreeWithRules,
  } = formFieldNames;

  const renderErrors = (fieldName: string) => {
    return errorsForm[fieldName] ? (
      <span className="form__error">{errorsForm[fieldName].textError}</span>
    ) : null;
  };

  return (
    <form className="form" onSubmit={handleSubmit}>
      <label htmlFor={fieldNameFirstName}>
        <p>First Name: {renderErrors(fieldNameFirstName)}</p>
        <input
          onChange={handleChange}
          className="form__input"
          type="text"
          name={fieldNameFirstName}
          placeholder="First Name"
          value={firstName}
          required
        />
      </label>
      <label htmlFor={fieldNameLastName}>
        <p>Last Name: {renderErrors(fieldNameLastName)}</p>
        <input
          onChange={handleChange}
          className="form__input"
          type="text"
          name={fieldNameLastName}
          placeholder="Last Name"
          value={lastName}
          required
        />
      </label>
      <label htmlFor={fieldNameEmail}>
        <p>Email: {renderErrors(fieldNameEmail)}</p>
        <input
          onChange={handleChange}
          className="form__input"
          type="email"
          name={fieldNameEmail}
          placeholder="Email"
          value={email}
          required
        />
      </label>
      <label htmlFor={fieldNameCountryList}>
        <p>Choose your country:</p>
        <select
          onChange={handleChange}
          className="form__select"
          name={fieldNameCountryList}
          id={fieldNameCountryList}
          value={country}
        >
          <option value="Russia">Russia</option>
          <option value="Minsk">Minsk</option>
          <option value="Poland">Poland</option>
        </select>
      </label>
      <label htmlFor={fieldNameDateOfBirth}>
        <p>Date of Birth:</p>
        <input
          className="form__input-date"
          id={fieldNameDateOfBirth}
          type="date"
          onChange={handleChange}
          name={fieldNameDateOfBirth}
          value={dateOfBirth}
          required
        />
      </label>
      <label htmlFor={fieldNameContactChoice}>
        <p>Contact choice:</p>
        <label htmlFor="contactEmail">
          Email
          <input
            className="form__input-radio"
            id="contactEmail"
            type="radio"
            onChange={handleChange}
            name={fieldNameContactChoice}
            value="email"
            checked={contactChoice === 'email'}
          />
        </label>
        <label htmlFor="contactPhone">
          Phone
          <input
            className="form__input-radio"
            id="contactPhone"
            type="radio"
            onChange={handleChange}
            name={fieldNameContactChoice}
            value="phone"
            checked={contactChoice === 'phone'}
          />
        </label>
      </label>
      <label htmlFor={fieldNameAgreeWithRules}>
        <p>Agree with rules:</p>
        <input
          className="form__input-checkbox"
          id={fieldNameAgreeWithRules}
          type="checkbox"
          onChange={handleChange}
          name={fieldNameAgreeWithRules}
          checked={agreeWithRules || false}
          required
        />
      </label>
      <button className="form__btn" type="submit">
        Submit
      </button>
    </form>
  );
};

export default Form;

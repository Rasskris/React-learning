import './Form.scss';
import React, { ChangeEvent, FormEvent, useReducer, useState } from 'react';
import { initFormDataState, actionType } from './constants';
import { validateTextInput } from './helpers';
import formReducer from './reducer';
import { IErrorsForm } from '../../interfaces';
import { FormProp } from '../../types';
import {
  FirstnameField,
  LastnameField,
  EmailField,
  CountryField,
  ContactChoiceField,
  DateOfBirthField,
  CheckboxField,
} from '..';

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

  const { firstName, lastName, email, country, dateOfBirth, contactChoice, agreeWithRules } = formDataState;

  const renderErrors = (fieldName: string) => {
    return errorsForm[fieldName] ? <span className="form__error">{errorsForm[fieldName].textError}</span> : null;
  };

  return (
    <form className="form" onSubmit={handleSubmit}>
      <FirstnameField handleChange={handleChange} value={firstName} renderErrors={renderErrors} />
      <LastnameField handleChange={handleChange} value={lastName} renderErrors={renderErrors} />
      <EmailField handleChange={handleChange} value={email} renderErrors={renderErrors} />
      <DateOfBirthField handleChange={handleChange} value={dateOfBirth} />
      <CountryField handleChange={handleChange} value={country} />
      <ContactChoiceField handleChange={handleChange} value={contactChoice} />
      <CheckboxField handleChange={handleChange} isChecked={agreeWithRules} />
      <button className="form__btn" type="submit">
        Submit
      </button>
    </form>
  );
};

export default Form;

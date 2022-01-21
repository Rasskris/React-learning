import { ChangeEventHandler, SetStateAction } from 'react';
import { IFormDataState } from './interfaces';

export type FormProp = {
  setFormDataArray: React.Dispatch<SetStateAction<IFormDataState[]>>;
};

export type FieldProps = {
  handleChange: ChangeEventHandler;
  value: string;
  renderErrors: (fieldName: string) => JSX.Element | null;
  isChecked: boolean | undefined;
};

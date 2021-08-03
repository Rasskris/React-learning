import { SetStateAction } from 'react';
import { IFormDataState } from './interfaces';

export type FormProp = {
  setFormDataArray: React.Dispatch<SetStateAction<IFormDataState[]>>;
};

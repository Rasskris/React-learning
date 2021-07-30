import { ChangeEventHandler } from 'react';

export default interface IInput {
  type: string;
  name: string;
  placeholder: string;
  value: string;
  onChange: ChangeEventHandler;
}

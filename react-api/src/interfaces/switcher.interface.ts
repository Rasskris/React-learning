import { ChangeEventHandler } from 'react';

export default interface ISwitcher {
  value: string;
  isSelected: boolean;
  handleChange: ChangeEventHandler;
}

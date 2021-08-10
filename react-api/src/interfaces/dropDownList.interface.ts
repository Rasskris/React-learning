import { ChangeEventHandler } from 'react';

export default interface IDropDownList {
  countItemsPerPage: number;
  handleChange: ChangeEventHandler;
}

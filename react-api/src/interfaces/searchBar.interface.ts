import { ChangeEventHandler } from 'react';

export default interface ISearchBar {
  searchString: string;
  handleChange: ChangeEventHandler;
}

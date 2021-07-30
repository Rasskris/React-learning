import './SearchBar.scss';
import React from 'react';
import { IInput } from '../../interfaces';

const SearchBar = ({ type, name, placeholder, value = '', onChange }: IInput): JSX.Element => {
  return (
    <input
      className="search-bar"
      type={type}
      name={name}
      placeholder={placeholder}
      value={value}
      onChange={onChange}
    />
  );
};

export default SearchBar;

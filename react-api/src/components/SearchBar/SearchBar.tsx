import React from 'react';
import './SearchBar.scss';
import { ISearchBar } from '../../interfaces';

const placeholderText = 'Search e.g., kale salad, bean soup, chocolate...';

const SearchBar = ({ handleChange, searchString }: ISearchBar): JSX.Element => {
  return (
    <input
      onChange={handleChange}
      name="searchString"
      placeholder={placeholderText}
      className="search-bar"
      type="text"
      value={searchString}
    />
  );
};

export default SearchBar;

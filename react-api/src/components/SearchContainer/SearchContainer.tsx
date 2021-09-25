/* eslint-disable jsx-a11y/control-has-associated-label */
import React, { ChangeEvent, FormEvent, useState } from 'react';
import './SearchContainer.scss';
import { SearchBarProp } from '../../types';
import { Switcher } from '../Switcher';
import { SearchBar } from '../SearchBar';
import { switcherNames } from './constants';
import { initSearchState } from '../../constants';
import { DropDownList } from '../DropdownList';

const SearchContainer = ({ changeSearchParams }: SearchBarProp): JSX.Element => {
  const [searchValues, setSearchValues] = useState(initSearchState);

  const handleChange = ({ target }: ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setSearchValues((prevState) => ({
      ...prevState,
      [target.name]: target.value,
    }));
  };

  const resetSearchString = () => {
    setSearchValues((prevState) => ({
      ...prevState,
      searchString: '',
    }));
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();

    changeSearchParams(searchValues);
    resetSearchString();
  };

  const { searchString, searchParameter, countItemsPerPage } = searchValues;
  const { breakfast, lunch, dinner } = switcherNames;

  return (
    <form onSubmit={handleSubmit} className="search-container">
      <div className="search-line">
        <SearchBar handleChange={handleChange} searchString={searchString} />
        <button className="search-button" type="submit" />
      </div>
      <div className="search-params">
        <Switcher
          value={breakfast}
          isSelected={searchParameter === breakfast}
          handleChange={handleChange}
        />
        <Switcher
          value={lunch}
          isSelected={searchParameter === lunch}
          handleChange={handleChange}
        />
        <Switcher
          value={dinner}
          isSelected={searchParameter === dinner}
          handleChange={handleChange}
        />
        <DropDownList handleChange={handleChange} countItemsPerPage={countItemsPerPage} />
      </div>
    </form>
  );
};

export default SearchContainer;

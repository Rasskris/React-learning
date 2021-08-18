/* eslint-disable jsx-a11y/control-has-associated-label */
import React, { useState, ChangeEvent, FormEvent } from 'react';
import { useAppDispatch, useAppSelector } from '../../hooks';
import {
  setSearchString,
  setSearchParameter,
  setCountItemsPerPage,
  resetPaginationState,
} from '../../store/slices';
import './SearchContainer.scss';
import { Switcher } from '../Switcher';
import { SearchBar } from '../SearchBar';
import { switcherNames } from './constants';
import { DropDownList } from '../DropdownList';
import { MapActions } from '../../types';

const SearchContainer = (): JSX.Element => {
  const [searchBarValue, setSearchBarValue] = useState('');
  const { searchParameter, countItemsPerPage } = useAppSelector((state) => state.searchValues);

  const dispatch = useAppDispatch();

  const mapActions: MapActions = {
    searchString: (value: string) => setSearchBarValue(value),
    searchParameter: (value: string) => dispatch(setSearchParameter(value)),
    countItemsPerPage: (value: string) => dispatch(setCountItemsPerPage(Number(value))),
  };

  const handleChange = ({ target }: ChangeEvent<HTMLInputElement>) => {
    mapActions[target.name](target.value);
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();

    dispatch(setSearchString(searchBarValue));
    dispatch(resetPaginationState());
    setSearchBarValue('');
  };

  const { breakfast, lunch, dinner } = switcherNames;

  return (
    <form onSubmit={handleSubmit} className="search-container">
      <div className="search-line">
        <SearchBar handleChange={handleChange} searchString={searchBarValue} />
        <button className="search-button" type="submit" />
      </div>
      <div className="search-params">
        <Switcher value={breakfast} isSelected={searchParameter === breakfast} handleChange={handleChange} />
        <Switcher value={lunch} isSelected={searchParameter === lunch} handleChange={handleChange} />
        <Switcher value={dinner} isSelected={searchParameter === dinner} handleChange={handleChange} />
        <DropDownList handleChange={handleChange} countItemsPerPage={countItemsPerPage} />
      </div>
    </form>
  );
};

export default SearchContainer;

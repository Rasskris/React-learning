import React, { ChangeEvent, useState } from 'react';
import { SearchBar } from '../SearchBar';

const SearchBarContainer = (): JSX.Element => {
  const [inputData, setInputData] = useState('');

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => setInputData(e.target.value);

  return (
    <div className="search-container">
      <SearchBar
        onChange={handleChange}
        type="text"
        name="search"
        placeholder="Search cute cats..."
        value={inputData}
      />
      <div className="search-img" />
    </div>
  );
};

export default SearchBarContainer;

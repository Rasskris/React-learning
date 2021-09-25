import React from 'react';
import './Switcher.scss';
import { ISwitcher } from '../../interfaces';

const Switcher = ({ value, isSelected, handleChange }: ISwitcher): JSX.Element => {
  return (
    <label htmlFor={value}>
      <p className="search__switcher-text">{value}</p>
      <input
        className="search__switcher"
        id={value}
        type="radio"
        onChange={handleChange}
        name="searchParameter"
        value={value}
        checked={isSelected}
      />
    </label>
  );
};

export default Switcher;

import React from 'react';
import './DropDownList.scss';
import { IDropDownList } from '../../interfaces';

const DropDownList = ({ countItemsPerPage, handleChange }: IDropDownList): JSX.Element => {
  return (
    <label htmlFor="countItemsPerPage">
      Count recipes per page:
      <select
        className="dropdown-list"
        name="countItemsPerPage"
        value={countItemsPerPage}
        onChange={handleChange}
      >
        <option value="10">10</option>
        <option value="15">15</option>
        <option value="20">20</option>
      </select>
    </label>
  );
};

export default DropDownList;

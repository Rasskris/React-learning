import React from 'react';
import './PaginationItem.scss';
import { PaginationItemProps } from '../../types';

const PaginationItem = ({
  handleClick,
  textContent,
  id,
  disabled,
  isActive,
}: Partial<PaginationItemProps>): JSX.Element => {
  const classname = isActive ? 'pagination__item active' : 'pagination__item';

  return (
    <li>
      <button id={id} disabled={disabled} onClick={handleClick} type="button" className={classname}>
        {textContent}
      </button>
    </li>
  );
};

export default PaginationItem;

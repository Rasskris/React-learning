import React, { useState, MouseEvent } from 'react';
import './Pagination.scss';
import { PaginationProps } from '../../types';
import { getTotalPages } from '../../helpers';

const Pagination = ({
  countItems,
  numOfCurrentPage,
  countItemsPerPage,
  changeNumOfCurrentPage,
}: PaginationProps): JSX.Element => {
  const pageNumberLimit = 5;

  const [minPageNumberLimit, setMinPageNumberLimit] = useState(0);
  const [maxPageNuberLimit, setMaxPageNumberLImit] = useState(5);

  const totalPages = getTotalPages(countItems, countItemsPerPage);

  const handleClick = ({ target }: MouseEvent) => {
    changeNumOfCurrentPage(Number((target as HTMLAnchorElement).id));
  };

  const renderPageNumbers = totalPages.map((number) => {
    if (number < maxPageNuberLimit + 1 && number > minPageNumberLimit) {
      return (
        <li key={String(number)}>
          <a
            href="#!"
            id={String(number)}
            onClick={handleClick}
            className={numOfCurrentPage === number ? 'pagination__item active' : 'pagination__item'}
          >
            {number}
          </a>
        </li>
      );
    }
    return null;
  });

  const handleNextButton = () => {
    changeNumOfCurrentPage(numOfCurrentPage + 1);

    if (numOfCurrentPage + 1 > maxPageNuberLimit) {
      setMaxPageNumberLImit(maxPageNuberLimit + pageNumberLimit);
      setMinPageNumberLimit(minPageNumberLimit + pageNumberLimit);
    }
  };

  const handlePrevButton = () => {
    changeNumOfCurrentPage(numOfCurrentPage - 1);

    if ((numOfCurrentPage - 1) % pageNumberLimit === 0) {
      setMaxPageNumberLImit(maxPageNuberLimit - pageNumberLimit);
      setMinPageNumberLimit(minPageNumberLimit - pageNumberLimit);
    }
  };

  let pageIncrementButton = null;
  if (totalPages.length > maxPageNuberLimit) {
    pageIncrementButton = (
      <li>
        <a href="#!" onClick={handleNextButton}>
          ...
        </a>
      </li>
    );
  }

  let pageDecrementButton = null;
  if (minPageNumberLimit >= 1) {
    pageDecrementButton = (
      <li>
        <a href="#!" onClick={handlePrevButton}>
          ...
        </a>
      </li>
    );
  }

  return (
    <ul className="pageNumbers">
      <li>
        <button
          type="button"
          className="pagination__item"
          onClick={handlePrevButton}
          disabled={numOfCurrentPage === totalPages[0]}
        >
          &#5176;
        </button>
      </li>
      {pageDecrementButton}
      {renderPageNumbers}
      {pageIncrementButton}
      <li>
        <button
          type="button"
          className="pagination__item"
          onClick={handleNextButton}
          disabled={numOfCurrentPage === totalPages[totalPages.length - 1]}
        >
          &#5171;
        </button>
      </li>
    </ul>
  );
};

export default Pagination;

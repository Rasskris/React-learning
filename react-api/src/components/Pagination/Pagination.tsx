import React, { MouseEvent } from 'react';
import './Pagination.scss';
import { PaginationItem } from '../PaginationItem';
import { useAppDispatch, useAppSelector } from '../../hooks';
import { setCurrentPage, setMinPageNumberLimit, setMaxPageNumberLimit } from '../../store/slices';
import { getTotalPages } from './helpers';

const Pagination = ({ countItems }: { countItems: number }): JSX.Element => {
  const pageNumberLimit = 5;

  const { countItemsPerPage } = useAppSelector((state) => state.searchValues);
  const { currentPage, minPageNumberLimit, maxPageNumberLimit } = useAppSelector((state) => state.pagination);

  const dispatch = useAppDispatch();

  const totalPages = getTotalPages(countItems, countItemsPerPage);

  const handleClick = ({ target }: MouseEvent) => {
    const currentNumber = Number((target as HTMLButtonElement).id);

    dispatch(setCurrentPage(currentNumber));
  };

  const renderPageNumbers = totalPages.map((number) => {
    if (number < maxPageNumberLimit + 1 && number > minPageNumberLimit) {
      return (
        <PaginationItem
          key={String(number)}
          isActive={currentPage === number}
          handleClick={handleClick}
          textContent={String(number)}
          id={String(number)}
        />
      );
    }
    return null;
  });

  const handleNextButton = () => {
    dispatch(setCurrentPage(currentPage + 1));

    if (currentPage + 1 > maxPageNumberLimit) {
      dispatch(setMaxPageNumberLimit(maxPageNumberLimit + pageNumberLimit));
      dispatch(setMinPageNumberLimit(minPageNumberLimit + pageNumberLimit));
    }
  };

  const handlePrevButton = () => {
    dispatch(setCurrentPage(currentPage - 1));

    if ((currentPage - 1) % pageNumberLimit === 0) {
      dispatch(setMaxPageNumberLimit(maxPageNumberLimit - pageNumberLimit));
      dispatch(setMinPageNumberLimit(minPageNumberLimit - pageNumberLimit));
    }
  };

  let pageIncrementButton = null;
  if (totalPages.length > maxPageNumberLimit) {
    pageIncrementButton = <PaginationItem handleClick={handleNextButton} textContent="..." />;
  }

  let pageDecrementButton = null;
  if (minPageNumberLimit >= 1) {
    pageDecrementButton = <PaginationItem handleClick={handlePrevButton} textContent="..." />;
  }

  return (
    <ul className="pageNumbers">
      <PaginationItem
        handleClick={handlePrevButton}
        disabled={currentPage === totalPages[0]}
        textContent="<"
      />
      {pageDecrementButton}
      {renderPageNumbers}
      {pageIncrementButton}
      <PaginationItem
        handleClick={handleNextButton}
        disabled={currentPage === totalPages[totalPages.length - 1]}
        textContent=">"
      />
    </ul>
  );
};

export default Pagination;

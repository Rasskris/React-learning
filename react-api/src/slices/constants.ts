import { SearchValues, Pagination } from '../types';

export const initSearchState: SearchValues = {
  searchString: '',
  searchParameter: 'Breakfast',
  countItemsPerPage: 10,
};

export const initPaginationState: Pagination = {
  currentPage: 1,
  minPageNumberLimit: 0,
  maxPageNumberLimit: 5,
};

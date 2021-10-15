type SearchValues = {
  searchString: string;
  searchParameter: string;
  countItemsPerPage: number;
};
type Pagination = {
  currentPage: number;
  minPageNumberLimit: number;
  maxPageNumberLimit: number;
};

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

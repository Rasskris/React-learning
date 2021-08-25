import {
  setCurrentPage,
  setMaxPageNumberLimit,
  setMinPageNumberLimit,
  resetPaginationState,
  paginationReducer,
} from '../paginationSlice';
import { initPaginationState } from '../constants';

describe('Pagination slice', () => {
  test('should handle changing the number of current page', () => {
    expect(paginationReducer(initPaginationState, setCurrentPage(7))).toEqual({
      ...initPaginationState,
      currentPage: 7,
    });
  });

  test('should handle changing min and max number limit', () => {
    const changedState = paginationReducer(initPaginationState, setMinPageNumberLimit(10));

    expect(paginationReducer(changedState, setMaxPageNumberLimit(15))).toEqual({
      ...initPaginationState,
      minPageNumberLimit: 10,
      maxPageNumberLimit: 15,
    });
  });

  test('should return the initial state', () => {
    const changedState = paginationReducer(initPaginationState, setCurrentPage(7));

    expect(paginationReducer(changedState, resetPaginationState())).toEqual({
      ...initPaginationState,
    });
  });
});

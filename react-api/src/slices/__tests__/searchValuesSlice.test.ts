import {
  setSearchString,
  setSearchParameter,
  setCountItemsPerPage,
  searchReducer,
} from '../searchValuesSlice';
import { initSearchState } from '../constants';

describe('Pagination slice', () => {
  test('should handle new search string', () => {
    expect(searchReducer(initSearchState, setSearchString('peach'))).toEqual({
      ...initSearchState,
      searchString: 'peach',
    });
  });

  test('should handle changing search parameter', () => {
    expect(searchReducer(initSearchState, setSearchParameter('dinner'))).toEqual({
      ...initSearchState,
      searchParameter: 'dinner',
    });
  });

  test('should handle changing count items per page', () => {
    expect(searchReducer(initSearchState, setCountItemsPerPage(20))).toEqual({
      ...initSearchState,
      countItemsPerPage: 20,
    });
  });
});

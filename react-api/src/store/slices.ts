/* eslint-disable no-param-reassign */
import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { initSearchState, initPaginationState } from './constants';

const searchValuesSlice = createSlice({
  name: 'searchValues',
  initialState: initSearchState,
  reducers: {
    setSearchString: (state, { payload }: PayloadAction<string>) => {
      state.searchString = payload;
    },
    setSearchParameter: (state, { payload }: PayloadAction<string>) => {
      state.searchParameter = payload;
    },
    setCountItemsPerPage: (state, { payload }: PayloadAction<number>) => {
      state.countItemsPerPage = payload;
    },
  },
});

const paginationSlice = createSlice({
  name: 'pagination',
  initialState: initPaginationState,
  reducers: {
    setCurrentPage: (state, { payload }: PayloadAction<number>) => {
      state.currentPage = payload;
    },
    setMinPageNumberLimit: (state, { payload }: PayloadAction<number>) => {
      state.minPageNumberLimit = payload;
    },
    setMaxPageNumberLimit: (state, { payload }: PayloadAction<number>) => {
      state.maxPageNumberLimit = payload;
    },
    resetPaginationState: () => {
      return { ...initPaginationState };
    },
  },
});

export const { setSearchString, setSearchParameter, setCountItemsPerPage } = searchValuesSlice.actions;
export const { setCurrentPage, setMinPageNumberLimit, setMaxPageNumberLimit, resetPaginationState } =
  paginationSlice.actions;

export const searchReducer = searchValuesSlice.reducer;
export const paginationReducer = paginationSlice.reducer;

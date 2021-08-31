/* eslint-disable no-param-reassign */
import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { initSearchState } from './constants';

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

export const { setSearchString, setSearchParameter, setCountItemsPerPage } = searchValuesSlice.actions;

export const searchReducer = searchValuesSlice.reducer;

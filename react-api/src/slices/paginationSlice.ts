/* eslint-disable no-param-reassign */
import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { initPaginationState } from './constants';

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

export const { setCurrentPage, setMinPageNumberLimit, setMaxPageNumberLimit, resetPaginationState } =
  paginationSlice.actions;

export const paginationReducer = paginationSlice.reducer;

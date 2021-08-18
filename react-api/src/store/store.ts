import { configureStore } from '@reduxjs/toolkit';
import { setupListeners } from '@reduxjs/toolkit/query';
import { recipeApi } from '../services';
import { searchReducer, paginationReducer } from './slices';

const store = configureStore({
  reducer: {
    searchValues: searchReducer,
    pagination: paginationReducer,
    [recipeApi.reducerPath]: recipeApi.reducer,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(recipeApi.middleware),
});

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;

setupListeners(store.dispatch);

export default store;

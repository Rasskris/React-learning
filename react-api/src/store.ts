import { configureStore, Store } from '@reduxjs/toolkit';
import { setupListeners } from '@reduxjs/toolkit/query';
import { recipeApi } from './services';
import { searchReducer, paginationReducer } from './slices';

export const makeStore = (): Store => {
  return configureStore({
    reducer: {
      searchValues: searchReducer,
      pagination: paginationReducer,
      [recipeApi.reducerPath]: recipeApi.reducer,
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(recipeApi.middleware),
  });
};

const store = makeStore();

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;

setupListeners(store.dispatch);

export default store;

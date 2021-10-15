import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { Data } from '../types';
import { IQuery } from '../interfaces';
import { APP_ID, APP_KEY, APP_URL } from './constants';

export const recipeApi = createApi({
  reducerPath: 'recipeApi',
  baseQuery: fetchBaseQuery({ baseUrl: APP_URL }),
  endpoints: (builder) => ({
    getRecipes: builder.query<Data, IQuery>({
      query: ({ searchString, searchParameter, from, to }) =>
        `search?q=${searchString}&app_id=${APP_ID}&app_key=${APP_KEY}&mealType=${searchParameter}&from=${from}&to=${to}`,
    }),
    getRecipeById: builder.query<Data, string>({
      query: (id) => `api/recipes/v2/${id}?type=public&app_id=${APP_ID}&app_key=${APP_KEY}`,
    }),
  }),
});

export const { useGetRecipesQuery, useGetRecipeByIdQuery } = recipeApi;

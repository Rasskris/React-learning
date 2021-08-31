import { MouseEventHandler } from 'react';
import { IRecipe, ISearchParams, IRecipeFull } from './interfaces';

export type SearchBarProp = {
  changeSearchParams: (searchParams: Partial<ISearchParams>) => void;
};

export type Data = {
  count: string;
  more: boolean;
  from: number;
  to: number;
  hits: [{ recipe: IRecipe }];
  recipe: IRecipeFull;
};

export type Response = {
  data: Data | null;
  error: string;
  isPending: boolean;
};

export type MapActions = {
  [key: string]: (value: string) => void;
};

export type PaginationItemProps = {
  handleClick: MouseEventHandler;
  textContent: string;
  id: string;
  disabled: boolean;
  isActive: boolean;
};

export type SearchValues = {
  searchString: string;
  searchParameter: string;
  countItemsPerPage: number;
};
export type Pagination = {
  currentPage: number;
  minPageNumberLimit: number;
  maxPageNumberLimit: number;
};

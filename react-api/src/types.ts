import { MouseEventHandler } from 'react';
import { IRecipe, ISearchParams, IRecipeFull } from './interfaces';

export type SearchBarProp = {
  changeSearchParams: (searchParams: Partial<ISearchParams>) => void;
};

export type Data = {
  count: number;
  more: boolean;
  from: number;
  to: number;
  hits: { recipe: IRecipe }[];
  recipe: IRecipeFull;
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

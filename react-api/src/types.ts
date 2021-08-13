import { IRecipe, ISearchParams, IRecipeFull } from './interfaces';

export type SearchBarProp = {
  changeSearchParams: (searchParams: Partial<ISearchParams>) => void;
};

export type Data = {
  count: string;
  hits: [{ recipe: IRecipe }];
  recipe: IRecipeFull;
};

export type Response = {
  data: Data | null;
  error: string;
  isPending: boolean;
};

export type PaginationProps = {
  countItems: number;
  numOfCurrentPage: number;
  countItemsPerPage: number;
  changeNumOfCurrentPage: (numOfPage: number) => void;
};

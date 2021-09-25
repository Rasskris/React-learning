import { IRecipe, ISearchParams } from './interfaces';

export type SearchBarProp = {
  changeSearchParams: (searchParams: Partial<ISearchParams>) => void;
};

export type Data = {
  count: string;
  hits: [{ recipe: IRecipe }];
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

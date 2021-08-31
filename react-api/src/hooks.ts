import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux';
import { AppDispatch, RootState } from './store/store';
import { getLastAndFirstIndex } from './helpers';
import { IQuery } from './interfaces';

// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
export const useAppDispatch = () => useDispatch<AppDispatch>();
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;

export const useGetQueryParams = (): IQuery => {
  const currentPage = useAppSelector((state) => state.pagination.currentPage);
  const { countItemsPerPage, searchString, searchParameter } = useAppSelector((state) => state.searchValues);

  const { firstIndex: from, lastIndex: to } = getLastAndFirstIndex(
    currentPage as number,
    countItemsPerPage as number,
  );

  return { searchString, searchParameter, from, to };
};

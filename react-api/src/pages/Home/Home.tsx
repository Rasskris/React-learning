import React from 'react';
import { SerializedError } from '@reduxjs/toolkit';
import { FetchBaseQueryError } from '@reduxjs/toolkit/dist/query';
import { useGetRecipesQuery } from '../../services';
import { useAppSelector } from '../../hooks';
import './Home.scss';
import { SearchContainer, SearchResult, PreLoader, ErrorMessage } from '../../components';
import { getLastAndFirstIndex } from '../../helpers';

const Home = (): JSX.Element => {
  const currentPage = useAppSelector((state) => state.pagination.currentPage);
  const { countItemsPerPage, searchString, searchParameter } = useAppSelector((state) => state.searchValues);

  const { firstIndex: from, lastIndex: to } = getLastAndFirstIndex(
    currentPage as number,
    countItemsPerPage as number,
  );

  const { data, isError, error, isLoading, isFetching } = useGetRecipesQuery({
    searchString,
    searchParameter,
    from,
    to,
  });

  if (isLoading || isFetching) {
    return (
      <div className="home">
        <PreLoader />
      </div>
    );
  }

  return (
    <div className="home">
      <SearchContainer />
      {isError && (
        <ErrorMessage error={(error as SerializedError).message || (error as FetchBaseQueryError).status} />
      )}
      {data && <SearchResult response={data} searchString={searchString} />}
    </div>
  );
};

export default Home;

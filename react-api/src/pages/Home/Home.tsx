import './Home.scss';
import React from 'react';
import { SerializedError } from '@reduxjs/toolkit';
import { FetchBaseQueryError } from '@reduxjs/toolkit/dist/query';
import { useGetRecipesQuery } from '../../services';
import { SearchContainer, SearchResult, PreLoader, ErrorMessage } from '../../components';
import { useGetQueryParams } from '../../hooks';

const Home = (): JSX.Element => {
  const queryParams = useGetQueryParams();

  const { data, isError, error, isLoading, isFetching } = useGetRecipesQuery(queryParams);

  if (isLoading || isFetching) {
    return (
      <div className="home">
        <PreLoader />
      </div>
    );
  }

  return (
    <div data-testid="home-page" className="home">
      <SearchContainer />
      {isError && (
        <ErrorMessage error={(error as SerializedError).message || (error as FetchBaseQueryError).status} />
      )}
      {data && <SearchResult response={data} />}
    </div>
  );
};

export default Home;

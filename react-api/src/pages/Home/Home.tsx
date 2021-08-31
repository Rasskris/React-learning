import React from 'react';
import { SerializedError } from '@reduxjs/toolkit';
import { FetchBaseQueryError } from '@reduxjs/toolkit/dist/query';
import { useGetRecipesQuery } from '../../services';
import { useGetQueryParams } from '../../hooks';
import './Home.scss';
import { SearchContainer, SearchResult, PreLoader, ErrorMessage } from '../../components';

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
    <div className="home">
      <SearchContainer />
      {isError && (
        <ErrorMessage error={(error as SerializedError).message || (error as FetchBaseQueryError).status} />
      )}
      {data && <SearchResult response={data} />}
    </div>
  );
};

export default Home;

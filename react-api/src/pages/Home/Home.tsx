import React from 'react';
import { SerializedError } from '@reduxjs/toolkit';
import { FetchBaseQueryError } from '@reduxjs/toolkit/dist/query';
import { useGetRecipesQuery } from '../../services';
import { useAppSelector } from '../../hooks';
import './Home.scss';
import { SearchContainer, RecipesList, Pagination, PreLoader, ErrorMessage } from '../../components';
import { getLastAndFirstIndex } from '../../helpers';
import { Data } from '../../types';

const Home = (): JSX.Element => {
  const currentPage = useAppSelector((state) => state.pagination.currentPage);
  const { countItemsPerPage, searchString, searchParameter } = useAppSelector((state) => state.searchValues);

  const { firstIndex: from, lastIndex: to } = getLastAndFirstIndex(
    currentPage as number,
    countItemsPerPage as number,
  );

  const { data, isError, error, isLoading } = useGetRecipesQuery({
    searchString,
    searchParameter,
    from,
    to,
  });

  const resultOfSearch = (response: Data): JSX.Element | string => {
    const { more, from: firstIndex, to: lastIndex, count } = response;

    if (more) {
      return (
        <>
          <RecipesList data={response} />
          <Pagination countItems={Number(count)} />
        </>
      );
    }
    if (!more && firstIndex === lastIndex) {
      const errorMessage = 'Sorry, only the first 100 recipes are available';
      return <ErrorMessage error={errorMessage} />;
    }
    const errorMessage = `Sorry we couldn't find any matches for ${searchString} recipes...`;
    return <ErrorMessage error={errorMessage} />;
  };

  return (
    <div className="home">
      <SearchContainer />
      {isLoading && <PreLoader />}
      {isError && (
        <ErrorMessage error={(error as SerializedError).message || (error as FetchBaseQueryError).status} />
      )}
      {data && resultOfSearch(data)}
    </div>
  );
};

export default Home;

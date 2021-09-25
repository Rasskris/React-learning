import React, { useState } from 'react';
import './App.scss';
import { SearchContainer, RecipesList, useFetch, Pagination, PreLoader } from './components';
import { ISearchParams } from './interfaces';
import { initSearchState } from './constants';

const App = (): JSX.Element => {
  const [numOfCurrentPage, setNumOfCurrentPage] = useState(1);
  const [searchParams, setSearchParams] = useState<ISearchParams>(initSearchState);

  const { countItemsPerPage, searchString, searchParameter } = searchParams;

  const changeNumOfCurrentPage = (numOfPage: number) => {
    console.log('changeNumber', numOfPage);
    setNumOfCurrentPage(numOfPage);
  };

  const changeSearchParams = (newSearchParams: Partial<ISearchParams>) => {
    setSearchParams((prevState) => ({
      ...prevState,
      ...newSearchParams,
    }));
    console.log('changeSearchParams');
  };

  const { data, error, isPending } = useFetch({
    searchString,
    searchParameter,
    numOfCurrentPage,
    countItemsPerPage,
  });
  console.log(data);
  return (
    <div className="App">
      <SearchContainer changeSearchParams={changeSearchParams} />
      {isPending && <PreLoader />}
      {error}
      {data && <RecipesList data={data} />}
      {data && (
        <Pagination
          countItems={Number(data.count)}
          countItemsPerPage={countItemsPerPage}
          numOfCurrentPage={numOfCurrentPage}
          changeNumOfCurrentPage={changeNumOfCurrentPage}
        />
      )}
    </div>
  );
};

export default App;

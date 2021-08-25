import React from 'react';
import { Pagination } from '../Pagination';
import { RecipesList } from '../RecipesList';
import { ErrorMessage } from '../ErrorMessage';
import { Data } from '../../types';

type SearchResultProps = {
  response: Omit<Data, 'recipe'>;
  searchString: string;
};

const SearchResult = ({ response, searchString }: SearchResultProps): JSX.Element => {
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

export default SearchResult;

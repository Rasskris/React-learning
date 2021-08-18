import React from 'react';
import { useParams } from 'react-router-dom';
import { SerializedError } from '@reduxjs/toolkit';
import { FetchBaseQueryError } from '@reduxjs/toolkit/dist/query';
import { useGetRecipeByIdQuery } from '../../services';
import './RecipeDetails.scss';
import { PreLoader, RecipeFull, ErrorMessage } from '../../components';

const RecipeDetails = (): JSX.Element => {
  const { id } = useParams<{ id: string }>();
  const { data, isLoading, isError, error } = useGetRecipeByIdQuery(id);

  return (
    <section className="recipeDetails">
      {isLoading && <PreLoader />}
      {isError && (
        <ErrorMessage error={(error as SerializedError).message || (error as FetchBaseQueryError).status} />
      )}
      {data && <RecipeFull recipe={data.recipe} />}
    </section>
  );
};

export default RecipeDetails;

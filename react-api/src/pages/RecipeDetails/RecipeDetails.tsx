import React from 'react';
import { useParams } from 'react-router-dom';
import './RecipeDetails.scss';
import { useFetch, PreLoader, RecipeFull, ErrorMessage } from '../../components';

const RecipeDetails = (): JSX.Element => {
  const { id } = useParams<{ id: string }>();
  const { data, isPending, error } = useFetch({ id });

  return (
    <section className="recipeDetails">
      {isPending && <PreLoader />}
      {error && <ErrorMessage errorMessage={error} />}
      {data && <RecipeFull recipe={data.recipe} />}
    </section>
  );
};

export default RecipeDetails;

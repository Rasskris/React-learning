import { useEffect, useState } from 'react';
import { IQuery } from '../../interfaces';
import { Response, Data } from '../../types';
import { getRequestString, generateError } from './helpers';

const useFetch = (queryParams: Partial<IQuery>): Partial<Response> => {
  const requestString = getRequestString(queryParams);

  const [data, setData] = useState<Data | null>(null);
  const [isPending, setIsPending] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    fetch(requestString)
      .then((response) => {
        if (response.ok) {
          return response.json();
        }
        return generateError();
      })
      .then((responsedData) => {
        setIsPending(false);
        setData(responsedData);
        setError('');
      })
      .catch((err) => {
        setIsPending(false);
        setError(err.message);
      });
  }, [requestString]);

  return { data, isPending, error };
};

export default useFetch;

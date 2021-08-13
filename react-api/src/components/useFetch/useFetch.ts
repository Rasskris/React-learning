import { useEffect, useState } from 'react';
import { IQuery } from '../../interfaces';
import { Response, Data } from '../../types';
import { getRequestString, getRequestStringWithID, generateError } from './helpers';

const useFetch = (queryParams: Partial<IQuery>): Partial<Response> => {
  const requestString = queryParams.id
    ? getRequestStringWithID(queryParams.id)
    : getRequestString(queryParams);

  const [data, setData] = useState<Data | null>(null);
  const [isPending, setIsPending] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    const abortControl = new AbortController();

    fetch(requestString, { signal: abortControl.signal })
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
    return () => abortControl.abort();
  }, [requestString]);

  return { data, isPending, error };
};

export default useFetch;

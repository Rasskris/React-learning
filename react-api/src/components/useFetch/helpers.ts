/* eslint-disable prefer-destructuring */
import { getLastAndFirstIndex } from '../../helpers';
import { IQuery } from '../../interfaces';

const APP_ID = process.env.APP_ID;
const APP_KEY = process.env.APP_KEY;
const APP_URL = process.env.APP_URL;
const APP_URL_ID = process.env.APP_URL_ID;

const generateError = (): Error => {
  const textError = 'could not fetch the data for that resource';
  throw new Error(textError);
};

const getRequestString = ({
  searchString,
  searchParameter,
  numOfCurrentPage,
  countItemsPerPage,
}: Partial<IQuery>): string => {
  const { indexOfFirstItem: from, indexOfLastItem: to } = getLastAndFirstIndex(
    numOfCurrentPage as number,
    countItemsPerPage as number,
  );

  return `${APP_URL}?q=${searchString}&app_id=${APP_ID}&app_key=${APP_KEY}&mealType=${searchParameter}&from=${from}&to=${to}`;
};

const getRequestStringWithID = (id: string): string => {
  return `${APP_URL_ID}/${id}?type=public&app_id=${APP_ID}&app_key=${APP_KEY}`;
};

export { generateError, getRequestString, getRequestStringWithID };

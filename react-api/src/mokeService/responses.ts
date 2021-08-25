import { recipe } from './recipe';
import { Data } from '../types';

export const response = {
  count: 2,
  more: true,
  from: 1,
  to: 10,
  hits: [{ recipe }],
};

export const responseWithMore: Omit<Data, 'recipe'> = {
  count: 9,
  more: true,
  hits: [{ recipe }],
  from: 1,
  to: 9,
};

export const responseWithoutMore: Omit<Data, 'recipe'> = {
  count: 0,
  more: false,
  hits: [],
  from: 9,
  to: 9,
};

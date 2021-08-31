import { IFormDataState, IFormAction } from '../../interfaces';
import { actionType, initFormDataState } from './constants';

const formReducer = (state: IFormDataState, { type, payload }: IFormAction): IFormDataState => {
  switch (type) {
    case actionType.RESET:
      return initFormDataState;
    case actionType.CHANGE:
      return {
        ...state,
        ...payload,
      };
    default:
      throw new Error('Unknown action');
  }
};

export default formReducer;

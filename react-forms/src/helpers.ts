import { IFormDataState, IFormAction } from './interfaces';
import { actionType, initFormDataState } from './constants';

const formReducer = (state: IFormDataState, { type, payload }: IFormAction): IFormDataState => {
  switch (type) {
    case actionType.reset:
      return initFormDataState;
    case actionType.change:
      return {
        ...state,
        ...payload,
      };
    default:
      throw new Error('Unknown action');
  }
};

export { formReducer };

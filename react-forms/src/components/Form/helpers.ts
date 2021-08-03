import { IFormDataState, IFormAction, IValidationResult } from '../../interfaces';
import { actionType, initFormDataState } from './constants';

interface ErrorsMap {
  [key: string]: { regExp: RegExp; textError: string };
}

const errorsMap: ErrorsMap = {
  firstName: {
    regExp: /^(?!\d+$)[^~!@#$%*()_—+=|:;"'`<>,.?/^]{1,30}$/gi,
    textError: "First Name can't be empty, starts with numbers and consist service chars",
  },
  lastName: {
    regExp: /^(?!\d+$)[^~!@#$%*()_—+=|:;"'`<>,.?/^]{1,30}$/gi,
    textError: "Last Name can't be empty, starts with numbers and consist service chars",
  },
  email: {
    regExp: /\b[\w.-]+@[\w.-]+\.\w+\b/gi,
    textError: "Email can't be empty and must comply with standard rule [RFC]",
  },
};

const validateTextInput = (inputName: string, inputValue: string): IValidationResult => {
  const { regExp, textError } = errorsMap[inputName];
  const isValid = inputValue.search(regExp) !== -1;

  return isValid ? { isValid, textError: '' } : { isValid, textError };
};

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

export { validateTextInput, formReducer };

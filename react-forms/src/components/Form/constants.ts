export const formFieldNames = {
  fieldNameFirstName: 'firstName',
  fieldNameLastName: 'lastName',
  fieldNameEmail: 'email',
  fieldNameCountryList: 'country',
  fieldNameDateOfBirth: 'dateOfBirth',
  fieldNameContactChoice: 'contactChoice',
  fieldNameAgreeWithRules: 'agreeWithRules',
};

export const actionType = {
  CHANGE: 'CHANGE',
  RESET: 'RESET',
};

export const initFormDataState = {
  firstName: '',
  lastName: '',
  email: '',
  dateOfBirth: '',
  country: 'Russia',
  contactChoice: 'email',
  agreeWithRules: false,
};

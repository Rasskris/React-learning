import IFormDataState from './formDataState.interface';

export default interface IFormAction {
  type: string;
  payload?: Partial<IFormDataState>;
}

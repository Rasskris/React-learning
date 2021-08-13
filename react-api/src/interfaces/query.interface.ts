export default interface IQuery {
  searchString: string;
  searchParameter: string;
  numOfCurrentPage: number;
  countItemsPerPage: number;
  from: number;
  to: number;
  id: string;
}

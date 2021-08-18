type LastAndFirstIndex = {
  firstIndex: number;
  lastIndex: number;
};

const getLastAndFirstIndex = (currentPage: number, countItemsPerPage: number): LastAndFirstIndex => {
  const lastIndex = currentPage * countItemsPerPage;
  const firstIndex = lastIndex - countItemsPerPage;

  return { firstIndex, lastIndex };
};

const parseUri = (uri: string): string => uri.split('_')[1];

export { getLastAndFirstIndex, parseUri };

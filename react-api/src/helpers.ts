const getLastAndFirstIndex = (numOfCurrentPage: number, countItemsPerPage: number) => {
  const indexOfLastItem = numOfCurrentPage * countItemsPerPage;
  const indexOfFirstItem = indexOfLastItem - countItemsPerPage;

  return { indexOfFirstItem, indexOfLastItem };
};

const getTotalPages = (countItems = 0, itemsPerPage: number): number[] => {
  const numOfLastPage = Math.ceil(countItems / itemsPerPage);

  return Array(numOfLastPage)
    .fill('')
    .map((_, i) => i + 1);
};

export { getLastAndFirstIndex, getTotalPages };

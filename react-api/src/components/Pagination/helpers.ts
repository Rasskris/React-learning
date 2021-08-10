const getTotalPages = (countItems: number, itemsPerPage: number): number[] => {
  const numOfLastPage = Math.ceil(countItems / itemsPerPage);

  return Array(numOfLastPage)
    .fill('')
    .map((_, i) => i + 1);
};

export { getTotalPages };

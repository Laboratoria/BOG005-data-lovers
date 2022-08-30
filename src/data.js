export const alphabeticalOrder = (filteredData, sortBy) => {
  switch (sortBy) {
    case "za":
      return filteredData.sort(function (a, b) {
        return b.name.localeCompare(a.name);
      });
    case "az":
    default:
      return filteredData.sort(function (a, b) {
        return a.name.localeCompare(b.name);
      });
  }
};
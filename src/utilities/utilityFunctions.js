// Sorting an array by the value of ID 
export function sortArrayByValue(arr, sortDirection) {
  function compare(a, b) {
    if (sortDirection === 'asc') {
      return a.id - b.id;
    } else if (sortDirection === 'desc') {
      return b.id - a.id;
    }
  }
  return arr.sort(compare);
}
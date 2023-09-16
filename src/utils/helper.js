export function searchFilter(arr, search) {
  if (search.trim()?.length === 0) {
    return arr;
  }

  return arr?.filter((el) => {
    if (el.name.toLowerCase().includes(search.trim().toLowerCase())) {
      return true;
    }
    return false;
  });
}

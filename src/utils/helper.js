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

export function favoriteAndSortFilter(arr, bool, arrow) {
  let filtered = [];

  if (!arr) {
    return [];
  }

  if (bool) {
    filtered = arr?.filter((el) => el.isFavorite);
  } else filtered = arr;

  return filtered?.sort((a, b) => {
    if (arrow) {
      if (a.password < b.password) {
        return -1;
      }
      if (a.password > b.password) {
        return 1;
      }
      return 0;
    } else {
      if (a.password < b.password) {
        return 1;
      }
      if (a.password > b.password) {
        return -1;
      }
      return 0;
    }
  });
}

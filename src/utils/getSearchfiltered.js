export function getSearchfiltered(items, searchedText) {
  let res = [];
  if (
    searchedText === null ||
    searchedText === undefined ||
    searchedText.length === 0
  ) {
    return res;
  }
  searchedText = searchedText.toLowerCase();
  for (let i = 0; i < items.length; i++) {
    let temp = items[i];
    if (
      temp.name.toLowerCase().includes(searchedText) ||
      temp.city.toLowerCase() === searchedText ||
      temp.genre.toLowerCase().includes(searchedText)
    ) {
      res.push(temp);
    }
  }
  return res;
}

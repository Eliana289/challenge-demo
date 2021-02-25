export function getGenres(item) {
  if (item === null || item === undefined || item.length === 0) {
    return [];
  }
  const unique = [...new Set(item.map((a) => a.genre))];
  //   console.log(unique);
  const allGenres = [];
  for (let index = 0; index < unique.length; index++) {
    const tempArray = unique[index].split(",");
    for (let i = 0; i < tempArray.length; i++) {
      allGenres.push(tempArray[i]);
    }
  }
  // console.log([...new Set(allGenres)]);
  return [...new Set(allGenres)];
}

export function getGenrefiltered(items, target) {
  let res = [];
  for (let i = 0; i < items.length; i++) {
    let temp = items[i].genre;
    if (temp.includes(target)) {
      res.push(items[i]);
    }
  }
  return res;
}

export function getStates(item) {
  if (item === null || item === undefined || item.length === 0) {
    return [];
  }
  const unique = [...new Set(item.map((a) => a.state))];
  // console.log(unique);
  return unique;
}

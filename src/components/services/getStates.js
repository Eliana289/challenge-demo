export function getStates(item) {
  const unique = [...new Set(item.map((a) => a.state))];
  console.log(unique);
  return unique;
}

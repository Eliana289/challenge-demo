import _ from "lodash";

export function paginate(items, pageNumber, pageSize) {
  // console.log(
  //   "inside pagination: {pageNum: " + pageNumber + ", pageSize" + pageSize + "}"
  // );
  const startIndex = (pageNumber - 1) * pageSize;
  if (items.length >= pageSize) {
    return _(items).slice(startIndex).take(pageSize).value();
  }
  return _(items).slice(0).take(pageSize).value();
}

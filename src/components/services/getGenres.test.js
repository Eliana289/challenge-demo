import { getGenres } from "./getGenres";

test("Empty Array", () => {
  expect(getGenres([]).length).toBe(0);
});

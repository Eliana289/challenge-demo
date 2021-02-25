import { getStates } from "./getStates";

test("Empty Array:", () => {
  expect(getStates([]).length).toBe(0);
});

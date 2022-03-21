import { multiply, makeLowerCase } from "./HelperFunction";
// npm i -D --exact jest-watch-typeahead@0.6.5

test("multiply", () => {
  expect(multiply(2, 10)).toBe(20);
  expect(multiply(6, -2)).toBe(-12);
});

test("lowerCase", () => {
  expect(makeLowerCase("ROBert")).toBe("robert");
  expect(makeLowerCase("JOhn")).toBe("john");
});

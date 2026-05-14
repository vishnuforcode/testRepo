const { add, multiply } = require("../src/calculator");

test("addition works", () => {
  expect(add(2, 3)).toBe(5);
});

test("multiplication works", () => {
  expect(multiply(2, 3)).toBe(6);
}); 
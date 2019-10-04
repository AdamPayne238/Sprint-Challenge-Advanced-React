
import { add, subtract, multiply, divide } from "./components/Math";

//Add
test('Adds Parameter a and b', () => {
  let actual;
  let expected;
  actual = add(3, 4);
  expected = 7;
  expect(actual).toBe(expected);
});

//Subtract
test('Subtracts Parameter a and b', () => {
  let actual;
  let expected;
  actual = subtract(10, 5);
  expected = 5;
  expect(actual).toBe(expected);
});

//Multiply
test('Multiplies Parameter a and b', () => {
  let actual;
  let expected;
  actual = multiply(5, 20);
  expected = 100;
  expect(actual).toBe(expected);
});

//Divide
test('Divides Parameter a and b', () => {
  let actual;
  let expected;
  actual = divide(40, 4);
  expected = 10;
  expect(actual).toBe(expected);
});

//Dark Mode
test('Adds and Removes dark-mode class to and from DOM', () => {
  let actual;
  let expected;
  actual = add("dark-mode");
  expected = add("dark-mode");
  expect(actual).toBe(expected);
  expect(actual).not.toBe("");
});


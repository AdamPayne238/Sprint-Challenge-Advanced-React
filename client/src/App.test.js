
import { add, subtract, multiply, divide } from "./components/Math";

test('Adds Parameter a and b', () => {
  let actual;
  let expected;
  actual = add(3, 4);
  expected = 7;
  expect(actual).toBe(expected);
});

test('Subtracts Parameter a and b', () => {
  let actual;
  let expected;
  actual = subtract(10, 5);
  expected = 5;
  expect(actual).toBe(expected);
});

test('Multiplies Parameter a and b', () => {
  let actual;
  let expected;
  actual = multiply(5, 20);
  expected = 100;
  expect(actual).toBe(expected);
});

test('Divides Parameter a and b', () => {
  let actual;
  let expected;
  actual = divide(40, 4);
  expected = 10;
  expect(actual).toBe(expected);
});








//Pre Packed Imports and Tests

// import React from 'react';
// import ReactDOM from 'react-dom';
// import App from './App';

// it('renders without crashing', () => {
//   const div = document.createElement('div');
//   ReactDOM.render(<App />, div);
//   ReactDOM.unmountComponentAtNode(div);
// });

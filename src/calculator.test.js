import {add} from './calculator'
test('calculator-add', () => {
  const total = add(2,3)
  expect(total).toBe(5);
});
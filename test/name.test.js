import { name } from "ejs";
import { initialGenerator } from "../src/utils/generator";

test('Erwin Darsono, ED', () => {
  const initial = initialGenerator('Erwin Darsono');
  expect(initial).toBe('ERD');
})

test('Reggie John Miller, RJM', () => {
  const initial = initialGenerator('Reggie John Miller');
  expect(initial).toBe('RJM');
})

test('Erwin, ERW', () => {
  const initial = initialGenerator('Erwin');
  expect(initial).toBe('ERW');
})
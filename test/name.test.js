import { name } from "ejs";
import { name2InitialsGenerator, name3InitialsGenerator, name1InitialsGenerator } from "../src/utils/generator";

test('Erwin Darsono, ED', () => {
  const initials = name2InitialsGenerator('Erwin Darsono');
  expect(initials).toBe('ERD');
})

test('Reggie John Miller, RJM', () => {
  const initials = name3InitialsGenerator('Reggie John Miller');
  expect(initials).toBe('RJM');
})

test('Erwin, ERW', () => {
  const initials = name1InitialsGenerator('Erwin');
  expect(initials).toBe('ERW');
})
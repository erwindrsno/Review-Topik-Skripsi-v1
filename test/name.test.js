import { name } from "ejs";
import { nameInitialsGenerator } from "../src/utils/generator";

test('harus muncul ED', () => {
  const initials = nameInitialsGenerator('Erwin Darsono');
  expect(initials).toBe('ED');
})

test('')
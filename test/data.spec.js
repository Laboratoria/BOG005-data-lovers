// import { example, anotherExample } from '../src/data.js';

import { sortByNameOrTitle } from "../src/data.js";
describe("ssortByNameOrTitleort", () => {
  it("is a function", () => {
    expect(typeof sortByNameOrTitle).toBe("function");
  });
});

// describe('example', () => {
//   it('is a function', () => {
//     expect(typeof example).toBe('function');
//   });

//   it('returns `example`', () => {
//     expect(example()).toBe('example');
//   });
// });

// describe('anotherExample', () => {
//   it('is a function', () => {
//     expect(typeof anotherExample).toBe('function');
//   });

//   it('returns `anotherExample`', () => {
//     expect(anotherExample()).toBe('OMG');
//   });
// });

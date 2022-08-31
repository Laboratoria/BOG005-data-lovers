import {sortByNameOrTitle} from "../src/data.js";

// Test para función de ordenar A-Z

describe("sortByNameOrTitle", () => {
  it("is a function", () => {
    expect(typeof sortByNameOrTitle).toBe("function");
  });
});

/*it('Orders from A to Z', () => {

  let moviesOrder = sortByNameOrTitle(Object.values(moviesSample), 'Z-A');

  expect(moviesOrder[0]).toEqual(moviesSample."CastleInTheSky")
  expect(moviesOrder[3]).toEqual(moviesSample."HowlsMovingCastle")

})*/


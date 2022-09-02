import { filterByDirector, sortByNameOrTitle } from "../src/data.js";

// Test para función de ordenar A-Z

describe("sortByNameOrTitle", () => {
  it("Es una función", () => {
    expect(typeof sortByNameOrTitle).toBe("function");
  });
  it("Filtra en el orden que corresponde", () => {
    let data = [{ title: "a" }, { title: "b" }, { title: "c" }, { title: "z" }];
  });
});

// Test para función filtrar por director

describe("filterByDirector", () => {
  it("Filtra por Isao Takahata", () => {
    let data = [
      { director: "Isao Takahata" },
      { director: "Hayao Miyazaki" },
      { director: "Hiroyuri Morita" },
    ];
    let director = "Isao Takahata";
    let expectedData = [{ director: "Isao Takahata" }];
    let realResult = filterByDirector(data, director);

    expect(realResult).toStrictEqual(expectedData);
  });

  it("Filtra por Hayao Miyazaki", () => {
    let data = [
      { director: "Gorō Miyazaki" },
      { director: "Toshio Suzuki" },
      { director: "Hayao Miyazaki" },
    ];
    let director = "Hayao Miyazaki";
    let expectedData = [{ director: "Hayao Miyazaki" }];
    let realResult = filterByDirector(data, director);

    expect(realResult).toStrictEqual(expectedData);
  });
});

it("Retorna una lista de objetos", () => {
  const lista = filterByDirector(data, []);
  expect(lista).toEqual(["something"]);
});

import { filterByDirector, sortByNameOrTitle, getAverage } from "../src/data.js";

// Tests para función de ordenar A-Z

describe("sortByNameOrTitle", () => {
  it("Es una función", () => {
    expect(typeof sortByNameOrTitle).toBe("function");
  });

it("Filtra en el orden que corresponde", () => {
    let data = [{ title: "b" }, { title: "a" }, { title: "z" }, { title: "c" }];
    let expectedResult = [{ title: "a" }, { title: "b" }, { title: "c" }, { title: "z" }]
    let realResult = sortByNameOrTitle(data);
    expect(realResult).toEqual(expectedResult);
  });
});

// Tests para función filtrar por director

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

// Tests para función calcular

describe("getAverage", () => {
  
it("Es una función", () => {
    expect(typeof getAverage).toBe("function");
  });

it("La función hace un promedio", () => {
let dataFakeRatings = [{ rt_score: 21 }, { rt_score: 42 }, { rt_score: 55 }, { rt_score: 90 }, { rt_score: 80 }, { rt_score: 55 }];
let expectedResult = 57.166666666666664
let realResult = getAverage(dataFakeRatings);

expect(realResult).toEqual(expectedResult);
  });
});
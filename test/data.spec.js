/*describe("example", () => {
  it("is a function", () => {
    expect(typeof example).toBe("function");
  });

  it("returns `example`", () => {
    expect(example()).toBe("example");
  });
});

describe("anotherExample", () => {
  it("is a function", () => {
    expect(typeof anotherExample).toBe("function");
  });

  it("returns `anotherExample`", () => {
    expect(anotherExample()).toBe("OMG");
  });
});*/

//filtro guia test
import { countryFilter } from "../src/data.js";

describe("Text de filtro pais", () => {
  it("France", () => {
    const muestras = [
      {
        name: "Giovanni Abagnale",
        gender: "M",
        height: "198",
        weight: "90",
        sport: "Rowing",
        team: "Italy",
        noc: "ITA",
        age: 21,
        event: "Rowing Men's Coxless Pairs",
        medal: "Bronze",
      },
      {
        name: "Patimat Abakarova",
        gender: "F",
        height: "165",
        weight: "49",
        sport: "Taekwondo",
        team: "Azerbaijan",
        noc: "AZE",
        age: 21,
        event: "Taekwondo Women's Flyweight",
        medal: "Bronze",
      },
      {
        name: "Luc Abalo",
        gender: "M",
        height: "182",
        weight: "86",
        sport: "Handball",
        team: "France",
        noc: "FRA",
        age: 31,
        event: "Handball Men's Handball",
        medal: "Silver",
      },
    ];

    const resultadoEsperado = [
      {
        name: "Luc Abalo",
        gender: "M",
        height: "182",
        weight: "86",
        sport: "Handball",
        team: "France",
        noc: "FRA",
        age: 31,
        event: "Handball Men's Handball",
        medal: "Silver",
      },
    ];
    const resultadoRe = countryFilter(muestras, "France");
    expect(resultadoRe).toStrictEqual(resultadoEsperado);
  });
});

import {
  countryFilter,
  genderFilter,
  medalFilter,
  sportFilter,
  orderNameAZ,
  orderNameZA,
} from "../src/data.js";

// test filtro por pais
describe("Test de filtro pais", () => {
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

//test filtro por genero
describe("Test de filtro genero", () => {
  it("F", () => {
    const muestra = [
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
    ];
    const resultadoRe = genderFilter(muestra, "F");
    expect(resultadoRe).toStrictEqual(resultadoEsperado);
  });
});
//test filtro por medalla
describe("Test de filtro medalla", () => {
  it("Silver", () => {
    const muestra = [
      {
        name: "Saeid Morad Abdevali",
        gender: "M",
        height: "170",
        weight: "80",
        sport: "Wrestling",
        team: "Iran",
        noc: "IRI",
        age: 26,
        event: "Wrestling Men's Middleweight, Greco-Roman",
        medal: "Bronze",
      },
      {
        name: "Denis Mikhaylovich Ablyazin",
        gender: "M",
        height: "161",
        weight: "62",
        sport: "Gymnastics",
        team: "Russia",
        noc: "RUS",
        age: 24,
        event: "Gymnastics Men's Team All-Around",
        medal: "Silver",
      },

      {
        name: 'Matthew "Matt" Abood',
        gender: "M",
        height: "197",
        weight: "92",
        sport: "Swimming",
        team: "Australia",
        noc: "AUS",
        age: 30,
        event: "Swimming Men's 4 x 100 metres Freestyle Relay",
        medal: "Bronze",
      },
    ];
    const resultadoEsperado = [
      {
        name: "Denis Mikhaylovich Ablyazin",
        gender: "M",
        height: "161",
        weight: "62",
        sport: "Gymnastics",
        team: "Russia",
        noc: "RUS",
        age: 24,
        event: "Gymnastics Men's Team All-Around",
        medal: "Silver",
      },
    ];
    const resultadoRe = medalFilter(muestra, "Silver");
    expect(resultadoRe).toStrictEqual(resultadoEsperado);
  });
});
//test filtro por deporte
describe("Test de filtro deporte", () => {
  it("Taekwondo", () => {
    const muestra = [
      {
        name: 'Alejandro "lex" Abrines Redondo',
        gender: "M",
        height: "198",
        weight: "93",
        sport: "Basketball",
        team: "Spain",
        noc: "ESP",
        age: 23,
        event: "Basketball Men's Basketball",
        medal: "Bronze",
      },
      {
        name: "Ahmad Abughaush",
        gender: "M",
        height: "178",
        weight: "68",
        sport: "Taekwondo",
        team: "Jordan",
        noc: "JOR",
        age: 20,
        event: "Taekwondo Men's Featherweight",
        medal: "Gold",
      },
      {
        name: "Chantal Achterberg",
        gender: "F",
        height: "172",
        weight: "72",
        sport: "Rowing",
        team: "Netherlands",
        noc: "NED",
        age: 31,
        event: "Rowing Women's Quadruple Sculls",
        medal: "Silver",
      },
    ];
    const resultadoEsperado = [
      {
        name: "Ahmad Abughaush",
        gender: "M",
        height: "178",
        weight: "68",
        sport: "Taekwondo",
        team: "Jordan",
        noc: "JOR",
        age: 20,
        event: "Taekwondo Men's Featherweight",
        medal: "Gold",
      },
    ];
    const resultadoRe = sportFilter(muestra, "Taekwondo");
    expect(resultadoRe).toStrictEqual(resultadoEsperado);
  });
});

//test filtro ordenar A-Z
describe("orderNameAZ", () => {
  it("is a function", () => {
    expect(typeof orderNameAZ).toBe("function");
  });
  it("Lanza error sin parametro", () => {
    expect(() => orderNameAZ()).toThrow(Error);
  });
});

//test filtro ordenar Z-A
describe("orderNameZA", () => {
  it("is a function", () => {
    expect(typeof orderNameZA).toBe("function");
  });
  it("Lanza error sin parametro", () => {
    expect(() => orderNameZA()).toThrow(Error);
  });
});

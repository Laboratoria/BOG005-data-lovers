import { example, anotherExample } from "../src/data.js";

describe("example", () => {
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
});

//filtro guia test
/* import {countryFilter} from '../src/data.js';

describe("Text de filtro pais", ()=>{
  it("Germany", ()=>{
    const muestras = ...
  }];

  const resultadoEsperado = [[...
  ]];
  const resultadoRe = countryFilter(muestras, "Germany");
  expect(resultadoRe).toBe(resultadoEsperado);
  })
})
 */
//Este si es

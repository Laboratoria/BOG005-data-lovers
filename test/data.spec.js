import { orderNameAZ, orderNameZA, housesFilter, genderFilter} from '../src/data.js';

describe('orderNameAZ', () => {
  it('is a function', () => {
    expect(typeof orderNameAZ).toBe('function');
  });
  it("Lanza error sin parametro", () => {
    expect(() => orderNameAZ()).toThrow(Error)
  })
});

describe('orderNameZA', () => {
  it('is a function', () => {
    expect(typeof orderNameZA).toBe('function');
  });
  it("Lanza error sin parametro", () => {
    expect(() => orderNameZA()).toThrow(Error)
  })
});

describe("casos prueba filter houses", () => {
  it("Gryffindor", () => {
    const muestra = [
      {
        "id": 1,
        "name": "Euan Abercrombie",
        "birth": "between 1 September 1983 and 31 August 1984",
        "death": null,
        "species": "Human",
        "ancestry": null,
        "gender": "Male",
        "hair_color": null,
        "eye_color": null,
        "wand": null,
        "patronus": null,
        "house": "Gryffindor",
        "associated_groups": ["Hogwarts School of Witchcraft and Wizardry", "Gryffindor"],
        "books_featured_in": [5]
      },
      {
        "id": 2,
        "name": "Stewart Ackerley",
        "birth": "between 1 September 1982and 31 August 1983",
        "death": null,
        "species": "Human",
        "ancestry": null,
        "gender": "Male",
        "hair_color": null,
        "eye_color": null,
        "wand": null,
        "patronus": null,
        "house": "Ravenclaw",
        "associated_groups": [],
        "books_featured_in": [4]
      },
      {
        "id": 3,
        "name": "African prince",
        "birth": null,
        "death": null,
        "species": "Human",
        "ancestry": "Muggle-born or half-blood (possibly)",
        "gender": "Male",
        "hair_color": null,
        "eye_color": null,
        "wand": null,
        "patronus": null,
        "house": null,
        "associated_groups": ["Africa"],
        "books_featured_in": [1]
      },
    ]
    const resultadoEsperado = [
      {
        "id": 1,
        "name": "Euan Abercrombie",
        "birth": "between 1 September 1983 and 31 August 1984",
        "death": null,
        "species": "Human",
        "ancestry": null,
        "gender": "Male",
        "hair_color": null,
        "wand": null,
        "patronus": null,
        "house": "Gryffindor",
        "associated_groups": ["Hogwarts School of Witchcraft and Wizardry", "Gryffindor"],
        "books_featured_in": [5],
        "eye_color": null,
      },
    ]
    const resultadoRecibido = housesFilter(muestra, "Gryffindor")
    expect(resultadoRecibido).toEqual(resultadoEsperado)
  })
  it("Ravenclaw", () => {
    const muestra2 = [
      {
        "id": 1,
        "name": "Euan Abercrombie",
        "birth": "between 1 September 1983 and 31 August 1984",
        "death": null,
        "species": "Human",
        "ancestry": null,
        "gender": "Male",
        "hair_color": null,
        "eye_color": null,
        "wand": null,
        "patronus": null,
        "house": "Gryffindor",
        "associated_groups": ["Hogwarts School of Witchcraft and Wizardry", "Gryffindor"],
        "books_featured_in": [5]
      },
      {
        "id": 2,
        "name": "Stewart Ackerley",
        "birth": "between 1 September 1982and 31 August 1983",
        "death": null,
        "species": "Human",
        "ancestry": null,
        "gender": "Male",
        "hair_color": null,
        "eye_color": null,
        "wand": null,
        "patronus": null,
        "house": "Ravenclaw",
        "associated_groups": [],
        "books_featured_in": [4]
      },
      {
        "id": 3,
        "name": "African prince",
        "birth": null,
        "death": null,
        "species": "Human",
        "ancestry": "Muggle-born or half-blood (possibly)",
        "gender": "Male",
        "hair_color": null,
        "eye_color": null,
        "wand": null,
        "patronus": null,
        "house": null,
        "associated_groups": ["Africa"],
        "books_featured_in": [1]
      },
    ]
    const resultadoEsperado2 = [
      {
        "id": 2,
        "name": "Stewart Ackerley",
        "birth": "between 1 September 1982and 31 August 1983",
        "death": null,
        "species": "Human",
        "ancestry": null,
        "gender": "Male",
        "hair_color": null,
        "eye_color": null,
        "wand": null,
        "patronus": null,
        "house": "Ravenclaw",
        "associated_groups": [],
        "books_featured_in": [4]
      },
    ]
    const resultadoRecibido2 = housesFilter(muestra2, "Ravenclaw")
    expect(resultadoRecibido2).toEqual(resultadoEsperado2)
  })
})

describe("prueba filtro genero", () => {
  it("Male", () => {
    const muestra3 = [
      {
        "id": 1,
        "name": "Euan Abercrombie",
        "birth": "between 1 September 1983 and 31 August 1984",
        "death": null,
        "species": "Human",
        "ancestry": null,
        "gender": "Male",
        "hair_color": null,
        "eye_color": null,
        "wand": null,
        "patronus": null,
        "house": "Gryffindor",
        "associated_groups": ["Hogwarts School of Witchcraft and Wizardry", "Gryffindor"],
        "books_featured_in": [5]
      },
      {
        "id": 2,
        "name": "Stewart Ackerley",
        "birth": "between 1 September 1982and 31 August 1983",
        "death": null,
        "species": "Human",
        "ancestry": null,
        "gender": "Male",
        "hair_color": null,
        "eye_color": null,
        "wand": null,
        "patronus": null,
        "house": "Ravenclaw",
        "associated_groups": [],
        "books_featured_in": [4]
      },
      {
        "id": 497,
        "name": "Hannah Abbott's mother",
        "birth": null,
        "death": "Autumn 1996",
        "species": "Human",
        "ancestry": null,
        "gender": "Female",
        "hair_color": null,
        "eye_color": null,
        "wand": null,
        "patronus": null,
        "house": null,
        "associated_groups": ["Abbott family"],
        "books_featured_in": [6]
      },

    ]
    const resultadoEsperado3 = [
      {
        "id": 1,
        "name": "Euan Abercrombie",
        "birth": "between 1 September 1983 and 31 August 1984",
        "death": null,
        "species": "Human",
        "ancestry": null,
        "gender": "Male",
        "hair_color": null,
        "eye_color": null,
        "wand": null,
        "patronus": null,
        "house": "Gryffindor",
        "associated_groups": ["Hogwarts School of Witchcraft and Wizardry", "Gryffindor"],
        "books_featured_in": [5]
      },
      {
        "id": 2,
        "name": "Stewart Ackerley",
        "birth": "between 1 September 1982and 31 August 1983",
        "death": null,
        "species": "Human",
        "ancestry": null,
        "gender": "Male",
        "hair_color": null,
        "eye_color": null,
        "wand": null,
        "patronus": null,
        "house": "Ravenclaw",
        "associated_groups": [],
        "books_featured_in": [4]
      },
    ]
    const resultadoRecibido3 = genderFilter(muestra3, "Male")
    expect(resultadoRecibido3).toEqual(resultadoEsperado3)
  })
  it("Female", () => {
    const muestra4 = [
      {
        "id": 1,
        "name": "Euan Abercrombie",
        "birth": "between 1 September 1983 and 31 August 1984",
        "death": null,
        "species": "Human",
        "ancestry": null,
        "gender": "Male",
        "hair_color": null,
        "eye_color": null,
        "wand": null,
        "patronus": null,
        "house": "Gryffindor",
        "associated_groups": ["Hogwarts School of Witchcraft and Wizardry", "Gryffindor"],
        "books_featured_in": [5]
      },
      {
        "id": 2,
        "name": "Stewart Ackerley",
        "birth": "between 1 September 1982and 31 August 1983",
        "death": null,
        "species": "Human",
        "ancestry": null,
        "gender": "Male",
        "hair_color": null,
        "eye_color": null,
        "wand": null,
        "patronus": null,
        "house": "Ravenclaw",
        "associated_groups": [],
        "books_featured_in": [4]
      },
      {
        "id": 497,
        "name": "Hannah Abbott's mother",
        "birth": null,
        "death": "Autumn 1996",
        "species": "Human",
        "ancestry": null,
        "gender": "Female",
        "hair_color": null,
        "eye_color": null,
        "wand": null,
        "patronus": null,
        "house": null,
        "associated_groups": ["Abbott family"],
        "books_featured_in": [6]
      },
    ]
    const resultadoEsperado4 = [
      {
        "id": 497,
        "name": "Hannah Abbott's mother",
        "birth": null,
        "death": "Autumn 1996",
        "species": "Human",
        "ancestry": null,
        "gender": "Female",
        "hair_color": null,
        "eye_color": null,
        "wand": null,
        "patronus": null,
        "house": null,
        "associated_groups": ["Abbott family"],
        "books_featured_in": [6]
      },
    ]
    const resultadoRecibido4 = genderFilter(muestra4, "Female")
    expect(resultadoRecibido4).toEqual(resultadoEsperado4)
  })
})













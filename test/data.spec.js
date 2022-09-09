import { countryFilter } from '../src/data.js';




describe( "Text de filtro pais", () => {
  it("Germany", () => {
    const muestras = 
    [ 
      {
        "name": "Simone Facey",
        "gender": "F",
        "height": "162",
        "weight": "53",
        "sport": "Athletics",
        "team": "Jamaica",
        "noc": "JAM",
        "age": 31,
        "event": "Athletics Women's 4 x 100 metres Relay",
        "medal": "Silver"
      },
      {
        "name": "Fan Yilin",
        "gender": "F",
        "height": "148",
        "weight": "37",
        "sport": "Gymnastics",
        "team": "China",
        "noc": "CHN",
        "age": 16,
        "event": "Gymnastics Women's Team All-Around",
        "medal": "Bronze"
      },
      {
        "name": "Steffen Fth",
        "gender": "M",
        "height": "199",
        "weight": "97",
        "sport": "Handball",
        "team": "Germany",
        "noc": "GER",
        "age": 26,
        "event": "Handball Men's Handball",
        "medal": "Bronze"
      }];

    const resultadoEsperado = [{
      "name": "Steffen Fth",
      "gender": "M",
      "height": "199",
      "weight": "97",
      "sport": "Handball",
      "team": "Germany",
      "noc": "GER",
      "age": 26,
      "event": "Handball Men's Handball",
      "medal": "Bronze"
    } ];
    const resultadoRe = countryFilter( muestras, "Germany" );
    expect( resultadoRe).toBe(resultadoEsperado);
  })
});
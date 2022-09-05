import { objetAthletes } from "../src/data.js";

describe("objetAthletes", () => {
  it("debería ser un objeto", () => {
    expect(typeof objetAthletes).toBe("object");
  });

  describe("objetAthletes.filterData", () => {
    it("debería ser una función", () => {
      expect(typeof objetAthletes.filterData).toBe("function");
    });
    // let testFilter = objetAthletes.filterData(data, 'sport', 'Taekwondo')

    const mockData = {
      athletes: [
        {
          name: "Giovanni Abagnale",
          sport: "Rowing",
        },
        {
          name: "Patimat Abakarova",
          sport: "Taekwondo",
        },
      ],
    };

    it("debería retornar un arreglo", () => {
      expect(
        objetAthletes.filterData(mockData, "sport", "Taekwondo")
      ).toStrictEqual([
        {
          name: "Patimat Abakarova",
          sport: "Taekwondo",
        },
      ]);
    });

    it("debería retornar un arreglo vacio", () => {
      expect(
        objetAthletes.filterData(mockData, "medal", "Golde")
      ).toStrictEqual([]);
    });
  });

  describe("objetAthletes.orderData", () => {
    it("debería ser una función", () => {
      expect(typeof objetAthletes.orderData).toBe("function");
    });

    const mockData = {
      athletes: [
        {
          name: "Florin Mergea",
          sport: "Tennis",
          team: "Romania",
        },
        {
          name: "Loredana Dinu (Iordchioiu-)",
          sport: "Fencing",
          team: "Romania",
        },
        {
          name: "Adelina Maria Cojocariu-Bogus",
          sport: "Rowing",
          team: "Romania",
        },
      ],
    };
    let resultAll = objetAthletes.filterData(mockData, "team", "Romania");
    let testOrder = objetAthletes.orderData(resultAll);

    it("debería retornar el primer nombre de la función ordenar de la A-Z", () => {
      expect(testOrder[0].name).toBe("Adelina Maria Cojocariu-Bogus");
    });
  });

  describe("objetAthletes.calcular", () => {
    it("debería ser una función", () => {
      expect(typeof objetAthletes.calcularData).toBe("function");
    });
    const mockData =  [
        {
          name: 'Penelope "Penny" Oleksiak',
          sport: "Swimming",
          event: "Swimming Women's 100 metres Butterfly",
          medal: "Silver",
        },
        {
          "name": "Penelope \"Penny\" Oleksiak",
          "sport": "Swimming",
          "team": "Canada",
          "event": "Swimming Women's 100 metres Freestyle",
          "medal": "Gold"
        },
        {
          "name": "Penelope \"Penny\" Oleksiak",
          "sport": "Swimming",
          "team": "Canada",
          "event": "Swimming Women's 4 x 100 metres Freestyle Relay",
          "medal": "Bronze"
        },

        {
          "name": "Tijana Maleevi",
          "sport": "Volleyball",
          "team": "Serbia",
          "event": "Volleyball Women's Volleyball",
          "medal": "Silver"
        },
      ];


    it("debería retornar atleta con mayor cantidad de medalla", () => {
      expect(
         objetAthletes.maxWinner(mockData)).toStrictEqual("Penelope \"Penny\" Oleksiak");
    });
  });

  describe("objetAthletes.porcentaje", () => {
    it("debería ser una función", () => {
      expect(typeof objetAthletes.porcentaje).toBe("function");
    });
  

  const primerNumero= 36;
  const segundoNumero= 66;

  it("debería devolver el porcentaje", () => {
    expect(objetAthletes.porcentaje(segundoNumero, primerNumero)).toStrictEqual(55);
  })

})
});

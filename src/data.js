const objetAthletes = {
  filterData: function (data, tipofiltro, valor) {
    //  console.log(valor);

    let filtrado = [];

    if (data.athletes) {
      data.athletes.forEach((atleta) => {
        if (atleta[tipofiltro] == valor) {
          filtrado.push(atleta);
        }
      });
    } else {
      data.forEach((atleta) => {
        if (atleta[tipofiltro] == valor) {
          filtrado.push(atleta);
        }
      });
    }

    return filtrado;
  },
  orderData: function (data) {
    const compare = (a, b) => {
      if (a.name > b.name) {
        return 1;
      }
      if (a.name < b.name) {
        return -1;
      }
    };

    return data.sort(compare);
  },

  calcularData: function (data) {
    let elementos = [];

    let jsonNew = {
      name: "",
      team: "",
      sport: "",
      Gold: "",
      Silver: "",
      Bronze: "",
    };

    let gold = 0;
    let silver = 0;
    let bronze = 0;

    for (let i = 0; i < data.length; i++) {
      if (data[i].medal == "Gold") {
        gold++;
      } else if (data[i].medal == "Silver") {
        silver++;
      } else {
        bronze++;
      }
      if (i + 1 !== data.length) {
        console.log(data[i + 1].name, data[i]);
        if (data[i + 1].name !== data[i].name) {
          jsonNew = {
            name: data[i].name,
            sport: data[i].sport,
            team: data[i].team,
            Gold: gold,
            Silver: silver,
            Bronze: bronze,
          };

          elementos.push(jsonNew);

          gold = 0;
          silver = 0;
          bronze = 0;
        }
      } else {
        jsonNew = {
          name: data[i].name,
          sport: data[i].sport,
          team: data[i].team,
          Gold: gold,
          Silver: silver,
          Bronze: bronze,
        };
        elementos.push(jsonNew);
      }
    }
    elementos.sort((a, b) => b.Gold - a.Gold);
    elementos.sort((a, b) => b.Silver - a.Silver);
    elementos.sort((a, b) => b.Bronze - a.Bronze);

    console.log(elementos);
    return elementos;
  },

  maxWinner: function (data) {
    let resultado = this.calcularData(data);
    return resultado[0].name;
  },


};

export { objetAthletes };

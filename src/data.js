export const mostrarData = (datos) => {
    const data = datos["athletes"].map(elemento => elemento.name);
    return data;
}

export const mostrarEdad = (datos) => {
    const edad = datos["athletes"].map(elemento => elemento.age);
    return edad;
}

export const dataAtletas = (datos) => {
    const atletas = datos["athletes"].map(elemento => elemento);
    return atletas;
}

//ordenarlos en orden alfabetico A-Z
export const ordenarNombres= (datos) => {
    return datos.sort( (a, b) =>{
          if (a.name.toLowerCase() == b.name.toLowerCase()){
              return 0;
          }
          if (a.name < b.name){
              return -1;
          }
            return 1;
        })    
          
  }

  //descendente Z-A
  export const ordenarNombresZa= (datos) => {
    return datos.datos.reverse();
          
  }


//datos = datos.reverse();





export const ordenarEdad = (datos) => {
    datos.sort( (a, b) =>{
        if (a.age == b.age){
            return 0;
        }
        if (a.age < b.age){
            return -1;
        }
        return 1;
    });
}
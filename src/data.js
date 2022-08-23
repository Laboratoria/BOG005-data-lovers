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

//ordenarlos en orden alfabetico
export const ordenarNombres= (datos) => {
    datos.sort( (a, b) =>{
        if (a == b){
            return 0;
        }
        if (a < b){
            return -1;
        }
        return 1;
})
}

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
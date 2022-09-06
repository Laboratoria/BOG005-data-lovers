export function orderNameAZ(prop){
    if(!prop){
        throw new Error()
    }
    return function(a,b){
        if(a[prop] >b [prop]){
            return 1;
        }
        else if(a[prop] <b[prop]){
            return -1;
        }
        return 0;
    }
}
export function orderNameZA(prop){
    if(!prop){
        throw new Error()
    }
    return function (a,b){
        if(a[prop] <b[prop]){
            return 1;
        }
        else if(a[prop] >b[prop]){
            return -1;
        }
        return 0;
    }
}

export const housesFilter = (characters, option) => {
	const dataFiltrada = characters.filter(element => element.house === option)
		return dataFiltrada;
}

  

export const genderFilter =  (characters, option) => {
    const dataFiltrada2 = characters.filter(element => element.gender === option)
    return dataFiltrada2;
}
function calcularTemperatura (temMax, temMin){
    return (temMax + temMin) / 2
}

let temperaturaPromedio = calcularTemperatura(30 , 13)
console.log(`La temperatura media fue de ${temperaturaPromedio}`)
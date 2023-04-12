let calcularDistancia = (x1, y1, x2, y2) =>{
    Math.sqrt(Math.pow(x2-x1, 2) + Math.pow(y2-y1, 2)).toFixed(2)
}

let medirDistancia = calcularDistancia(23, 4, 56, 7)
console.log(`La distancia calculada fue de ${medirDistancia} UA`)
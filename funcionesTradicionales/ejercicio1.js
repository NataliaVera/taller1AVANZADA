function calcularDistancia(x1, y1, x2, y2){
    return Math.sqrt(Math.pow(x2-x1, 2) + Math.pow(y2-y1, 2)).toFixed(2)
 
 }
 
 let distanciaCalculada = calcularDistancia(20,15,6,3)
 
 console.log(`La distacia calculada fue de ${distanciaCalculada} UA`)
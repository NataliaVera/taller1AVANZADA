let numeros = []

function obtenerNumeros(min, max) {

    for(i = 0; i <50; i++){
        numeros.push (Math.floor(Math.random() * (min - max) + max))
    }
}

obtenerNumeros(-200,100)

let nMenor  = Math.abs(numeros[0])

for(i = 1; i < 49; i++){
    if ( nMenor > Math.abs(numeros[i])){
        nMenor = Math.abs(numeros[i])
    }
}

console.log(`El numero menor: ${nMenor}`)
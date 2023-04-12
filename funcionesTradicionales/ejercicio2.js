let naves = [
    {
        clave:'ARQ2555',
        nombrePiloto: 'Sara Bel-Sun',
    },
    {
        clave:'ARQ2556',
        nombrePiloto: 'Nodin Chavdri',
    },
    {
        clave:'ARQ2557:',
        nombrePiloto: 'Finn',
    }
]

let buscar = naves.map(function(nave){
    return nave.nombrePiloto == ''
})

console.log(buscar)
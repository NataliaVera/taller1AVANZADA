let edades = [];
let codigos = [];

function aleatorios() {
    const random = "qwertyrtyuiopasdfghjklñzxcvbnm1234567890"
    let resultado = ""
    for (let i = 0; i < 5; i++){
        const index = Math.floor(Math.random() * random.length)
        resultado += random[index]
    }
    return resultado;
}


for (let i =0;i< 20; i++) {
    edades.push(Math.floor(Math.random() *100));
    console.log(generarCodigos())
}
let mayor = edades[0]
let repetido = 0

for (let i =1; i< edades.length; i++) {
    if(edades[i]> mayor){
        mayor = edades[i]
    }else if(edades[i] === mayor){
        repetido++;
    } 
}

console.log(`Edades aleatorias: ${edad}`);
console.log(`Códigos aleatorios: ${codigos}`);
console.log(`La edad mayor es: ${mayor} 
Número de veces que se repite: ${repetido}`)
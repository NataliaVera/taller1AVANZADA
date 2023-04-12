let edad = [];
let codigo = [];

const aleatorios = () => {
  const random = "qwertyrtyuiopasdfghjklñzxcvbnm1234567890";
  let codigos = "";
  for (let i = 0; i < 5; i++) {
    const index = Math.floor(Math.random() * random.length);
    codigos += random[index];
  }
  return codigos;
};

for (let i = 0; i < 20; i++) {
  edad.push(Math.floor(Math.random() * 100));
  console.log(aleatorios());
}

let mayor = edad[0];
let repetido = 0;

for (let i = 1; i < edad.length; i++) {
  if (edad[i] > mayor) {
    mayor = edad[i];
  } else if (edad[i] === mayor) {
    repetido++;
  }
}

console.log(`Edades aleatorias: ${edad}`);
console.log(`Códigos aleatorios: ${codigo}`);
console.log(`La edad mayor es: ${mayor} 
Número de veces que se repite: ${repetido}`)
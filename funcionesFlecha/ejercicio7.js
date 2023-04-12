let num = [];

const obtenerNumeros = (Min, Max) => {
  for(let i = 0; i < 50; i++){
    num.push(Math.floor(Math.random() * (Min - Max) + Max));
  }
}

obtenerNumeros(-30, 60);

let nMenor  = Math.abs(num[0]);

for(let i = 1; i < 49; i++){
  if (nMenor > Math.abs(num[i])){
    nMenor = Math.abs(num[i]);
  }
}

console.log(`El numero menor: ${nMenor}`);
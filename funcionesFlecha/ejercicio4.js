const totalSables = [0, 12, 3, 12, -9, -11, 3, -5, 10, 4, -10, -7];

const sablesPositivos = [];
const sablesNegativos = [];

const calcularCantidadSables = () => {
  totalSables.forEach(sable => {
    sable >= 0 ? sablesPositivos.push(sable) : sablesNegativos.push(sable);
  });
  
  return `Cantidad de total de sables: ${totalSables.length}
    Cantidad de sables positivos: ${sablesPositivos.length} sables positivos: ${sablesPositivos.sort()}
    Cantidad de sables negativos: ${sablesNegativos.length} sables negativos: ${sablesNegativos.sort()}`
}

console.log(calcularCantidadSables());
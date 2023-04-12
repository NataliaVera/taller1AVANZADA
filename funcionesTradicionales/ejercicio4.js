const totalSables = [-11, 2, -8, 12, -6, -11, 4, 0, -4, 0, -6, 5];

const sablesPositivos = [];
const sablesNegativos = [];

function calcularCantidadSables(){
	totalSables.forEach(sable => {
		sable >= 0 ? sablesPositivos.push(sable) :sablesNegativos.push(sable); 
})
	return `Cantidad de total de sables: ${totalSables.length}
    Cantidad de sables positivos: ${sablesPositivos.length} sables positivos: ${sablesPositivos.sort()}
    Cantidad de sables negativos: ${sablesNegativos.length} sables negativos: ${sablesNegativos.sort()}`
}
console.log(calcularCantidadSables())
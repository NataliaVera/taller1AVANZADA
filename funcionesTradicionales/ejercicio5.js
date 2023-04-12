let sBruto, deducciones, sNeto, comision

function calcularSalario(nVentas, sMensual) {
    comision = nVentas * 1500000
    sBruto = sMensual + comision
    deducciones = sBruto * 0.05
    sNeto = sBruto - deducciones
    return `Salario Mensual: ${sMensual} 
    Total comisiones: ${comision} 
    Deducciones: ${deducciones} 
    Salario Neto: ${sNeto}`
}

console.log(calcularSalario(12, 3500000))
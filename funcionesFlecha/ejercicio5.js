let sBruto, deducciones, sNeto, comision;

const calcularSalario = (nVentas, sMensual) => {
    comision = nVentas * 3500000;
    sBruto = sMensual + comision;
    deducciones = sBruto * 0.05;
    sNeto = sBruto - deducciones;
    return `Salario Mensual: ${sMensual} 
    Total comisiones: ${comision} 
    Deducciones: ${deducciones} 
    Salario Neto: ${sNeto}`;
}

console.log(calcularSalario(0, 4000000));
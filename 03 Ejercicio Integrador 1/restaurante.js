var entrada = parseInt(prompt("Ingrese monto de la entrada: "));
var segundo = parseInt(prompt("Ingrese monto del segundo plato: "));
var postre = parseInt(prompt("Ingrese monto del postre: "));
var parcial = entrada + segundo + postre;
var igv = parcial * 18 / 100;
var total = parcial + igv;

console.log("Monto de la entrada: "+entrada);
console.log("Monto del segundo plato: "+segundo);
console.log("Monto del postre: "+postre);
console.log("Total sin IGV: "+parcial);
console.log("Total Final: "+total);
const javascript1 = ["DOM", "BOM", "Funciones", "Arrays"];

javascript1.shift();
javascript1.unshift("Objetos");
javascript1.splice(javascript1.indexOf("Arrays"), 1, "ArraysDifíciles");

const copiaUltimosDos = javascript1.slice(-2);
const indiceFunciones = javascript1.indexOf("Funciones");

console.log(javascript1);
console.log(copiaUltimosDos);
console.log(indiceFunciones);

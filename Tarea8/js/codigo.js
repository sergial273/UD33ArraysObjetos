const javascript1 = ["DOM", "BOM", "Funciones", "Arrays"];
const javascript2 = ["Objetos", "Arrays", "ParseInt"];

function elementosRepetidos(arr1, arr2) {
  const repetidos = arr1.filter(elemento => arr2.includes(elemento));
  console.log(repetidos);
}

elementosRepetidos(javascript1, javascript2);

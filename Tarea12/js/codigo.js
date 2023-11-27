const objetos = [
  { propiedad1: "valor1", propiedad2: "valor2", propiedad3: "valor3" },
  { propiedad1: "valor4", propiedad2: "valor5", propiedad3: "valor6" },
  { propiedad1: "valor7", propiedad2: "valor8", propiedad3: "valor9" },
];

function imprimirPropiedad(propiedad) {
  objetos.forEach(objeto => console.log(objeto[propiedad]));
}

imprimirPropiedad("propiedad2");

const receta1 = {
  nombre: "Tarta de Manzana",
  tiempo: "1 hora",
  ingredientes: ["manzanas", "azúcar", "harina", "canela"],
};

const receta2 = {
  nombre: "Tarta de Manzana",
  tiempo: "1 hora",
  ingredientes: ["manzanas", "azúcar", "harina", "canela"],
};

const receta3 = {
  nombre: "Tarta de Manzana",
  tiempo: "1 hora",
  ingredientes: ["manzanas", "azúcar", "harina", "canela"],
};

const recetas = [receta1, receta2, receta3];

function imprimirReceta({ nombre, tiempo, ingredientes }) {
  console.log(`Nombre: ${nombre}`);
  console.log(`Tiempo: ${tiempo}`);
  console.log("Ingredientes:");
  ingredientes.forEach(ingrediente => console.log(ingrediente));
}


function imprimirTodasLasRecetas(arrayDeRecetas) {
  arrayDeRecetas.forEach(imprimirReceta);
}

imprimirTodasLasRecetas(recetas);
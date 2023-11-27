const receta = {
  nombre: "Tarta de Manzana",
  tiempo: "1 hora",
  ingredientes: ["manzanas", "azúcar", "harina", "canela"],
};

function imprimirReceta({ nombre, tiempo, ingredientes }) {
  console.log(`Nombre: ${nombre}`);
  console.log(`Tiempo: ${tiempo}`);
  console.log("Ingredientes:");
  ingredientes.forEach(ingrediente => console.log(ingrediente));
}

imprimirReceta(receta);

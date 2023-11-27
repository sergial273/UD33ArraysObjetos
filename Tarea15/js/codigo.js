class Receta {
  constructor(nombre, tiempo, ingredientes) {
    this.nombre = nombre;
    this.tiempo = tiempo;
    this.ingredientes = ingredientes;
  }
}

function imprimirReceta({ nombre, tiempo, ingredientes }) {
  console.log(`Nombre: ${nombre}`);
  console.log(`Tiempo: ${tiempo}`);
  console.log("Ingredientes:");
  ingredientes.forEach(ingrediente => console.log(ingrediente));
}

function imprimirTodasLasRecetas(arrayDeRecetas) {
  arrayDeRecetas.forEach(imprimirReceta);
}

const receta1 = new Receta("Tarta de Manzana", "1 hora", ["manzanas", "azucar", "harina", "canela"]);
const receta2 = new Receta("Tarta de Manzana", "1 hora", ["manzanas", "azucar", "harina", "canela"]);
const receta3 = new Receta("Tarta de Manzana", "1 hora", ["manzanas", "azúcar", "harina", "canela"]);

const recetas = [receta1, receta2, receta3];

imprimirTodasLasRecetas(recetas);


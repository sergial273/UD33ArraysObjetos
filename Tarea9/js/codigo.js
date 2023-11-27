const nombres = ["Juan", "María", "Carlos", "Laura", "Pedro"];
const [ganador, segundo, ...resto] = nombres;

console.log(`Ganador: ${ganador}`);
console.log(`Segundo: ${segundo}`);
console.log(`Resto de competidores: ${resto}`);

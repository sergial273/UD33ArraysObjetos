const persona = {
  nombre: "nombre",
  apellidos: "apellido",
  edad: 30,
  direccion: "calle",
  ciudad: "ciudad",
  pais: "pais",
};

function nombreCompleto({ nombre, apellidos }) {
  console.log(`${nombre} ${apellidos}`);
}

nombreCompleto(persona);

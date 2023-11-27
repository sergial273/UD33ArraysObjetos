const arrayLetras = ["A", "B", "C", "D", "E", "F", "G", "H", "I"];

function longitudArray(arr) {
  console.log(arr.length);
}

function elementoAleatorio(arr) {
  const randomIndex = Math.floor(Math.random() * arr.length);
  console.log(arr[randomIndex]);
}

longitudArray(arrayLetras);
elementoAleatorio(arrayLetras);

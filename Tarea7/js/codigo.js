const numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

function mayoresQueCinco(arr) {
  const result = arr.filter(num => num > 5);
  console.log(result);
}

mayoresQueCinco(numeros);

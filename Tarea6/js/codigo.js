const numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

function separarParesImpares(arr) {
  const pares = arr.filter(num => num % 2 === 0);
  const impares = arr.filter(num => num % 2 !== 0);

  console.log([...pares, ...impares]);
}

separarParesImpares(numeros);

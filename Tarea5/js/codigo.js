const arrayUno = [1, 2, 3];
const arrayDos = [4, 5, 6];

function intercalarArrays(arr1, arr2) {
  const resultado = [];

  for (let i = 0; i < arr1.length; i++) {
    resultado.push(arr1[i], arr2[i]);
  }

  arr1.length = 0;
  arr2.length = 0;

  return resultado;
}

console.log(intercalarArrays(arrayUno, arrayDos));

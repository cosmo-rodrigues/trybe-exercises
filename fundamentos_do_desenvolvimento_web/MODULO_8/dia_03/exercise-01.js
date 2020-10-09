// 1 - Dada uma matriz de matrizes, transforme em uma única matriz.
    
const assert = require('assert');

const arrays = [
    ["1", "2", "3"],
    [true],
    [4, 5, 6]
];


function flatten() {
  // escreva seu código aqui
  // outra maneira de se fazer
  // return arrays.reduce((acc,element) => acc.concat(element));
  return arrays.flat();
}

assert.deepEqual(flatten(), ["1", "2", "3", true, 4, 5, 6]);
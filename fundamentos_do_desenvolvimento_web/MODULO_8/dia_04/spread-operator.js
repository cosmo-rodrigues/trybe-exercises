// Spread significa espalhar, ou seja, este operador é usado para ‘espalhar’ os elementos de um array quando interpretado em tempo de execução.
const arr1 = ['JAN', 'FEB', 'MAR', 'APR', 'MAY'];
let arr2;
// Fazer uma cópia de array.
arr2 = [...arr1];

console.log(arr2);

// Concatenar arrays:
const partes = ['ombros, ', 'joelho, '];
let letra = ['cabeca, ', ...partes, 'e ', 'pé'];
console.log(letra);
// Espalahar os elementos do array:
console.log(...letra);
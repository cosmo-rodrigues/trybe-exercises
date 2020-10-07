// O every verifica se TODOS os elementos de um array passam por
// um teste epecífico, retornando true ou false.
// Ex.: 01 - Verificar se todos os elementos são maiores que 10
const array = [ 1, 2, 3, 4, 5, 6 ];
console.log('Tdos são maiores que 10?', array.every (number => number > 10));

const newArray = [ 11, 12, 13, 14, 15, 16 ];
console.log('Tdos são maiores que 10?', newArray.every (number => number > 10));

// Ex.: 02 - Todos saõ maiores de idade?
const tchurma = [
  { id: 1, name: 'Antônia', age: 23 },
  { id: 2, name: 'Claudia', age: 19 },
  { id: 3, name: 'Eduardo', age: 35 },
  { id: 4, name: 'Dagoberto', age: 42 },
  { id: 5, name: 'Paulo', age: 50 }
];

console.log('Todos saõ maiores de idade?', tchurma.every(idade => idade.age >= 18));
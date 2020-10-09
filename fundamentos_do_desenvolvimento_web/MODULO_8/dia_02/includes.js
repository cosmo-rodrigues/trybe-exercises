// O includes é utilizada pra saber se um array ou objeto ossue determinado elemento. Seu retorno é um booleano.
const tchurma = [
  { id: 1, name: 'Antônia', age: 23 },
  { id: 2, name: 'Claudia', age: 19 },
  { id: 3, name: 'Eduardo', age: 35 },
  { id: 4, name: 'Dagoberto', age: 42 },
  { id: 5, name: 'Paulo', age: 50 }
];
// Ex.: verificar se existe determinada pessoa.
console.log(tchurma.filter(pessoa => pessoa.name.includes('Claudia')))

const numbers = [1,2,3,4,5,6,7,8,9];
console.log(numbers.includes(2));
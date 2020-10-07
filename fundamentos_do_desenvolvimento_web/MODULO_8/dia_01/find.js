// o find() retorna o primeiro elemento econtrado que atenda a
// condição especificada, independente de hever outros com as
// mesmas caracteristicas e/ou condição
//Ex.: 01
const pizzas = [
  'mussarela',
  'calabresas',
  'marguerita',
  'portuguesa'
];

const encontrarPizza = pizzas.find(element => element.startsWith('ca'));

console.log(encontrarPizza);

// Ex.: 02
const fruits = [
  { name: 'jaca', quantity: 2 },
  { name: 'banana', quantity: 10 },
  { name: 'cereja', quantity: 3 },
  { name: 'melão', quantity: 5 }
];

const foundFruit = fruits.find(element => element.name === 'cereja');

console.log(foundFruit);
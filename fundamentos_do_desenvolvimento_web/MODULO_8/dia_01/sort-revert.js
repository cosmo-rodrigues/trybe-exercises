// O método sort() classifica os elementos de um array em ordem alfabética
// crescente, mas também pode ser utilizada para ordenar números.
const fruits = [ 'banana', 'maça', 'laranja', 'caju', 'uva', 'pêra'];
console.log(fruits.sort());
// Exixte um parâmetro nativo para este metodo que que permite que ele
// seja utilizado com números.

const numbers = [ 4, 7, 12, 67, 11, 78, 89, 46, 32 ];

const reorder = numbers.sort((a,b) => a - b);
console.log(reorder);

const inverter = numbers.sort((a,b) => b - a);
console.log(inverter);

// O método reverse() classifica os elementos de um array em ordem
// alfabética decrescente, mas também pode ser utilizada para ordenar números.
console.log(fruits.reverse());
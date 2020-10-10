// A abreviação de propriedades trata da remoção de duplicações.
// Digamos que temos duas variáveis: name e age.

const name = "Luke";  
const age = 24;  

// Agora, se quisermos atribuir essas variáveis ​​às propriedades do objeto com nomes idênticos, teríamos que repetir tanto para a propriedade para dar o nome quanto para o valor para se referir à nossa variável.
// {
//  name: name,
//  age: age
// }

// Esta repetição de name e age parece um pouco desnecessária, certo? Bem, por isso que ES6 criou abbreviation object literal.

// {
//  name,
//  age
// }

var getLo = () => "lo";

var obj = {};  
obj[ "hel" + getLo() ] = "world";// Os colchetes criam uma nova chave para o objeto obj, e adicionamos 'world' como valor;
console.log (obj); // { hello: 'world' }

let obj2 = {  
  [ "hel" + getLo() ]: "world"
} // Atribuimos o parêmetro como chave direto dentro do objeto e o valor 'world';
console.log (obj2);

// Use object property shorthand with object literals to create and return an object with name, age and gender properties.
const createPerson = (name, age, gender) => {
  "use strict";
  // Only change code below this line
  return {
    name,
    age,
    gender
  };
  // Only change code above this line
};
console.log(createPerson('Cosmo',29,'Masculino'));
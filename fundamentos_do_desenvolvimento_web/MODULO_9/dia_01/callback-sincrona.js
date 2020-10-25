// Ex.: 01
let salarioBruto = 3000;
let salarioLiquido;

function getSalario(salarioBruto, callback) {
  let liquido = 0;
  const inss = salarioBruto * 0.11;
  const vr = salarioBruto * 0.05;
  const vt = salarioBruto * 0.06;
  const fgts = salarioBruto * 0.15;
  const descontos = inss + vr + vt + fgts;
  liquido = salarioBruto - descontos;
  return callback(liquido);
}

getSalario(salarioBruto, (resultado) => {
    salarioLiquido = resultado;
    console.log(`O salário liquido é R$${salarioLiquido}`);
});

// Lets pratice
// 1 - No código abaixo você tem a função getUser, que retorna uma pessoa qualquer. Complete a função getUser de forma que ela receba uma outra função como parâmetro para que possa realizar as operações abaixo sobre a pessoa retornada.
const assert = require('assert');

const userFullName = ({ firstName, lastName }) => `Hello! My name is ${firstName} ${lastName}`;
const userNationality = ({ firstName, nationality }) => `${firstName} is ${nationality}`;

const getUser = callback => {
  const userToReturn = {
    firstName: "Ivan",
    lastName: "Ivanovich",
    nationality: "Russian"
  };
  return callback(userToReturn);
};

assert.equal(getUser(userFullName), "Hello! My name is Ivan Ivanovich"); // complete a chamada da função de getUser
assert.equal(getUser(userNationality), "Ivan is Russian"); // complete a chamada da função de getUser

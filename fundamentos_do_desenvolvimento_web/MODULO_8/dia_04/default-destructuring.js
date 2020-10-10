// Atribuição de um valor padrão para algum parâmentro que não seja encontrado dentro da decontrução:
const person = {
  name: "João",
  lastName: "Jr",
  age: 34
}

const { nationality } = person;
console.log(nationality); // undefined

// Como resolver?
const person2 = {
  name: "João",
  lastName: "Jr",
  age: 34
}

const { nationality2 = "Brazilian" } = person2;
console.log(nationality2) // Brazilian

// Analogamente, o mesmo pode ser feito na hora de desestruturar um array:
const position2d = [1.0, 2.0]
const [x, y, z = 0] = position2d

console.log(z) // 0

// Exercício de fixação:

const nationality3 = ({ firstName, nationality = 'Brazilian' }) => `${firstName} is ${nationality}`

const person3 = {
    firstName: "João",
    lastName: "Jr II"
}

const otherPerson = {
    firstName: "Ivan",
    lastName: "Ivanovich",
    nationality: "Russian"
}

console.log(nationality3(otherPerson)) // Ivan is Russian
console.log(nationality3(person3)) // João is Brazilian após a definição do default params.
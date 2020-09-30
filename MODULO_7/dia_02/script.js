// Set the playerNumber variable to 16. Then, use the variable
// to look up the player's name and assign it to player.
// Setup
var testObj = {
  12: "Namath",
  16: "Montana",
  19: "Unitas"
};

// Only change code below this line
var playerNumber = 16;       // Change this line
var player = testObj[playerNumber];   // Change this line

// Update the myDog object's name property. Let's change her
// name from "Coder" to "Happy Coder". You can use either dot or
// bracket notation.
// Setup
var myDog = {
  "name": "Coder",
  "legs": 4,
  "tails": 1,
  "friends": ["freeCodeCamp Campers"]
};

// Only change code below this line
myDog.name = 'Happy Coder';

// Parte II
// Para os exercícios a seguir, use o seguinte código.

const lesson1 = {
  materia: 'Matemática',
  numeroEstudantes: 20,
  professor: 'Maria Clara',
  turno: 'manhã',
};

const lesson2 = {
  materia: 'História',
  numeroEstudantes: 20,
  professor: 'Carlos',
};

const lesson3 = {
  materia: 'Matemática',
  numeroEstudantes: 10,
  professor: 'Maria Clara',
  turno: 'noite',
};

// 1 - Crie uma função para adicionar o turno da manhã na lesson2. Essa função deve possuir três parâmetros, sendo eles: o objeto a ser modificado, a chave que deverá ser adicionada e o valor dela.

// Formal / Técnica
function teste1(object, kye, value) {
  object[kye] = value;
}
teste1(lesson2, 'turno', 'manhã');
console.table(lesson2);

// Simplificado / literal
const changeLesson2 = (object, kye, value) => object[kye] = value;
changeLesson2(lesson2, 'turno', 'manhã');
console.table(lesson2);

// 2 - Crie uma função para listar as keys de um objeto. Essa função deve receber um objeto como parâmetro.

// Formal / Técnica
function showKyes(object) {
  const newObj = Object.keys(object);
  console.log(newObj);
}
showKyes(lesson1);

// Simplificado / literal
const showKs = object => Object.keys(object);
console.log(showKs(lesson1));

// 3 - Crie uma função para mostrar o tamanho de um objeto.

// Formal / Técnica
function objectLength(object) {
  const objLenth = Object.keys(object);
  console.log(objLenth.length);
}
objectLength(lesson1);

// Simplificado / literal
const objectLth = object => Object.keys(object).length;
console.log(objectLth(lesson1));

// 4 - Crie uma função para listar os valores de um objeto. Essa função deve receber um objeto como parâmetro.

// Formal / Técnica
function showValues(object) {
  const showVl = Object.values(object);
  console.log(showVl);
}
showValues(lesson1);

// Simplificado / literal
const showVls = object => Object.values(object);
console.log(showVls(lesson1));

// 5 - Crie um objeto de nome allLessons, que deve agrupar todas as aulas através do Object.assign. Cada chave desse novo objeto será uma aula, sendo essas chaves: lesson1, lesson2 e lesson3. Ao executar o comando console.log(allLessons), a saída deverá ser a seguinte:
const allLessons = Object.assign({}, {'lesson1': lesson1}, {'lesson2': lesson2}, {'lesson3': lesson3});

console.log(allLessons);

// 6 - Usando o objeto criado no exercício 5, crie uma função que retorne o número total de estudantes em todas as aulas.
const totalStudants = () => {
  const alllessons = Object.values(allLessons);
  let somStudant = alllessons[0].numeroEstudantes + alllessons[1].numeroEstudantes + alllessons[2].numeroEstudantes;
  console.log(somStudant);
}
totalStudants();

// 7 - Crie uma função que obtenha o valor da chave de acordo com a sua posição no objeto. Por exemplo:
// Formal / Técnica
const choseValue = (object, keys) => {
  const valueArray = Object.keys(object);
  console.log(object[valueArray[keys]]);
}
choseValue(lesson1, 3)

// Simplificado / literal
const getValue = (object, keys) => console.log(Object.values(object)[keys]); 
getValue(lesson1, 0);

// 8 - Crie uma função que verifique se o par (chave / valor) existe na função. Essa função deve possuir três parâmetros, sendo eles: o objeto, o nome da chave e o valor da chave.

const verifyPair = (object, key, value) => {
  const keyPoition = Object.keys(object);
  if ((keyPoition.includes(key)) && (object[key] === value)) {
  return true;
  }
    return false;
}

console.log(verifyPair(lesson3, 'turno', 'noite'));
// Output: true,
console.log(verifyPair(lesson3, 'materia', 'Maria Clara'));
// Output: false

// BÔNUS
// 1 - Crie uma função para contar quantos estudantes assistiram às aulas de Matemática. Use o objeto criado no exercício 5.

const studantsNumber = function () {
  let discipline = '';
  let studants = 0;
  let totalStudants = 0;
  for (let count in allLessons) {
    discipline = allLessons[count].materia;
    studants = allLessons[count].numeroEstudantes;
    if (discipline === 'Matemática') {
      totalStudants += studants;
    }
  }
  return totalStudants;
}

console.log(studantsNumber());

// 2 - Crie uma função que deverá retornar um objeto que representa o relatório do professor ou professora, as aulas que ele ou ela ministrou e o número total de estudantes. Use o objeto criado no exercício 5:

const teacherReport = keyTeacher => {
  let totalDiscipline = [];
  let totalStudants = 0;
  for (let count in allLessons) {
    if (allLessons[count].professor === keyTeacher) {
      totalStudants += allLessons[count].numeroEstudantes;
      totalDiscipline.push(allLessons[count].materia);
    }
  }
  const report = {
    professor: keyTeacher,
    aulas: totalDiscipline,
    estudantes: totalStudants
  }
console.log(report);
}
teacherReport('Maria Clara');
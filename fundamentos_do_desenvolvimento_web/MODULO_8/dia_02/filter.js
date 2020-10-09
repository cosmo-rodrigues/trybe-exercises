// O filter retorna um array com TODOS os elemnetos que satisfaçam a condição pedida.
// Ex.: 01 - Filtrar pessoas aprovadas.
const listaDePessoasAprovadas = [
  { name: 'Ada Lovalace', email :'ada.lovalace@exemple.com', nota: 89 },
  { name: 'Mary Cury', email : 'mary.cury@exemple.com', nota: 55 },
  { name: 'Margaret Hamilton', email :'margaret.hamilton@exemple.com', nota: 101 },
  { name: 'Alan Turing', email :'alan.turing@exemple.com', nota: 150 },
  { name: 'João Paulo', email :'joao.paulo@exemple.com', nota: 100 },
  { name: 'Mara Maravilha', email :'mara.maravilha@exemple.com', nota: 77 },
  { name: 'Joana Dark', email :'joana.dark@exemple.com', nota: 99 },
  { name: 'Freddy Mercury', email :'freddy.mercury@exemple.com', nota: 120 },
];

const aprovedPerson = listaDePessoasAprovadas.filter(pessoas => pessoas.nota >= 100);

console.log('Nome: ',aprovedPerson[2].name, ' Nota: ',aprovedPerson[2].nota);

// Ex.: 02 - Filtrar números positivos.
const numbers = [19, 21, 30, 3, 45, 22, 15, 34, 17, 55, 78];
console.log(numbers.filter(number => number % 2 === 0));

// Ex.: 03 - Retornar apenas pessoas maiores de idade.
const objPeople = [
  { name: 'José', age: 21 },
  { name: 'Lucas', age: 19 },
  { name: 'Maria', age: 16 },
  { name: 'Gilberto', age: 18 },
  { name: 'Vitor', age: 15 },
];

console.log(objPeople.filter(pessoas => pessoas.age >= 18));

// Ex.: 03 - Remover pessoas que não fazem mais parte da turma.
const arrayMyStudents = ['Maria', 'Manuela', 'Jorge', 'Ricardo', 'Wilson', 'José', 'Thiago'];

const removePerson = (name, lista) => {
  return lista.filter(person => person !== name);
}

const newArray = removePerson('Jorge', arrayMyStudents);
console.log(newArray);

const cities = [
  { state: "AM", name: "Manaus" , region: "N" },
  { state: "PA", name: "Belém" , region: "N" },
  { state: "TO", name: "Porto Nacional" , region: "N" },
  { state: "MG", name: "Lavras" , region: "SE" },
  { state: "BA", name: "Feira de Santana" , region: "NE" },
  { state: "PR", name: "Cascavel" , region: "S" },
  { state: "SP", name: "Presidente Prudente", region: "SE" },
  { state: "RN", name: "Touros", region: "NE" },
  { state: "CE", name: "Jericoacoara", region: "NE" },
  { state: "TO", name: "Três Pedras" , region: "N" },
  { state: "MG", name: "Betim" , region: "SE" }
];

// 1. Encontre todas as cidades da região Nordeste
console.log("As cidades que ficam na região nordeste são:")
const northCities = cities.filter(cidades => cidades.region === 'N');
console.table(northCities);
// 2. Encontre todas as cidade do estado de Tocantins
console.log("As cidades do estado de Tocantins são:")
const tocantinsCities = cities.filter(cidades => cidades.state === 'TO');
console.table(tocantinsCities);
// 3. Encontre todas as cidades que comece com a letra B
console.log("As cidades que começam com a letra B são:")
const citiesStartLetter = cities.filter(cidades => cidades.name.startsWith('B'));
console.table(citiesStartLetter);
//PODE SER FEITO DESSA FORMA TAMBEM :)
const citiesThatStartWithB = cities.filter(city => city.name[0] === "B" );
console.table(citiesThatStartWithB);
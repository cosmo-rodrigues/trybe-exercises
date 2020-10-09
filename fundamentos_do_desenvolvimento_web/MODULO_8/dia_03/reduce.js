// Retorna o valor cumulativo concatenado com base em elementos de todo o array.
const rockets = [
  { country: "Russia", launches: 32 },
  { country: "US", launches: 23 },
  { country: "China", launches: 16 },
  { country: "Europe", launches: 7 },
  { country: "India", launches: 4 },
  { country: "Japan", launches: 3 }
];
// Ex.: Exibir número toral de lançamentos.
console.log(rockets.reduce((prevElement, element) => prevElement + element.launches,0));

// Ex.: 2 - Dado um array de objetos, retornar 2 objetos distintos, onde as pessoas serão separadas por idade. Um array com as pessoas maiores de idade e outro com as menores de idade.
const pessoas = [
  {
    nome: 'Ayrton',
    idade: 27
  },
  {
    nome: 'João',
    idade: 14
  },
  {
    nome: 'Maria',
    idade: 23
  },
  {
    nome: 'Joana',
    idade: 21
  },
  {
    nome: 'Lucas',
    idade: 32
  },
  {
    nome: 'Mateus',
    idade: 15
  },
  {
    nome: 'Isa',
    idade: 23
  },
  {
    nome: 'Luiza',
    idade: 17
  }
];

const faixaEtaria = pessoas.reduce((acumulador, elemento) => {
  const maiorOuMenor = elemento.idade >= 18 ? 'maiores' : 'menores';
  acumulador[maiorOuMenor].push(elemento);
  return acumulador;
}, { maiores: [], menores: [] })

console.log(faixaEtaria)

// Ex.: 3 - Qual o maior número do array?
const numbers = [50, 85, -30, 3, 15, 1, 97];

const bigger = numbers.reduce((big, small) => big > small ? big : small);

console.log(bigger);

// Desafio: Agora crie uma função usando os dados dos estudantes que usamos no conteúdo do dia anterior, para mostrar na tela um relatório que diz em qual matéria o estudante foi melhor. Você usará tanto o map quanto, dentro dele, o reduce!
const estudantes = [
  {
    nome: 'Jorge',
    sobrenome: 'Silva',
    idade: 14,
    turno: 'Manhã',
    materias: [
      { name: 'Matemática', nota: 67 },
      { name: 'Português', nota: 79 },
      { name: 'Química', nota: 70 },
      { name: 'Biologia', nota: 65 }
    ]
  },
  {
    nome: 'Mario',
    sobrenome: 'Ferreira',
    idade: 15,
    turno: 'Tarde',
    materias: [
      { name: 'Matemática', nota: '59' },
      { name: 'Português', nota: '80' },
      { name: 'Química', nota: '78' },
      { name: 'Biologia', nota: '92' }
    ]
  },
  {
    nome: 'Jorge',
    sobrenome: 'Santos',
    idade: 15,
    turno: 'Manhã',
    materias: [
      { name: 'Matemática', nota: '76' },
      { name: 'Português', nota: '90' },
      { name: 'Química', nota: '70' },
      { name: 'Biologia', nota: '80' }
    ]
  },
  {
    nome: 'Maria',
    sobrenome: 'Silveira',
    idade: 14,
    turno: 'Manhã',
    materias: [
      { name: 'Matemática', nota: '91' },
      { name: 'Português', nota: '85' },
      { name: 'Química', nota: '92' },
      { name: 'Biologia', nota: '90' }
    ]
  },
  {
    nome: 'Natalia',
    sobrenome: 'Castro',
    idade: 14,
    turno: 'Manhã',
    materias: [
      { name: 'Matemática', nota: '70' },
      { name: 'Português', nota: '70' },
      { name: 'Química', nota: '60' },
      { name: 'Biologia', nota: '50' }
    ]
  },
  {
    nome: 'Wilson',
    sobrenome: 'Martins',
    idade: 14,
    turno: 'Manhã',
    materias: [
      { name: 'Matemática', nota: '80' },
      { name: 'Português', nota: '82' },
      { name: 'Química', nota: '79' },
      { name: 'Biologia', nota: '75' }
    ]
  },
];

const bestNote = (maior, menor) => {
  const resultado = maior.nota > menor.nota ? maior : menor;
  return resultado;
}
const bestClass = estudantes.map((studants) => {
  return {
    nome: studants.nome,
    materia: studants.materias.reduce(bestNote).name
  }
});

console.log(bestClass);
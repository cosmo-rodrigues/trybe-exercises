// A função map() manipula um array exite e retorn um nova array.
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

const saida = listaDePessoasAprovadas.filter(aprovados => aprovados.nota >=100);
const saida2 = saida.map(resultado => {
  return {name: resultado.name, nota: resultado.nota};
})
console.log(saida2)

// Outro exemplo:
const persons = [
  { firstName: "Maria", lastName: "Ferreira" },
  { firstName: "João", lastName: "Silva" },
  { firstName: "Antonio", lastName: "Cabral" },
];
 const fullName = persons.map(names => `${names.firstName} ${names.lastName}`);
 console.log(fullName);

 // manipulando números:
 const numbers = [1, 2, 3, 4, -5];
 // todos para negativo:
 const negativos = numbers.map(changes => changes > 0 ? changes * -1 : changes);
 console.log(negativos);
 const multiplos = numbers.map(numeros => numeros * 2);
 console.log(multiplos);

 // juntar dois array:
 const products = ['Arroz', 'Feijao', 'Alface', 'Tomate'];

const prices = [2.99, 3.99, 1.5, 2]

const atualizarPreco = products.map((produto,preco) => {
  return { [produto]: prices[preco] }
});

console.log(atualizarPreco);

// Retorne o nome completo de todos os alunos do turno da manhã:
// Use map com filter
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
const byTurno = estudantes.filter(aluno => aluno.turno === 'Manhã').map(nameFull => `${nameFull.nome} ${nameFull.sobrenome}`);

console.log(byTurno);
// Buscar um estudante pelo nome e retornar a situação dele em cada matéria:
// Use map com find.
const verificarStatus = (nome, studant) => {
  const aluno = studant.find(nomeDele => nomeDele.nome === nome);
  return aluno.materias.map(resultados =>
    `${resultados.name} ${resultados.nota >= 60 ? 'Aprovado' : 'Reprovado'}`)
}

console.log(verificarStatus('Natalia', estudantes));

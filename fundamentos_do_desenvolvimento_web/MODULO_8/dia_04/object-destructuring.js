// O método destruturing nos permite pegar todos os campos de um ojeto que iremos utilizar várias vezes, sem a necessidade de chamar o objeto todas as vezes que formos utiliza-lo.
// Ex.:
const aluno = {
  nome : "Matheus", 
  idade : "23",
  email : "matheushcastiglioni@gmail.com"
};

const {nome, idade, email} = aluno;
console.log(nome);
console.log(idade);
console.log(email);

// Desta forma conseguimos acessar as propriedades do objeto aluno, sem a necessidade de informarmos o nome do objeto todas as vezes.
// Mas caso não queiramos utilizar o nome que a chave possui, podemos altera-la? SIM
const json = {
  a: "Matheus", 
  b: "23", 
  c: "matheushcastiglioni@gmail.com"
};
// Pensou nisso, a equipe de desenvolvedores criou um recurso para referenciar um objeto mas trocando seu nome na criação da variável:
const {a:nome2, b:idade2, c:email2} = json;
console.log(nome2);
console.log(idade2);
console.log(email2);

// Podem também ser referenciadas chaves dentro de chaves:
const LOCAL_FORECAST = {
  yesterday: { low: 61, high: 75 },
  today: { low: 64, high: 77 },
  tomorrow: { low: 68, high: 80 }
};

// Only change code below this line
const {today:{low:lowToday, high:highToday}} = LOCAL_FORECAST;
console.log(lowToday);
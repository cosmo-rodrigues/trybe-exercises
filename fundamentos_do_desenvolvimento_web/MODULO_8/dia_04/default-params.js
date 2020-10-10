// No javascript, quando declaramos uma função que recebe parâmetros, podemos notar que ao chamá-la sem passarmos nenhum valor vamos receber undefined como resultado. Mas em certas ocasiões, queremos que algum valor seja atrelado a esses parâmetros, caso a função seja chamada sem nenhum.

// Queremos que o parâmetro tenha um valor predefinido.

// É isso que o default params resolve:
// Jeito antigo de se fazer:
function hello (name) {
  name = typeof name !== 'undefined' ? name : 'World';
  console.log('Hello ' + name);
}

hello('People'); // > Hello People
hello(); // > Hello World

// Com o ES6 fica asaim: Ex.: 1
function hello (name = 'World') {
  console.log(`Hello ${name}`);
}

hello('People'); // > Hello People
hello(); // > Hello World

// Ex.: 2
function say (message = 'Hello', name = 'World') {
  console.log(`${message} ${name}`);
}

say('Hey', 'People'); // > Hey People
say(undefined, 'People'); // > Hello People
say('Hi', undefined); // > Hi World
say(undefined, undefined); // > Hello World

// Como null é um valor "falso", podiamos esperar que fosse substituido pelo valor padrão que definimos, mas essa funcionalidade só será aplicada se o valor do parâmetro for undefined ou se não passarmos nada como valor.
function say (message = 'Hello', name = 'World') {
  console.log(`${message} ${name}`);
}

say('Hey', 'People'); // > Hey People
say(null, 'People'); // > Hi null
say('Hi', null); // > Hi null
say(null, null); // > null null

//O mesmo se aplica ao valor 0, como sabemos, 0 é um valor "falso".

function say (message = 'Hello', name = 'World') {
  console.log(`${message} ${name}`);
}

say('Hey', 'People'); // > Hey People
say(0, 'People'); // > 0 People
say('Hi', 0); // > Hi 0
say(0, 0); // > 0 0
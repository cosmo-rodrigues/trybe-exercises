// É uma função de objetos do tipo array, seve para executar
// um bloco de códigos pra cada elemento do array.
// Ex.: 01 - Listas de pessoas aprovadas em um processso seletivo.

const listaDePessoasAprovadas = [
  'ada.lovalace@exemple.com',
  'mary.cury@exemple.com',
  'margaret.hamilton@exemple.com',
  'alan.turing@exemple.com'
];

const enviarEmail = email => {
  console.log(`Email para ${email} enviado com sucesso`);
}

listaDePessoasAprovadas.forEach(email => {
  enviarEmail(email);
});

console.log('-----------------------------------------------------');

// Forma simplificada:

listaDePessoasAprovadas.forEach(email => enviarEmail(email));

// o forEach aceita três parâmetros, respectivamente:
// element - o elemento que está sendo manipulado no momento da iteração;
// index - posição do elemento
// array - arrey completo que está sendo manipulado.
// Obs.: O for Each não retorna nada, apenas passa pelos elementos e executa o bloco de códigos.


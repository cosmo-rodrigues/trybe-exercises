// O código abaixo deve retornar um falso positivo, pois o teste não aguarda o retorno da função, que é assícrona.

// describe('Deve retornar um falso positivo', () => {
//   test("Não deveria passar!", () => {
//   setTimeout(() => {
//     expect(10).toBe(5);
//     console.log('Deveria falhar!');
//   }, 500);
// });
// });

// E para resolver isso, utilizaremos testes também assícronos.

describe('Deve retornar um erro', () => {
  test("Não deveria passar!", done => {
    setTimeout(() => {
      expect(10).toBe(5);
      console.log('Deveria falhar!')
      done();
    }, 500);
  });
});

// Com adição do parâmetro done e o passando como função no final do bloco, obriga o teste a esperar a resolução da função antes de continuar!
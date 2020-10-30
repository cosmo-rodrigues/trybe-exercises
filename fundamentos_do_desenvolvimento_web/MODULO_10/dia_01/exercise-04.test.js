// 4 - Escreva a função findTheNeedle para passar nos testes já implementados.
const assert = require('assert');
// escreva a função findTheNeedle aqui
const findTheNeedle = (array, word) => {
  let output = -1;
  for (const index in array) {
    if (word === array[index]) {
      output = Number(index);
    }
  }
  return output;
};

describe('Find a position of a word', () => {
  let words = ['house', 'train', 'slide', 'needle', 'book'];
  let expected = 3;
  let output = findTheNeedle(words, 'needle');
  it('should return 3 if word is needle', () => {
    expect(output).toBe(expected);
  });
});

describe('Find a position of a word', () => {
  words = ['plant', 'shelf', 'arrow', 'bird'];
  expected = 0;
  output = findTheNeedle(words, 'plant');
  it('should return 0 if word is plant', () => {
    expect(output).toBe(expected);
  });
});

describe('Find a position of a word', () => {
  words = ['plant', 'shelf', 'arrow', 'bird'];
  expected = -1;
  output = findTheNeedle(words, 'plat');
  it('should return -1 if word is plat', () => {
    expect(output).toBe(expected);
  });
});

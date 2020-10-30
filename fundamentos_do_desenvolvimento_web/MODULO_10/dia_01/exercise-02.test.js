// 2 - Escreva a função wordLengths para passar nos testes já implementados.

const words = ['sun', 'potato', 'roundabout', 'pizza'];
const expected = [3, 6, 10, 5];

function wordLengths(words) {
  const result = [];
  words.forEach((element, index) => {
    result[index] = (element.length);
  });
  return result;
}

const output = wordLengths(words);

describe('When test wordLength', () => {
  it('should recive an type of function', () => {
    expect(typeof wordLengths).toBe('function');
  });
  it('should retrive a words length when call output', () => {
    expect(output).toEqual(expected);
  })
})
// 3 - Escreva a função addAllnumbers para passar nos testes já implementados.
function addAllnumbers(numbers) {
  return numbers.reduce((todos, element) => todos + element);
}

const numbers = [9, 23, 10, 3, 8];
const expected = 53;
const output = addAllnumbers(numbers);

describe('Whhen test', () => {
  it('should return type of a function', () => {
    expect(typeof addAllnumbers).toBe('function');
  });
  it('should return all numbers sumed', () => {
    expect(output).toBe(expected);
  });
});
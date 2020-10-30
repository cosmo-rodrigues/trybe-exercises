// 1 - Escreva a função addOne para passar nos testes já implementados.

function addOne(rest) {
  const result = [];
  if (rest !== addOne) {
  rest.forEach((element, index) => {
    result[index] = element + 1;
  });
  return result;
}
return unchanged;
}

const myArray = [31, 57, 12, 5];
const unchanged = [31, 57, 12, 5];
const expected = [32, 58, 13, 6];
const output = addOne(myArray);

describe('A expected response must to be recive', () => {
  it('should return type of array if typeof verified', () => {
    expect(typeof addOne).toBe('function');
  });
  it('shuld return expected if output was passed as paremeters', () => {
    expect(output).toEqual(expected);
  });
  it('shold return unchange if call addOn', () => {
    expect(myArray).toEqual(unchanged);
  })
})
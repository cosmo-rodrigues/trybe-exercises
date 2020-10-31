const { randomNumber } = require('./service');
const service = require('./service');

test("#randomRgbColor", () => {
  // testando se a função foi chamada
  service.randomRgbColor = jest.fn().mockReturnValue('rgb(255, 255, 255)');
  service.randomRgbColor()
  expect(service.randomRgbColor).toHaveBeenCalled();
  expect(service.randomRgbColor()).toBe('rgb(255, 255, 255)')
});

test("#randomRgbColor", () => {
  // testando quantas vezes a função foi chamada e qual seu retorno
  service.randomRgbColor = jest
    .fn()
    .mockReturnValue('default value')
    .mockReturnValueOnce('first call')
    .mockReturnValueOnce('second call');

  expect(service.randomRgbColor).toHaveBeenCalledTimes(0);

  expect(service.randomRgbColor()).toBe("first call");
  expect(service.randomRgbColor).toHaveBeenCalledTimes(1);

  expect(service.randomRgbColor()).toBe("second call");
  expect(service.randomRgbColor).toHaveBeenCalledTimes(2);

  expect(service.randomRgbColor()).toBe("default value");
  expect(service.randomRgbColor).toHaveBeenCalledTimes(3);
});

describe('Test functions randomNumber an isDivisible', () => {
  it('should be return typeeof function', () => {
    service.isDivisible();
    expect(typeof service.isDivisible).toBe('function');
  });
  it('should return true if randomNumber and idDisible recive a even number', () => {
    service.randomNumber = jest.fn().mockReturnValue(10);
    service.randomNumber()
    expect(service.isDivisible(2)).toBe(true);
  })
});
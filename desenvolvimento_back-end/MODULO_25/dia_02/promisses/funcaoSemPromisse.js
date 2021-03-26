function calcularDivisao(number1, number2) {
  if (number2 == 0) throw new Error('Não existe divisão por 0!');
  const resultado = number1 / number2;
  return resultado;
}

try {
  const resultado = calcularDivisao(2,7);
  console.log(resultado);
} catch (err) {
  console.log(err.message);
}

function calcularDivisao(num1, num2) {
  const promisse = new Promise((resolve, reject) => {
    if (num2 == 0) reject(new Error('Não existe divisão por 0!'));
    const resultado = num1 / num2;
    resolve(resultado);
  });
  return promisse;
}

calcularDivisao(1,0)
  .then(resolve => console.log(resolve))
  .catch(err => console.log(err.message));
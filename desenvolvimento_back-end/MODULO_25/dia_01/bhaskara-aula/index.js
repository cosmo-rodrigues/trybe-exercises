const readline = require('readline-sync');

function calcularBhaskara() {
  console.log('Fazendo cálculo de Bháskara');
  const a = readline.questionInt('Digite o valor de A: ');
  const b = readline.questionInt('Digite o valor de B: ');
  const c = readline.questionInt('Digite o valor de C: ');

  console.log(`Coeficientes: \n\tA: ${a}, B: ${b}, C: ${c}`);

  const delta = calcularDelta(a, b, c);

  if (delta < 0 ) {
    console.log('Não existem raízes reais para delta negativo');
    return false;
  }

  const x = calcularX(a, b, delta);
  console.log('Valores de X: x1:%s, x2:%s', x.x1, x.x2);

}

function calcularDelta(a, b, c) {
  return (b*b) - (4*a*c);
}

function calcularX(a, b, delta) {
  const x1 = ((-b + Math.sqrt(delta)) / (2 * a)).toFixed(2);
  const x2 = ((-b - Math.sqrt(delta)) / (2 * a)).toFixed(2);
  return { x1, x2};
}

calcularBhaskara();
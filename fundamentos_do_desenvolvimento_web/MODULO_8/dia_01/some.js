// O some verifica se pelo meno um item do array/objeto atende
// um requesito especificado. Seu retorno é um booleano true ou false.
// Ex.: 01 - Verificar se há pelo menos um número primo:
function isPrime(value) {
  for (let count = 2; count < value; count += 1) {
    if (value % count === 0) {
      return false;
    }
  }
  return true;
}

const arrayOfNumber = [ 4, 6, 8, 10, 11 ];

console.log('Tem aglum primo?', arrayOfNumber.some(isPrime));

// Ex.: 02 - Verificar se alguém da lista é piloto
const team = [
  { id: 12, name: 'Topper Harley', pilot: true },
  { id: 44, name: 'Ramada Thompson', pilot: true },
  { id: 59, name: 'Pete Thompson', pilot: false },
  { id: 122, name: 'Kowalski', pilot: false },
];

console.log('Existe alguma pessoa que seja piloto?', team.some( person => person.pilot ));
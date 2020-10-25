const API_URL = 'https://icanhazdadjoke.com/';

const fetchJoke = () => {
  // Adicionar lógica aqui!
  const myObject = {
    method: 'GET',
    headers: { 'Accept': 'application/json' }
  };
  const jokerRecived = document.getElementById('joker-recived');
  fetch(API_URL, myObject)
  .then(response => response.json())
  .then(data => jokerRecived.innerHTML = data.joke);
};
function randonNumbers() {
  let numbers = [];
  for (let count = 0; count < 10; count+= 1) {
    numbers[count] = (Math.ceil(Math.random() * 50))**2;
  }
  return numbers;
}

function sumRandonNumbers() {
  let numbers = randonNumbers();
  let soma = numbers.reduce((all, single) => all + single, 0);
  return soma;
}

const newPromise = new Promise((resolve, reject) => {
  const number = sumRandonNumbers();
  if (number < 8000) {
    return resolve(number);
  }
  reject(number)
})
  .then((number) => console.log(`Promise reolvida com o numero ${number}`))
  .catch((number) => console.log(`ERRO: O número ${number} excede a resolução!`));

window.onload = () => fetchJoke();
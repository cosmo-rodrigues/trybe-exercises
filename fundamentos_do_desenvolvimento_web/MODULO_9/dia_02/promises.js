// Promisses. Ex.: 01
const promessas = new Promise ((resolve, reject) => {
  const number = Math.floor(Math.random() * 10);
  if (number > 10 || number <= 5) {
    return reject(console.log(`Deu ruim, NÚERO ${number}`))
  }
  resolve(console.log(`Deu bão heim, NÚMERO ${number}`));
});
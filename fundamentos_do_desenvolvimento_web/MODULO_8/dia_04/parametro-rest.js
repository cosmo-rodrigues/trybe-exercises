// O parâmetro Rest é uma maneira aprimorada de lidar com os parâmetros da função, permitindo-nos lidar mais facilmente com várias entradas como parâmetros em uma função. A sintaxe do parâmetro rest nos permite representar um número indefinido de argumentos como uma matriz. Com a ajuda de um parâmetro rest, uma função pode ser chamada com qualquer número de argumentos, independentemente de como foi definida. 
// Without rest parameter
function fun(a, b){ 
    return a + b; 
} 
console.log(fun(1, 2)); // 3 
console.log(fun(1, 2, 3, 4, 5));
// como a função tem apenas 2 parâmetros, ela não reconhece a entrada de mais parâmetros.
function sum(...args) {
  return args.reduce((a,b) => a +b);
}
const numbers = [1,2,3,4,5,6,7];
console.log(sum(...numbers)); // Os valores do array foram espalahados com a ajuda do spread operator.
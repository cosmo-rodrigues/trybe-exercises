let valorCusto = 100//prompt("Digite o custo do produto:");
let valorRevenda = 300//prompt("Digite o valor de revenda:");
let impostoDeCusto = 50//prompt("Digite o imposto sobre o custo:");
let custoTotal = valorCusto + impostoDeCusto;
let lucroRevenda = valorRevenda -((valorCusto/100)* custoTotal);
console.log("O lucro é de R$",lucroRevenda);
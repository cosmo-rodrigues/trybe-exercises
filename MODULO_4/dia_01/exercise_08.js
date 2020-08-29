let number_01 = prompt("Digite o número 1");
let number_02 = prompt("Digite o número 2");
let number_03 = prompt("Digite o número 3");
if((number_01%2==0)||(number_02%2==0)||(number_03%2==0)){
    console.log("Pelo menos um número é par: ",true)
} else {
    console.log("Pelo menos um número é par: ",false)
}
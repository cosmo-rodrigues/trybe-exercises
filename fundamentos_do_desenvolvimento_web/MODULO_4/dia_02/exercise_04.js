let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let result = 0;
for(let counter in numbers){
    result += numbers[counter];
}
let percentage = result/numbers.length;
if (percentage>20){
    console.log("Valor maior que 20");
} else {
    console.log("Valor menor que 20")
}
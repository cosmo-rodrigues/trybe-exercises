let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let oddNumbers = 0;
for(let count in numbers){
    if(numbers[count]%2!=0){
        oddNumbers += 1;
        }
    } if(oddNumbers>=1) {
        console.log(`Foram encontrados ${oddNumbers} números ímpares`)
} else {
    console.log("Nenhum número ímpar foi encontrado!")
}
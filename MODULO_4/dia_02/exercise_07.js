let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let smaller = 99999999999999999999;
for(let count in numbers){
    if(numbers[count]<smaller){
        smaller=numbers[count];
    }
}
console.log(smaller)
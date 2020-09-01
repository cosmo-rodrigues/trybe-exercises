let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let smallest = 0;
for(let count1 in numbers){
    for(let count2 in numbers){
    if(numbers[count1]<numbers[count2]){
        smallest=numbers[count1];
        numbers[count1]=numbers[count2];
        numbers[count2]=smallest;
        }
    }
}
console.log(numbers);
let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let bigger = 0;
for(let count1 in numbers){
    for(let count2 in numbers){
    if(numbers[count1]<numbers[count2]){
        bigger=numbers[count1];
        numbers[count1]=numbers[count2];
        numbers[count2]=bigger;
        }
    }
}
console.log(numbers);
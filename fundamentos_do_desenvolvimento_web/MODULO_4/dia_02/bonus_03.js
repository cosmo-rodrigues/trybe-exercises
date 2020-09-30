let numbers1 = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let numbers2 = [];
for(let count =0; count<numbers1.length; count++){
    if(count===numbers1.length-1){
        numbers2[numbers2.length-1]=numbers1[count]*2
    } else{
        numbers2.push(numbers1[count]*numbers1[count+1]);
    }
}
console.log(numbers2);
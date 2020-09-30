let table = [];
let number = 1;
for(let count=0; count<25;count+=1){
    table[count] = number + count;
    table.push(table[count]);
    console.log((table[count])/2);
}
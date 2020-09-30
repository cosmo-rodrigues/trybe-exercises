let checkerNumber = 23;
let accumulator = 0;
for (let counter=1;counter<=checkerNumber;counter++){
    if(checkerNumber%counter==0){
        accumulator+=1;
    }
}
if(accumulator==2){
    console.log(`${checkerNumber} é primo!`)
} else {
    console.log(`${checkerNumber} não é primo!`)
}
//Solução sugerida por Luciano Berchon - Turma 07
let number=5;
let string = "";
let numeroDoMeio = Math.ceil(number/2);
for(let count = 1; count <= numeroDoMeio; count+=1){
    string = "";
    for (let count2 = 1; count2 <= number; count2++){
        if ((count2 < (numeroDoMeio - (count-1))) || (count2 > numeroDoMeio + (count-1))){
            string += " ";
        }
        else{
            string += "*";
        }
    }
    console.log(string);
}
//Solução sugerida por Luciano Berchon - Turma 07
let number=10;
let string = "";
let numeroDoMeio = Math.ceil(number/2);
for(let count = 1; count <= numeroDoMeio; count+=1){
    string = "";
    for (let count2 = 1; count2 <= number; count2++){
        if ((count2===(numeroDoMeio - (count-1))) || (count2===numeroDoMeio + (count-1))||(numeroDoMeio===count) ){
            if((numeroDoMeio===count)&&(count2===number)&&(count2%2===0)){
                string += "";
            }
            else{
                string += "*";
            }
        }
        else {
            string += " ";
        }
    }
    console.log(string);
}
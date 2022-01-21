//SOLUCAO 1
/*
function verifica(string){
    if(!string) return "string inexistente";

   return string.split("").reverse().join("") === string;
}

console.log(verifica("ovo"));

*/


//SOLUCAO 2

function verifica1(string){
    if(!string) return "string inexistente";

    for(let i=0; i < string.length /2; i++){
        if(string[i] !== string[string.length -1 - i])
        return false;
    }

    return true;
}

console.log(verifica1("ama"));
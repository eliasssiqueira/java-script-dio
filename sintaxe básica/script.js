//alert('Tudo certo');

//vetores ou arrays

//como declarar vetores
/* let array = ['string',1,true];
console.log(array); */

//pode guardar varios tipos de dados 
//let array = ['string',1,true,['array1'],['array2']];
//console.log(array[3]);

 /*
var jogador1 =0;
var jogador2 =2;
var placar;

   if(jogador1 > 0){
        console.log('jogador 1 marcou ponto!');
        placar = jogador1 > jogador2;
                                                }
    else if(jogador2 > 0){
         console.log('jogador 2 marcou ponto!');
         placar = jogador2 > jogador1;
                                                }
    else{
        console.log('ninguem marcou');
                                                }  

jogador1 != -1 && jogador2 != -1 ? console.log('jogadores validos') : console.log('jogadores invalidos');   

switch(placar){
    case placar = jogador1 > jogador2:
        console.log('jogador 1 venceu!');
        break;
    case placar =  jogador2 > jogador1:
        console.log('jogador 2 venceu');
        break;
    default: 
        console.log('empate')
}

*/


var vetor = ['1','2','3','4','5'];
let object = {propriedade1: '1',propriedade2: '2',propriedade3: '3'}

   /* for(let indice =0; indice < vetor.length; indice++){
    console.log(indice);
}   */

//for in  com array
for(let i in vetor){
    console.log(i);
}

//for in  com object
for(i in object){
    console.log(i);
}


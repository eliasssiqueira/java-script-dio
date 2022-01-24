/*
Pratique a sintaxe de multiplicação de números, uma vez utilizando o parâmetro this de um objeto criado por você, e depois sem ele.
*/

//MAP COM THIS
/*
const maca = {
    value: 2,
}
const laranja ={
    value: 3,
}
function mapComThis(arr,thisArg){
    return arr.map(function(item){
        return item * this.value;
    }, thisArg);
}
const nuns=[1,2];

console.log('this -> maçã', mapComThis(nuns,maca));

console.log('this -> laranja', mapComThis(nuns,laranja));

*/

//MAP SEM O THIS
/*
function mapSemThis(arr){
    return arr.map(function(item){
        return item *2;
    })
}

const nuns = [2,4,6,8,10];

console.log(mapSemThis(nuns));

*/

//FILTER

/* Filtre e retorne todos os números pares de um array. */
/*
function filtraPares(arr){
    return arr.filter(callback);
}

function callback(item){
    return item % 2 === 0;
}

const meuArray = [1,23,55,67,30,2,4];

console.log(filtraPares(meuArray));
*/

//REDUCE
/* Some todos os números de um array */
/*
function somaNumeros(arr){
   return arr.reduce(function (prev, current){
        return prev + current;
    })
}

const arr = [1,2];

console.log(somaNumeros(arr));
*/

/* Crie uma função que recebe uma lista de preços e um número representando o saldo disponível. Calcule qual será o saldo final após subtrair todos os preços da lista enviada. */

const lista = [{
    nome: 'sabao',
    preco: 30
},
{
    nome: 'cereal',
    preco: 12
},
{
    nome: 'toalha',
    preco: 30,
},
];

const saldoDisponivel = 100;

function calculaSaldo(saldoDisponivel,lista){
    return lista.reduce(function(prev,current){
        return prev - current.preco;
    },saldoDisponivel);
}

console.log(calculaSaldo(saldoDisponivel,lista));

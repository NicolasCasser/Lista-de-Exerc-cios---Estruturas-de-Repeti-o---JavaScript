//Peça ao usuário para inserir um número e exiba a tabuada desse número de 1 a 10, utilizando FOR.
var prompt = require('prompt-sync')();

let num;

num = prompt("Digite um número: ");

for(let i = 1; i <= 10; i++){
    console.log(`${num} x ${i} = ${num * i}`);
}
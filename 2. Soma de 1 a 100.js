//Escreva um programa que calcule e exiba a soma de todos os números de 1 a 100, utilizando a estrutura FOR.
var prompt = require('prompt-sync')();

let soma = 0;

for(let i = 1; i <= 100; i++){
    soma += i;
}

console.log(soma);

//Escreva um programa que conte de 0 até um número aleatório entre 1 e 10.
var prompt = require('prompt-sync')();

let num;

do {
    num = prompt("Escerva um número entre 1 e 10: ");
    if (num < 1 || num > 10) {
        console.log("Resposta inválida");
    }
} while (num < 1 || num > 10);

for(i = 0; i <= num; i++){
    console.log(i);
}
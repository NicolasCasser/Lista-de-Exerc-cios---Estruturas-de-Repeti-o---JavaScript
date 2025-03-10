//Peça ao usuário para inserir um número N e repita a mensagem 'Olá!' N vezes.
var prompt = require('prompt-sync')();

let num;

num = prompt("Digite um número: ");

for(let i = 1; i <= num; i++){
    console.log(`${i} - Olá`);
}
//Faça um programa que peça ao usuário para acertar uma senha entre 0 e 20. Enquanto a senha estiver errada, exiba a mensagem SENHA INVÁLIDA. No início do programa, defina a senha correta (fixa ou gerada aleatoriamente).
var prompt = require('prompt-sync')();

let senha = Math.floor(Math.random() * 21);
let resp;

while(resp != senha){
    resp = prompt("Tente acertar a senha entre 0 e 20: ");

    if (resp != senha) {
        console.log("Senha inválida!");
    } else {
        console.log("Parabéns, vacê acertou!");
    }
}
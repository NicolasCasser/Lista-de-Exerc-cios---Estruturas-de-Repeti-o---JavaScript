//Você é um professor e deseja calcular a média das notas dos seus alunos. Escreva um programa que solicite ao usuário inserir as notas dos alunos repetidamente e calcule a média das notas. O programa deve continuar pedindo notas até que o usuário insira um valor negativo, indicando o fim da entrada das notas.
var prompt = require('prompt-sync')();

let notas = 0, totalNotas = 0, cont = 0, media;

while(notas >= 0){
    notas = +prompt("Insira as notas dos alunos: ");
    if (notas >= 0) {
        totalNotas += notas;
        cont++;
    }
}

media = totalNotas / cont;

console.log(`Média das notas dos alunos: ${media}`);

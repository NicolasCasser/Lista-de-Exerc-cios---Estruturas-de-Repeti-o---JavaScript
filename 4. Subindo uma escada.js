//Imagine que você está subindo uma escada. Cada degrau tem uma altura fixa de 30 CM. Escreva um programa que solicite ao usuário inserir a altura total da escada em centímetros e calcule quantos degraus são necessários para alcançar o topo.
var prompt = require('prompt-sync')();

let altTotal, quantDegraus;

altTotal = +prompt("Digite a altura total da escada em cm: ");
quantDegraus = altTotal / 30;

console.log(`Quantidade de degraus necessários: ${quantDegraus}`);

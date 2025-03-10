//Você tem uma garrafa vazia e quer enchê-la com um conta-gotas. Cada gota adiciona 5 ML à garrafa. Escreva um programa que peça ao usuário informar o tamanho da garrafa em ml e mostre quantas gotas são necessárias para enchê-la.
var prompt = require('prompt-sync')();

let mlTotal, quantGotas;

mlTotal = prompt("Informe o tamanho total da garrafa em ml: ");
quantGotas = mlTotal / 5;

console.log(`Gotas necessárias para encher a garrafa: ${quantGotas}`);

//Você está em um pomar e acabou de colher 50 FRUTAS. Agora, você vai começar a comer elas. Escreva um programa que, a cada iteração, solicite ao usuário informar quantas frutas ele comeu e exiba quantas frutas restam na cesta após cada consumo, até que todas as frutas tenham sido consumidas.
var prompt = require('prompt-sync')();

let frutasTotais = 50, frutasComidas;

while(frutasTotais > 0) {
    do {
        frutasComidas = prompt("Quantas frutas você comeu?: ");
        if (frutasComidas > frutasTotais) {
            console.log("Você não possui essa quantidade de frutas.");
        }
    } while (frutasComidas > frutasTotais);
    frutasTotais -= frutasComidas;
    console.log(`Frutas restantes: ${frutasTotais}`);
}
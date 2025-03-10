//Você está planejando economizar dinheiro para comprar um item especial. O objetivo é somar quantias de dinheiro até que o total economizado ultrapasse 100 REAIS. Cada vez que o usuário adiciona uma quantia, o programa deve informar o valor acumulado até o momento.
var prompt = require('prompt-sync')();

let dinheiroGuardado = 0, dinheiroAdicionado;

while(dinheiroGuardado <= 100){
    dinheiroAdicionado = +prompt("Qual a quantia de dinherio você quer adicionar a suas economias?: ");
    dinheiroGuardado += dinheiroAdicionado;
    console.log(`Suas economias: R$${dinheiroGuardado}`);
}

console.log("Parabéns, você atingiu sua meta!");

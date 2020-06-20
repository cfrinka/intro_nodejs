let readlineSync = require('readline-sync'); //invocando o pacote do npm

let num1 = readlineSync.question('Insira o primeiro número:');
num1 = Number(num1);
let num2 = readlineSync.question('Insira o segundo número:')
num2 = Number(num2)

if (num1 > num2) {
    console.log(' O número 1 é maior');

} else if (num1 === num2)
    console.log('Os números são iguais')
else {
    console.log('O número 2 é maior')
}
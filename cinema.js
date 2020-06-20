let readlineSync = require('readline-sync'); //invocando o pacote do npm

let meia = readlineSync.question('Quantas meia entradas?');
let inteira = readlineSync.question('Quantas inteiras?');
meia = Number(meia);
inteira = Number(inteira);

let total = (meia * 5) + (inteira * 10)

console.log('O total a pagar é: R$' + total)
let rs = require('readline-sync');
let mes = rs.questionInt('Digite o mes');

switch (mes) {
    case 1:
        console.log('Janeiro');
        break;
    case 2:
        console.log('Fevereiro');
        break;
        // e assim opor diante para todos os meses
    default:
        console.log('Não sei esse mes');
}
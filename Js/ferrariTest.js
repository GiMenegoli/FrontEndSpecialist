const Ferrari = require('./Ferrari');
const Carro = require('./Carro');

const ferrari1 = new Ferrari();
ferrari1.cor = "vermelho";
ferrari1.acelerar();

console.log(ferrari1.velocidade);

const punto1 = new Carro();
punto1.acelerar();
// punto1.turbo();
console.log(punto1.velocidade);


const ferrari2 = {...ferrari1};
ferrari2.cor = "Amarela";
console.log(ferrari1.cor);
console.log(ferrari2.cor);

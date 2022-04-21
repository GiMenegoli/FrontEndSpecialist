const Carro = require('./Carro');

let punto1 = new Carro();
punto1.cor = "amarelo";
punto1.acelear();
console.log(punto1.cor);
console.log(punto1.velocidade);

let punto2 = new Carro();
punto2.cor = "verde";
punto2.acelear();
punto2.acelear();

console.log(punto2.cor);
console.log(punto2.velocidade);

punto2.freiar();
console.log(punto2.velocidade);

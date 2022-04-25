const Fusca = require("./Fusca");
const Tesla = require("./Tesla");

const fusca = new Fusca();
const tesla = new Tesla();

fusca.cor = "Amarelo";
fusca.noRodas = 4;

console.log(fusca.getInfo());

tesla.cor = "Cinza";
tesla.noRodas = 4;

console.log(tesla.getInfo());



const carro = {
    placa: "ABC 1234",
    marca: "VW Gol",
    trocaPlaca:(novaPlaca) =>{
        return "ABC" + novaPlaca
    }
}
console.log(carro);

carro.marca = "HB20";
carro.placa = "ADF 0A56"
carro.placa = carro.trocaPlaca("0D98");
console.log(carro);


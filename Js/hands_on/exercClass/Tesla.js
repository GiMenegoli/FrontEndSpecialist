const Carro = require("./Carro");

class Tesla extends Carro {
    #itensSerie = ['GPS', 'computador de bordo'];

    getInfo(){
        let objretorno = super.getInfo();

        return {
            ...objretorno,
            itensSerie: this.#itensSerie
        }
        // return {
        //     cor: super.cor,
        //     noRodas: super.noRodas,
        //     itensSerie: this.#itensSerie
        // }
    }

}
module.exports = Tesla;
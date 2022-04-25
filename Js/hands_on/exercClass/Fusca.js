const Carro = require("./Carro");

class Fusca extends Carro {
    #itensSerie = ['retrovisor', 'paralama'];

    getInfo(){
        let objretorno = super.getInfo();

        return {
            ...objretorno,
            itensSerie: this.#itensSerie
        }
        //return objretorno;
        // return {
        //    itensSerie: this.#itensSerie
        // }
    }

}
module.exports = Fusca;
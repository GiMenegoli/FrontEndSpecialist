class Carro {

    #cor = "";
    #noRodas = 4;
    #tipoCambio = "Manual";
    #velocidade = 0;

    get cor(){
        return this.#cor;
    }

    set cor(novaCor){
        this.#cor = novaCor;        
    }

    get noRodas(){
        return this.#noRodas;
    }

    set noRodas(valor){
        this.#noRodas = valor;
    }

    get velocidade(){
        return this.#velocidade;
    }

    set velocidade(valor){
        this.#velocidade = valor;
    }

    acelerar(){
        this.#velocidade += 10;

    }

    freair(){
        this.#velocidade -= 10;

        if(this.#velocidade > 0){
            this.#velocidade -= 10;
        }
    }

    getInfo(){
        return {
            cor: this.#cor,
            noRodas: this.#noRodas,
            velocidade: this.#velocidade,
            tipoCambio: this.#tipoCambio        
        }
    }
}

module.exports = Carro;
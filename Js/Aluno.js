class Aluno {
    #matricula = "";
    #nome = "";
    #media = 0;
    #nota = [];

    constructor(nome, matricula) {
        this.#nome = nome;
        this.#matricula = matricula;
        this.#nota = [];
    }
    get nome() {
        return this.#nome;
    }

    set nome(valor) {
        if (valor.length > 3) {
            this.#nome = valor;
        }
    }


    set nota(valor) {
        if (valor >= 0 && valor <= 10) {
            this.#nota.push(valor);

        }
    }

    get nota(){
        return this.#nota;
    }
    // addNota(nota) {
    //     this.#nota.push(nota);
    // }

    mediaProva() {
        let somaNotas = 0;
        this.#nota.forEach(element => {
            somaNotas += element;
        });
        this.#media = somaNotas / this.#nota.length;
        console.log("Media = " + this.#media);
    }

    alunoAprovado() {
        if (this.#media >= 7) {
            return true;
        } else {
            return false;
        }
    }
    salvarMedia() {

    }
}
module.exports = Aluno;
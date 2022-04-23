class Carro{
    modelo="";
    placa="";
    velocidade=0;
    #noRodas = 4;

    constructor(){
        this.modelo = "Ford Ka";
        console.log("Construtor");
    }
    

    acelerar() {       
            this.velocidade += 10; 
            // this.#noRodas = 6;    
            // console.log(this.#noRodas);  
    }

    freiar(){
        this.velocidade -= 10 ;
    }

}

// export default Carro;
module.exports = Carro
class Carro{
    modelo="";
    placa="";
    velocidade=0;

    acelear() {       
            this.velocidade += 10;       
    }

    freiar(){
        this.velocidade -= 10 ;
    }

}

// export default Carro;
module.exports = Carro
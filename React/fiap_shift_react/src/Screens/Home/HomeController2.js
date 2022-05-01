import React from 'react'
import HomeView from './HomeView'

class HomeController extends React.Component {

    constructor(props) {
        super(props);

        //gerando logs da props
        console.log(" Chamando constructor() ");
        console.log(props);

        this.state = {
            count: 0,
            statusContador: "Parado"
        }; //inicializando o state

    }
    
    componentDidMount() {
        this.gerenciarInterval = setInterval(() => {
        if(this.state.statusContador === "Rodando"){
                this.setState({
                    count: this.state.count + 1
                })
            }
        }, 1000)
    }

    componentWillUnmount(){
        clearInterval(this.gerenciarInterval);
    }

    iniciar = () => {
        this.setState({
            statusContador: "Rodando"
        })
    }

    pausar = () => {
        this.setState({
            statusContador: "Parado"
        })

    }

    parar = () => {
        this.setState({
            statusContador: "Parado",
            count: 0
        })
    }

    render() {
        console.log(" Chamando Render " + this.state.count);
        return (
            //Chamando o View e passando o props count_info
            <HomeView
                count={this.state.count}
                iniciar={this.iniciar}
                pausar={this.pausar}
                parar={this.parar}
                statusContador={this.state.statusContador}
            />
        )
    }


}
export default HomeController;
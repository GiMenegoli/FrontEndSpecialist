
import React, { Component } from 'react';
import HomeView from './HomeView'

class HomeController extends Component {

    constructor() {
        super();
        this.state = {
            count: 0,
            count1: 0,
            estaCarregando: false,
        };

        setInterval(() => {
            this.setState({
                count: this.state.count + 1
            })
        }, 1000);
    }


    addCount = () =>  {
        this.setState({
            count1: this.state.count1+1
        })
    }

    iniciaLogin = () => {
        // if(this.state.estaCarregando){
        //     this.setState({
        //         estaCarregando: false
        //     })
        // } else {
        //     this.setState({
        //         estaCarregando: true
        //     })
        // }
        this.setState({
            estaCarregando: !this.state.estaCarregando
        });
    }

    render() {
        return (
            <HomeView 
                count={this.state.count} 
                count1={this.state.count1} 
                addCount={this.addCount}
                estaCarregando={this.state.estaCarregando}
                iniciaLogin={this.iniciaLogin}
            /> //Chamando o View
        )
    }
}
export default HomeController;

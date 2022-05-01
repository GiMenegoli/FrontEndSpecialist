import React, { useEffect, userSate, useState } from 'react'
import HomeView from './HomeView'

const HomeController = () => {

    const [count, setCount] = useState(0);
    let gerenciarIntervalo = null;

    useEffect(() => {
        console.log("Aqui chama no montar tela");
        gerenciarIntervalo = setInterval(() => {
            setCount((count) => { return count + 1 });
        }, 1000)

        return () =>{
            console.log("Aqui chama no Desmontar tela");
            clearInterval(gerenciarIntervalo);
        }
    }, []);

    useEffect(() => {
        console.log("Depois de renderizar");    
        return () =>{
            console.log("Antes de renderizar");
           
        }
    });

    useEffect(() => {
        console.log("Depois de alterar count");    
        return () =>{
            console.log("Antes de alterar count");               
        }
    }, [count]);



    const alteraCount = () => {

        //    setCount((count) => {return count +1});
    }

    console.log(" Chamando Render " + count);
    return (
        //Chamando o View e passando o props count_info
        <HomeView
            count={count}
            alteraCount={alteraCount}
        />
    )


}
export default HomeController;
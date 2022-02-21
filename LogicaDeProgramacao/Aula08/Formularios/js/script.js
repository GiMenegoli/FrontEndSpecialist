// function validarForm(){
//     let x=document.forms['meuForm']['textNome'].value;

//     if(x==""){
//         alert("Preencha o campo nome");
//         return false;
//     };
// }

function suaEscolha(){
    let saida="";
    let radiosMarvel= document.getElementsByName("herois");
    let radiosDC= document.getElementsByName("dc");

    for(var i=0;i<radiosMarvel.length; i++){
        if(radiosMarvel[i].checked){
            saida=radiosMarvel[i].value;
        }
    }

    for(var i=0;i<radiosDC.length; i++){
        if(radiosDC[i].checked){
            saida+= "\n" + radiosDC[i].value;
        }
    }
    alert(saida);
}
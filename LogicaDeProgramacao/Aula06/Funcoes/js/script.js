
// function principal(){

//     let temp=parseFloat(document.getElementById("grausF").value);
//     let escala = document.getElementById("escala").value;
//     let tempConvertida=0;
    
//     if(escala=="F" || escala=="f"){
//         tempConvertida=paraCelsius(temp);
//         alert(`Temperatura em graus C=${tempConvertida.toString()}`);
//     }else{
//         tempConvertida=paraFahrenheit(temp);
//         alert(`Temperatura em graus F=${tempConvertida.toString()}`);
//     }
// }


// function paraCelsius(f){    
//     let c=(5/9)*(f-32);
//     return c;
//     //alert(`Temperatura em graus C=${c.toString()}`)
// }

// function paraFahrenheit(c){    
//     let f=(c*9/5)+32;
//     return f;

//     //alert(`Temperatura em graus F=${f.toString()}`)
// }

// (
//     function(){
//         alert("Executei sem ser chamado.");
//     }
// )();

// function principal(){

// }


// function efetuarVenda(valorCompra,descontos,frete){
//     let valorFinal=(valorCompra-descontos)+frete;
// }

// function frutas(){
//     let texto;
//     for(let i=0;i<arguments.length;i++){
//         texto+=(arguments[i] + "<br>");
//     }
//     alert(texto)
// }
// frutas("Laranja", "Maça", "Kiwi", "Mamão", "Pera");

// function frutas(a,b,...c){
//     alert(a);
//     alert(b);
//     alert(c);
// }
// frutas("Laranja", "Maça", "Kiwi", "Mamão", "Pera");

// function retorna(a=2){
//     return a;
// }

// alert(retorna(3));
// alert(retorna());
// function gravarAluno(nome,telefone, cidade="São Paulo"){
//     return `${nome}, ${telefone}, ${cidade}`;
// }

// alert(gravarAluno("Alex","2222-2222"));
// alert(gravarAluno("Eduardo", "333-333", "Guarulhos"));

// const pessoa={
//     nome:"Alex",
//     idade:45
// }

// function exibir(x){
//     alert(`${x.nome}, ${x.idade}`);
// }

// exibir(pessoa);

// function minhaFuncao(){
//     minhaVariavel="Variável no escopo da função"
//     return minhaVariavel;
// }

// alert(minhaFuncao());
// alert(minhaVariavel);

const valores=[100,30,20];

function minhaFuncao(primeiro,soma){    
    return primeiro-soma;
}

alert(valores.reduce(minhaFuncao));

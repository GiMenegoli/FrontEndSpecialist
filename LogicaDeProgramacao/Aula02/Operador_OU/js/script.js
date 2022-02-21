let valorCompra=parseFloat(prompt("Valor da compra:"));
let cupom=prompt("Cupom Desconto");
let valorFinal;

if(valorCompra>1000 || cupom=="DESCONTO20"){
    valorFinal=valorCompra-(valorCompra*0.2)
}else{
    valorFinal=valorCompra;
}
alert(`Valor final da compra: R$${valorFinal}`)
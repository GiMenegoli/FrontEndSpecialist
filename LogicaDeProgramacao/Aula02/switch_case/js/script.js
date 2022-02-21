let codigo=parseInt(prompt("Digite o codigo"));
let produto;

switch(codigo){
    case 1:
        produto="Coca-cola"
    break;
    case 2:
        produto="Sorvete"
    break;
    case 3:
        produto="Chocolate"
    break;
    case 4:
        produto="Biscoito"
    break;
    default:
        produto="Código Inválido!!"
    break;

   
}
alert(produto);
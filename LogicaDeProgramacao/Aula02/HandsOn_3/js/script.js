let l1=parseInt(prompt("Digite o lado 1:"));
let l2=parseInt(prompt("Digite o lado 2:"));
let l3=parseInt(prompt("Digite o lado 3:"));

if(l1<l2+l3 && l2<l1+l3 && l3<l1+l2){
    if(l1==l2 && l2==l3){
        document.getElementById("saida").innerHTML="Triangulo Equilatero";
    }else if(l1!=l2 && l1!=l3 && l2!=l3){
        document.getElementById("saida").innerHTML="Triangulo Escaleno";
    }else{
        document.getElementById("saida").innerHTML="Triangulo Isosceles";

    }
}else{
    document.getElementById("saida").innerHTML="Os valores informados não formam um triangulo";

}
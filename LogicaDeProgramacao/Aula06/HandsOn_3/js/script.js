let numero = parseInt(prompt("Digite um número para ver o fatorial:"));
alert(verificarFatorial(numero).toString());


function verificarFatorial(valor) {
    let fat = 1;
    let i = 1;
    while (i < valor) {
        fat = fat * i;
        i++;
    }
    return fat.toString();
}
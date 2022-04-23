const Aluno = require('../Aluno');

const aluno123 = new Aluno("Roberto", "123");
aluno123.nome = "Rubens";
aluno123.nota = 8.5;
aluno123.nota = 5.5;

aluno123.mediaProva();
let isAprovado = aluno123.alunoAprovado();

// console.log("Media = " + aluno123.media)
if(isAprovado){
    console.log(aluno123.nome + " APROVADO");
}else{
    console.log(aluno123.nome + "Não Aprovado");
}
aluno123.salvarMedia();
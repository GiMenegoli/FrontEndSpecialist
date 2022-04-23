const Aluno = require("./Aluno");

const x = ['a', 'b', 'c'];

console.log(x[0]);

const [y,z,a] = x;
console.log(y);
console.log(z);
console.log(a);

const infoAluno = ['José', "Silva", '123'];

const [nomeAluno, sobrenomeAluno, matriculaAluno] = infoAluno;
const aluno123 = new Aluno();
aluno123.nota = 5;
aluno123.nota = 8;
aluno123.nota = 9;

const [mensal1, mensal2, substitutiva] = aluno123.nota;
console.log("Mensal 1 = "+ mensal1);
console.log("Mensal 2 = "+ mensal2);
console.log("Substitutiva 1 = "+ substitutiva);
console.log(nomeAluno);

const { nome, sobrenome } = { nome: "José", sobrenome : "Silva"}
console.log(nome);
console.log(sobrenome);


// const {nome, matricula, nota} = new Aluno();
// nota = 5;
// nota = 8;
// nota = 9;

// const [mensal1_1, mensal2_2, substitutiva_2] = nota;
// console.log("Mensal 1 = "+ mensal1_1);
// console.log("Mensal 2 = "+ mensal2_2);
// console.log("Substitutiva 1 = "+ substitutiva_2);
// console.log("Mensal 1 = "+ substitutiva);


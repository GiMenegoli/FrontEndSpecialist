const Aluno = require("./Aluno");

const testAwait = async() => {
    console.log("Dentro Test Await");
    let retornoMedia = await mediaProvaAwait();
    console.log(retornoMedia);
}

const mediaProvaAwait = async() =>{
    for (let index = 0; index < 1000000000; index++) {
    }

    return 1000;
}

const aluno = new Aluno();
aluno.nota = 7;
aluno.nota = 4;

aluno.mediaProva()
console.log("Pos Sincrono");

testAwait();
console.log("Spinner");

aluno.mediaProvaPromises()
.then((value) =>{
    console.log("Sucesso => " + value);

}).catch((value) =>{
    console.log("Erro =>" + value);

})




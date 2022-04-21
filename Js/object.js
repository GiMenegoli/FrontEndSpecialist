const pessoa = {
    nome: "José",
    sobrenome: "Pedro",
    telefone: "11123435473",
    cpf: "121321313",
    retornaNomeCompleto: () =>{
        return nome+" "+ sobrenome
    },
    buscarCPFComMascara: () =>{
        return '101.222.333-80'
    }
};

const info = {
    info1: 1,
    info2: "AAAA",
    info3: [1,2,3],
    info4: {
        props:1,
        props:2
    }
};

const str = JSON.stringify(info);
console.log(str);
const obj1 = JSON.parse(str);
console.log(obj1);

pessoa.nome="Rubens";
console.log(pessoa);

const info2 = {
    info1: 1,
    info2: "AAAA",
    info3: [1,2,3],
    info4: {
        props:1,
        props:2
    },
    abrir: (param1) => {
        console.log(param1)

    }
};

info2.abrir("Teste 1");
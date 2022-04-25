const test = async () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            // resolve("Teste");
            reject("Timeout");
        }, 2000)
    })
}

const info = test()
    .then((value) => {
        console.log("Sucesso ->" + value);
    }).catch((value) => {
        console.log("Erro ->" + value);
    });

console.log("Spinner");


// try {
//     const info = test();
//     console.log(info);

// } catch (error) {

// }
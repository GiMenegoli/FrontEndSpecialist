const test = () =>{
    console.log("Rodando");
}

// setTimeout(test, 1000);
setInterval(() =>{
    test();
}, 1000)
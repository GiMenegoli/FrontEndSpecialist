const test = async () =>{
    let info = 0;
    for (let index = 0; index < 1000000000; index++) {
        info++;
        
    }
    return info;
    // setTimeout(() =>{

    // },2000)
}

const teste2 = async() =>{
    let info = await test();
    console.log("Resultado Info = " + info);

};

teste2();
console.log("Spinner");

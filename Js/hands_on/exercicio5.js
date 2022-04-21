const addInfo = (a,b, ...c) =>{
    console.log(a);
    console.log(b);
    console.log(c);

    const arr = [a,b];
    const arr2 = arr.concat(c);
    return arr2.join();

}

console.log(addInfo(1,2,3));
console.log(addInfo(1,2,3,4,5));
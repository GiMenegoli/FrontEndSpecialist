const arr = ['Pedro', 'Paulo', 'Felipe', 'Thiago', 'Gustavo'];
const arr1 = ["A", "B", "C"];

console.log("Array:",arr);
console.log("Array 1:",arr1);

arr2 = arr.concat(arr1);
console.log("Array concatenado: ", arr2);

arr2.push("1");
arr2.push("2");
console.log("Array com push: ",arr2);

arr2.shift();
console.log("Array com shift: ",arr2)

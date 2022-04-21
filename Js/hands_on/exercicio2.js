const a = ["Ana", "Jose", "Amanda", "Alberto", "Bianca"];

const arrFilter = a.filter((element) => {
    return element[0].toLowerCase() === "a"
})

console.log(arrFilter);
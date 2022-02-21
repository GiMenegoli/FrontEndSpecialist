let kmIncial=parseFloat(prompt("Digite os KM Incio:"));
let kmFinal=parseFloat(prompt("Digite os KM Final:"));
let abastecido=parseFloat(prompt("Digite Quanto foi abastecido:"));
let resultado = (kmFinal - kmIncial)/abastecido;

alert(`Este veiculo faz ${resultado}Km por litro`);
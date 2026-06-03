let nomes = [];
let idades = [];
let resultado = "";

for (let i = 0; i < 9; i++) {
    nomes.push(prompt("Digite o nome:"));
    idades.push(Number(prompt("Digite a idade:")));
}

for (let i = 0; i < 9; i++) {
    if (idades[i] < 18) {
        resultado += nomes[i] + " - " + idades[i] + " anos\n";
    }
}

alert("Menores de idade:\n\n" + resultado);
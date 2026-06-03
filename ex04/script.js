let vetor1 = [];
let vetor2 = [];
let resultado = [];

for (let i = 0; i < 5; i++) {
    vetor1.push(Number(prompt("Digite um número para o Vetor 1:")));
}

for (let i = 0; i < 5; i++) {
    vetor2.push(Number(prompt("Digite um número para o Vetor 2:")));
}

for (let i = 0; i < vetor1.length; i++) {

    if (vetor2.includes(vetor1[i]) &&
        !resultado.includes(vetor1[i])) {

        resultado.push(vetor1[i]);
    }

}

alert("Interseção: " + resultado);
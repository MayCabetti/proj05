let numeros = [];
let soma = 0;
let media = 0;
let acimaMedia = "";

for (let i = 0; i < 8; i++){
    let valor = prompt("Insira um número");
    numeros.push(Number(valor));
}

for (let i = 0; i < numeros.length; i++){
    soma +=numeros[i];
}

media = soma / 8;

alert("A média é: " + media);

for (let i = 0; i < numeros.length; i++) {
    if (numeros[i] > media) {
        acimaMedia += numeros[i] + "\n";
    }
}

alert(
    "Média: " + media +
    "\n\nValores acima da média:\n" +
    acimaMedia
);
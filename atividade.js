var nome = prompt("Qual é o seu nome?");
var idade = parseInt(prompt("Qual é a sua idade?"));
var carteira = prompt("Você tem carteira de habilitação?").toLowerCase();

function avaliacao() {
    alert("Vamos avaliar se você pode dirigir!");
    if (carteira === "sim") {
        pode = true;
    } else if (carteira === "não") {
        pode = false;
    }
}

avaliacao();

var frase = (nome, idade) => `Seu nome é ${nome} e você tem ${idade} anos!`;

function verificarIdade(idade) {
    const idadeMinima = 18;

    if (idade >= idadeMinima && pode === true) {
        return "Pode dirigir.";
    } else {
        return "Não pode dirigir";
    }
}

const resultado = verificarIdade(idade);

if (resultado === "Pode dirigir.") {
    alert("Você pode dirigir!");
} else {
    alert("Você não pode dirigir!");
}




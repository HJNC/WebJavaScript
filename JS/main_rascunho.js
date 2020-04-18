var nome = "Helio";
var frase = "Hoje é segunda Feira";

alert("Seja bem Vindo! " + nome);

//vai mostrar o nome no console
console.log(nome);

//replace troca uma palavra por outra
console.log(frase.replace("segunda", "quinta"));

//toUpperCase deixa tudo maiusculo
console.log(frase.toUpperCase());

//cria-se uma lista
var lista = ["maça", "pera", "laranja"];

//adiciona-se na lista
lista.push("pera");
//remove o ultimo
lista.pop()

//imprime a lista
console.log(lista);

//mostra o tamanho da lista
console.log(lista.length)

//imprime a lista invertida
console.log(lista.reverse())

//transforma em string
console.log(lista.toString())

//transforma virgula em simbolo
console.log(lista.join(" - "))

//dicionario
var fruta = { nome: "Maça", cor: "Vermelha" };

//imprime caracteristica
console.log(fruta.nome)

//dicionario-lista
var frutaa = [{ nome: "Maça", cor: "Vermelha" }, { nome: "uva", cor: "roxa" }];
console.log(frutaa[0].nome);

//exibir caixa de texto
var idade = prompt("Qual sua idade?");

if (idada >= 18) {
    alert("Maior de idade");
} else {
    alert("Menor de idade")
}

//data
var d = new Date();
console.log(d);
console.log(d.getDay());

function soma(n1, n2) {
    return n1 + n2;
}


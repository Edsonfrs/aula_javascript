/*
var nome = "Edson Souza";
var num1 = 5;
var num2 = 3

var frase =  "O Japão é o melhor time do mundo.";

//alert(nome + " tem " + idade + " anos.");

//alert(idade + idade2);

/*
console.log(nome);
console.log(frase);
console.log(frase.replace("Japão","Brasil"));
console.log(frase.toUpperCase());
console.log(frase.toLowerCase());

console.log("Numbers........................")

console.log(num1 + " + " + num2 + " = " + (num1 + num2));
console.log(num1 + " x " + num2 + " = " + (num1 * num2));
console.log(num1 + " - " + num2 + " = " + (num1 - num2));
console.log(num1 + " / " + num2 + " = " + (num1 / num2));

console.log("Arrays (listas)........................");

var lista = ["maçã", "pera", "banana", "laranja"];

lista.push("uva"); /* <- Incluindo mais um elemento na lista.*/
/*
lista.pop(); /* <- Retira o último elemento de uma lista.*/
/*
lista.push("amora", "abacaxi") /* <- Incluindo mais dois elementos na lista.*/
/*
console.log(lista);
console.log("Elemento índice 0: " + lista[0]);
console.log("Elemento índice 1: " + lista[1]);
console.log("Elemento índice 2: " + lista[2]);
console.log("Elemento índice 3: " + lista[3]);
console.log("Elemento índice 4: " + lista[4]);
console.log("Elemento índice 5: " + lista[5]);
console.log("Tamanho do array: " + lista.length);
/*console.log("Array reverso: " + lista.reverse());*/
/*
console.log("Array convertido em string: " + lista.toString());
console.log(lista.join(" | ")); /* Trocando o separado de "," para "|"*/
/*

console.log("Dictionary (dicionário)........................");

var fruta = {nome: "maçã", cor: "vermelha"};

/*console.log(fruta);
console.log(fruta.nome);
console.log(fruta.cor);*/
/*
frutas = [
  {nome: "maçã", cor: "vermelha"}, 
  {nome: "banana", cor: "amarela"}, 
  {nome: "uva", cor: "verde"},
  {nome: "abacate", cor: "verde"}, 
  {nome: "laranja", cor: "laranja"}
];

console.log(frutas);
*/


console.log("Laços de repetição........................");

/*
var ano_nascimento = prompt("Digite o ano do seu nascimento: ") 
var ano_atual = 2021;
var idade = (ano_atual - ano_nascimento);

if ( idade >= 18 ) {
  console.log("Idade " + idade + ". Maior de idade ");
} else {
  console.log("Idade " + idade + ". Menor de idade");
}

*/
/*
var count1 = 0;
var count2 = 0;

while (count1 <= 5) {
  console.log(count1 + " Oi");
  count1 = count1 + 1; 
  
}
console.log("................................")

while (count2 <= 5) {
  console.log(count2);
  count2++
  
}
/*


/*
var count;

for (count = 0; count <= 5; count++) {
  console.log("Contando " + count);
};
*/
/*

Estudando datas 

var d = new Date();

console.log(d);
console.log(d.getMonth()+1);
console.log(d.getDate());
console.log(d.getFullYear());
console.log("Data: " + d.getDate() + "/" + (d.getMonth()+1) + "/" + d.getFullYear());

*/

// Funções
/*
function soma(n1, n2) {
  return n1 + n2;
}


function icms(vlr_total, perc_icms ) {
  return vlr_total * (perc_icms / 100);
}

function total(vlr_total, perc_icms) {
  return vlr_total + (vlr_total * (perc_icms / 100));
  
}

console.log(soma(5, 10));
console.log("Valor ICMS: " + icms(5000, 21));
console.log("Valor Total: " + total(5000, 21));
*/

function validaIdade(idade) {
  var validar;
  if (idade >= 18) {
    validar = true;
  } else {
    validar = false;
  }
  return validar;
}

var idade = prompt("Qual sua idade?");
console.log(validaIdade(idade));






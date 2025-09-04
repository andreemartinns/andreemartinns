// Ex 1 
let nome = prompt("Qual é o seu nome?")
console.log("Olá, " + nome + "Seja bem-vindo!")

// Ex 2 
let idade = prompt("Qual é a sua idade?")
idade = Number(idade)

if (idade >= 18) {
  console.log("Você é maior de idade")
} else {
  console.log("Você é menor de idade")
}

// Ex 3
let comparacao = prompt ("Digite uma nova idade")
if (idade >= comparacao) {
  console.log("A primeira pessoa é mais velha.")
} if (comparacao >= idade) {
  console.log("A segunda pessoa é mais velha.")
} 

// Ex 4 
let numero = Number prompt("Digite um número:");

if (numero % 2 === 0) {
  console.log("O número " + numero + " é par.");
} else {
  console.log("O número " + numero + " é ímpar.");
}


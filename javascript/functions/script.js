// 1 - Crie uma função para verificar se um valor é Truthy 

function isTruthy(dado) {
  return !!dado
}

console.log(isTruthy(1));

// 2 - Crie uma função matemática que retorne o perímetro de um quadr
//  *lembrando: perímetro é a soma dos quatro lados do quadrado* 

function areaQuadrado(lado) {
  return lado * 4;
}

console.log('Soma dos 4 lados do quadrado =', areaQuadrado(5));

 
// 3 - Crie uma função que retorne o seu nome completo. 
// Ela deve possuir os parâmetros: nome e sobrenome 

function nomeCompleto(nome, sobrenome) {
  return nome + ' ' + sobrenome;
}

console.log(nomeCompleto('gabriel','oliveira'));

 
// 4 - Crie uma função que verifica se um número é par 

function isEven(numero) {
  if(numero % 2 === 0) {
    return true;
  } else {
    return false;
  }
}

console.log(isEven(5));
console.log(isEven(10));
 
// 5 - Crie uma função que retorne o tipo de dado do argumento passado nela (typeof) 
function tipo(dado) {
  return typeof(dado);
}

console.log("O tipo é: ", tipo(''));

 
// 6 - addEventListener é uma função nativa do JavaScript. O primeiro parâmetro é o evento que ocorre e o segundo o Callback.
// Utilize essa função para mostrar no console o seu nome completo quando o evento 'scroll' ocorrer.

addEventListener("click", function() {
  console.log('Gabriel Oliveira');
});

// Corrija o erro abaixo

var totalPaises = 193;

function precisoVisitar(paisesVisitados) {
  return `Ainda faltam ${totalPaises - paisesVisitados} paises para visitar`;
}

function jaVisitei(paisesVisitados) {
  return `Já visitei ${paisesVisitados} do total de ${totalPaises} paises`;
}

console.log(precisoVisitar(20));


var nome = "Gabriel";

nome.length; // 5
nome.charAt(1); // 'n'
nome.replace("el", "elo"); // 'Gabrielo'
nome; // 'Gabriel'

console.log(nome.toUpperCase());
console.log(nome.toLowerCase());
console.log(nome.replace("Gabriel", "oliveira"));

// funções
function areaQuadrado(lado) {
  return lado * lado;
}

areaQuadrado.toString();
//"function areaQuadrado(lado) {
//  return lado * lado;
//}"

areaQuadrado.length; // 1

// Elementos do DOM

var btnClique = document.querySelector(".btn-clique");

btnClique.addEventListener("click", function () {
  btnClique.textContent = "Clicou!";
});

btnClique.addEventListener("mouseover", function () {
  btnClique.style.backgroundColor = "yellow";
});

btnClique.addEventListener("mouseout", function () {
  btnClique.style.backgroundColor = "red";
});

function areaQuadrado(lado) {
  return lado * lado;
}

console.log(areaQuadrado(10));

function pi() {
  return 3.14;
}

//IMC
function imc(peso, altura) {
  const imc = peso / (altura * altura);
  return imc;
}

console.log(imc(65, 1.65));

// Cor favorita
function corFavorita(cor) {
  if (cor === "azul") {
    return "Você gosta do céu";
  } else if (cor === "verde") {
    return "Você gosta do mato";
  } else {
    return "Você não gosta de nada";
  }
}

console.log(corFavorita("verde"));

// Função de mostrar contagem de cliques
addEventListener("click", function () {
  console.log("Clicou");
});

// retorna ou não
function imc2(peso, altura) {
  const imc = peso / altura ** 2;
  console.log(imc);
}

imc2(80, 1.7); // retorna o imc
// console.log(imc2(1000, 1.7));
// retorna o imc e undefined

function terceiraIdade(idade) {
  if (typeof idade !== "number") {
    return "Por favor preencha um número";
  } else if (idade >= 60) {
    return true;
  } else {
    return false;
  }
  
}

console.log(terceiraIdade("oi"));


function faltaVisitar(paisesVisitados) {
    var totalPaises = 193;
    return `Falta visitar ${totalPaises - paisesVisitados} paises`;
}

console.log(faltaVisitar(30));


var profissao = 'Programador';

function dados() {
    var nome = 'Gabriel';
    var idade = 28;
    function outrosDados() {
        var endereco = 'João Pessoa';
        var idade = 29;
        return `${nome}, ${idade}, ${endereco}, ${profissao} `;
    }
    return outrosDados();
}

console.log(dados());


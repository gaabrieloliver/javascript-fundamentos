var pessoa = {
  nome: "Gabriel",
  idade: 29,
  profissao: "Dev",
  possuiFaculdade: true,
};

pessoa.nome; // 'Gabriel'
pessoa.possuiFaculdade; // true

var quadrado = {
  lados: 4,
  area(lado) {
    return lado * lado;
  },
  perimetro(lado) {
    return this.lados * lado;
  },

  cinco() {
    return 5;
  },
};

quadrado.lados; // 4
quadrado.area(5); // 25
quadrado.perimetro(5); // 20

Math.PI; // 3.14
Math.random(); // número aleatório

var pi = Math.PI;
console.log(pi);

// Criar objeto
var carro = {};
var pessoa = {};

console.log(typeof carro);

// Dot Notation Get
var menu = {
  width: 800,
  height: 50,
  backgroundColor: "#84E",
};

menu.color = "blue";

menu.esconder = function () {
  console.log("Escondi");
};

var bg = menu.backgroundColor; // '#84E'

//Dot Notation Set

menu.backgroundColor = "#000";

// Adicionar propriedades e métodos

// Crie um objeto com os seus dados pessoais

var dados = {
    nome: 'Gabriel',
    sobrenome: 'Oliveira',
    idade: '29',
    cidade: 'Joao Pessoa',
}

// Crie um método no objeto anterior, que mostre o seu nome completo
dados.nomeCompleto = function() {
    return `${this.nome} ${this.sobrenome}`
}

// Modifique o valor da propriedade preco para 3000

var carro = {
    preco: 1000,
    portas: 4,
    marca: 'Audi',
}

carro.preco = 3000;
console.log(carro.preco);


// Crie um objeto de um cachorro que represente um labrador, 
// preto com 10 anos, que late ao ver um homem

var cachorro = {
    raca: 'labrador',
    cor: '#000',
    idade: 10,
    latir(pessoa) {
        if(pessoa === 'homem') {
            return 'Au au';
        } else {
            return 'Abanando o rabo'
        }
    },
}

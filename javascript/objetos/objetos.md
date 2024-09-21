## Objetos

Conjunto de variáveis e funções, que são chamadas de propriedades e métodos.

```javascript
var pessoa = {
    nome: 'Gabriel',
    idade: 29,
    profissao: 'Dev',
    possuiFaculdade: true,
}

pessoa.nome; // 'Gabriel'
pessoa.possuiFaculdade; // true
```

*Propriedades e métodos consistem em nome (chave) e valor*

## Métodos

É uma propriedade que possui uma função no local do seu valor.

```javascript
 var quadrado = { 
  lados: 4, 
  area: function(lado) { 
    return lado * lado; 
  }, 
  perimetro: function(lado) { 
    return this.lados * lado; 
  }, 
} 
 
quadrado.lados; // 4 
quadrado.area(5); // 25 
quadrado.perimetro(5); // 20 
```

 *O this é o próprio objeto, é uma forma simples de acessar o objeto sem precisar ficar escrevendo o nome do objeto*

 ## Métodos

 Abreviação de ```area: function() {}``` para area```() {}```, no
 ES6+

 ```javascript
  var quadrado = { 
  lados: 4, 
  area(lado) { 
    return lado * lado; 
  }, 
  perimetro(lado) { 
    return this.lados * lado; 
  }, 
}
 ```

 ## Organizar o Código
 Objetos servem para organizar o código em pequenas partes
 reutilizáveis.

 ```javascript
 Math.PI; // 3.14 
Math.random(); // número aleatório 
 
var pi = Math.PI; 
console.log(pi); // 3.14 
 ```

 *```Math``` é um objeto nativo de
 JavaScript. Já percebeu que 
```console``` é um objeto e ```log()``` um
 método?*

 ## Criar um Objeto
 Um objeto é criado utilizando as chaves ```{}```

 ```javascript
var carro = {}; 
var pessoa = {}; 
 
console.log(typeof carro); // 'object' 

 ```

 ## Dot Notation Get
 Acesse propriedades de um objeto utilizando o ponto ```.``` 

 ```javascript
 var menu = { 
  width: 800, 
  height: 50, 
  backgroundColor: '#84E', 
} 
 
var bg = menu.backgroundColor; // '#84E'
 ```

 ## Dot Notation Set
 Substitua o valor de uma propriedade utilizando ```.``` e o ```=``` após o
 nome da mesma.

 ```javascript
 var menu = { 
  width: 800, 
  height: 50, 
  backgroundColor: '#84E', 
} 
 
menu.backgroundColor = '#000'; 
console.log(menu.backgroundColor); // '#000'
 ```

 ## Adicionar Propriedades e Métodos
 Basta adicionar um novo nome e denir o valor

 ```javascript
 var menu = { 
  width: 800, 
} 
 
menu.height = 50; 
menu.position = 'fixed'; 
 ```

 ## Palavra-chave this
 ```this``` irá fazer uma referência ao próprio objeto.

 ```javascript
 var height = 120; 
var menu = { 
  width: 800, 
  height: 50, 
  metadeHeight() { 
    return this.height / 2; 
  } 
} 
 
menu.metadeHeight(); // 25 
// sem o this, seria 60
 ```

 *this sempre fará referência ao próprio objeto*

 ## Protótipo e Herança
 O objeto herda propriedades e métodos do objeto que foi utilizado
 para criar o mesmo

 ```javascript
 var menu = { 
  width: 800, 
} 
 
menu.hasOwnProperty('width') // true 
menu.hasOwnProperty('height') // false
 ```

 *hasOwnProperty é um método de Object*

 # Exercício

 ### Crie um objeto com os seus dados pessoais

```javascript 
var dados = {
    nome: 'Gabriel',
    sobrenome: 'Oliveira',
    idade: '29',
    cidade: 'Joao Pessoa',
}
```

### Crie um método no objeto anterior, que mostre o seu nome completo
```javascript 
dados.nomeCompleto = function() {
    return `${this.nome} ${this.sobrenome}`
}
```

### Modifique o valor da propriedade preco para 3000

```javascript 
var carro = {
    preco: 1000,
    portas: 4,
    marca: 'Audi',
}

carro.preco = 3000;
console.log(carro.preco);
```


### Crie um objeto de um cachorro que represente um labrador, preto com 10 anos, que late ao ver um homem

```javascript 
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
```

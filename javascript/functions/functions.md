## Funções

Bloco de código que pode ser executado e reutilizado. Valoers podem ser passados por uma função e a mesma retorna outro valor.

```javascript
function areaQuadrado(lado) {
    return lado * lado;
}

areaQuadrado(4) // 16
areaQuadrado(5) // 25
areaQuadrado(2) // 4
```

*Chamada de function declaration*

## Parâmetros e Argumentos

Ao ```criar``` uma função, você pode definir ```parâmetros```.
Ao ```executar``` uma função, você pode passar ```argumentos```.

```javascript
// peso e altura são os parâmetros
function imc(peso, altura) {
    const imc = peso / (altura ** 2);
    return imc;
}

imc(80, 1.80) // 80 e 1.80 são os argumentos
imc(60, 1.70) // 60 e 1.70 são os argumentos
```

*Separar por vírgula cada parâmetro. Você pode definir mais de um parâmetro ou nenhum também*

## Parênteses executa a função

```javascript
function corFavorita(cor) {
    if(cor === 'azul') {
        return 'Você gosta do céu'
    } else if(cor === 'verde') {
        return 'Você gosta de mato';
    } else {
        return 'Você não gosta de nada';
    }
}

corFavorita(); // retorna 'Você não gosta de nada'
```

*Se apenas definirmos a função com o function e não executarmos a mesma, nada que estiver dentro dela irá acontecer*

## Argumentos podem ser funções

Chamadas de Callback, geralmente são funções que ocorrem após algum evento.

```javascript
addEventListener('click', function() {
    console.log('Clicou');
});

// A função possui dois argumentos
// Primeiro é a string 'click'
// Segundo é uma função anônima
```
O código acima é a mesma coisa que:

```javascript
function mostraConsole() {
    console.log('Clicou');
}

addEventListener('click', mostraConsole);
```
*Funções anônimas são aquelas em que o nome da função não é definido, escritas como ```function() {}``` ou ```() => {}```*

## Pode ou não retornar um valor

Quando não definimos o return, ela irá retornar undefined. O código interno da função é executado normalmente, independente de existir valor de return ou não.

```javascript
function imc(peso, altura) {
    const imc = peso / (altura ** 2);
    console.log(imc);
}

imc(65, 1.65); // retorna o imc
console.log(imc(65, 1.65)); // retorna o imc e undefined
```

## Valores retornados

Uma função pode retornar qualquer tipo de dado e até outras funções.

```javascript
function terceiraDIdade(idade) {
    if(typeof idade !== 'number') {
        return 'Informe a sua idade!';
    } else if(idade >= 60) {
        return true;
    } else {
        return false;
    }
}
```

*Cuidado, retornar diferentes tipos de dados na mesma função não é uma boa ideia.*

## Escopo

Variáveis e funções definidas dentro de um bloco {}, não são visíveis fora dele.

```javascript
function precisoVisitar(paisesVisitados) {
    var totalPaises = 193;
    return `Ainda faltam ${totalPaises - paisesVisitados} paises`
}
console.log(totalPaises); // erro, totalPaises não definido
```

## Escopo Léxico

Funções conseguem acessar variáveis que foram criadas no contexto ```pai```

```javascript
var profissao = 'Designer';

function dados() {
    var nome = 'Gabriel';
    var idade = 28;
    function outrosDados() {
        var endereco = 'João Pessoa';
        var idade = 29;
        return `${nome}, `
    }
}
```

## Hoisting

Antes de executar uma função, o JS 'move' todas as funções declaradas para a memória

```javascript
imc(80, 1.7); // imc aparece no console

function imc(peso, altura) {
  const imc = peso / altura ** 2;
  console.log(imc);
}
```

 # Exercício

1 - Crie uma função para verificar se um valor é Truthy 
 
2 - Crie uma função matemática que retorne o perímetro de um quadr
 *lembrando: perímetro é a soma dos quatro lados do quadrado* 
 
3 - Crie uma função que retorne o seu nome completo. 
Ela deve possuir os parâmetros: nome e sobrenome 
 
4 - Crie uma função que verifica se um número é par 
 
5 - Crie uma função que retorne o tipo de dado do argumento passado nela (typeof) 
 
6 - addEventListener é uma função nativa do JavaScript. O primeiro parâmetro é o evento que ocorre e o segundo o Callback utilize essa função para mostrar no console o seu nome completo quando o evento 'scroll'

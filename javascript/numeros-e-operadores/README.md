### Números

```js
var idade = 28;
var gols = 1000;
var pi = 3.14; // ponto para decimal
var exp = 2e10; // 20000000000 
```
### Precisão para até 15 digítos

### Operadores Aritméticos
```js
var soma = 100 + 50; // 150
var subtracao = 100 - 50; // 50
var multiplicacao = 100 * 2; // 200
var divisao = 100 / 2; // 50
var expoente = 2 ** 4; // 16
var modulo = 14 % 5; // 4
```
### Lembrando que soma + em Strings serve para concatenar

### Operadores Aritméticos (Strings)
```js
var soma = '100' + 50; // 10050
var subtracao = '100' - 50; // 50
var multiplicacao = '100' * '2'; // 200
var divisao = 'Comprei 10' / 2; //NaN (Not a Number)
```
### É possível verificar se uma variável é NaN ou não com a função isNaN()

### NaN = Not a Number
```js
var numero = 80;
var unidade = 'kg';
var peso = numero + unidade; // '80kg'
var pesoPorDois = peso / 2 // NaN (Nota a Number)
```

### A ordem importa
### Começa por multiplicação e divisão, depois por soma e subtração.
```js
var total1 = 20 + 5 * 2; // 30
var total2 = (20 + 5) * 2; // 50
var total3 = 20 / 2 * 5; // 50
var soma1 = 10 + 10 + 20 + 30 * 4 / 2 + 10; // 110
```
### Parênteses para priorizar uma expressão

### Operadores Aritméticos Unários

```js
var incremento = 5;
console.log(incremento++); // 5
console.log(incremento); // 6

var incremento2 = 5;
console.log(++incremento2); // 6
console.log(incremento2); // 6
```
### mesma coisa para o decremento ```--x```

### Operadores Aritméticos Unários

### O ```+``` e ```-``` tenta transformar o valor seguinte em número

```js
var frase = "Isso é um teste";
+frase; // NaN
-frase; // NaN

var idade = '28';
+idade; // 29 (número)
-idade; // -29 (número)
console.log(+idade + 5); // 33

var possuiFaculdade = true;
console.log(+possuiFaculdade); // 1
```
### O ```-``` antes de um número torna ele negativo

## Exercício
### Qual o resultado da seguinte expressão?
```js
var total = 10 + 5 * 2 / 2 + 20;

//RESPOSTA: 35
```

### Crie duas expressões que retornem NaN
```js
//RESPOSTA
var expressao1 = 'Teste' / 2;
var expressao2 = 'Teste' - 2;

console.log(expressao1, expressao2); // NaN NaN
```
### Somar a string '200' com o número 50 e retornar 250
~~~js
var soma = +'200' + 50;

console.log(soma); // 250
~~~

### Incremente o número 5 e retorne o seu valor incrementado
~~~js
var x = 5;

console.log(++x); // 6
~~~

### Como dividir o peso por 2?
```js
var numero = '80';
var unidade = 'kg';
var peso = numero + unidade; // '80kg'
var pesoPorDois = peso / 2; // NaN (Not a)

//RESPOSTA:
var numero = +'80' / 2;
var unidade = 'kg';
var peso = numero + unidade; 

console.log(peso); // 40kg
```

## Array
É um grupo de valores geralmente relacionados. Servem para guardarmos diferentes valores em uma única variável.

```javascript
var videoGames= ['Switch', 'PS4', 'XBox'];

videoGames[0] // Switch
videoGames[2] // Xbox
```
Acesse um elemento do array
utilizando [n]

## Métodos e Propriedades de um Array

```javascript
 videoGames.pop(); // Remove o último item e retorna ele
 videoGames.push('3DS'); // Adiciona ao final do array
 videoGames.length; // Quantos valores possui no array, ou comprimento.
 ```

 Existem diversos outros métodos, como map, reduce, forEach e mais.


 ## For Loop
 Fazem algo repetidamente até que uma condição seja atingida.

 ```javascript
 for (var numero = 0; numero < 10; numero++) {
    console.log(numero);
 }
 // Retorna de 0 a 9 no console
 ```

 O for loop possui 3 partes, início, condição e incremento.

 ## While Loop
 ```javascript
 var i = 0;
 while (i < 10) {
    console.log(i)
    i++;
 }
 // Retorna de 0 a 9 no console
 ```
O for loop é o mais comum
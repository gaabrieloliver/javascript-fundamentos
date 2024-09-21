## Tudo é Objeto
 Strings, Números, Boolean, Objetos e mais, possuem propriedades
 e métodos. Por isso são objetos.

```javascript
var nome = 'Gabriel'; 

nome.length; // 5 
nome.charAt(1); // 'n' 
nome.replace('el', 'elo'); // 'Gabrielo' 
nome; // 'Gabrielo' 
```

 *Uma string herda propriedades e
 métodos do construtor ```String()```*
 
## Números

```javascript
var altura = 1.8; 
 
altura.toString(); // '1.8' 
altura.toFixed(); // '2'
```

*Por um breve momento o número é
 envolvido em um Objeto
 (coerção), tendo acesso assim as
 suas propriedades e métodos*

 ## Funções

 ```javascript
  function areaQuadrado(lado) { 
  return lado * lado; 
}

areaQuadrado.toString(); 
//"function areaQuadrado(lado) { 
//  return lado * lado; 
//}" 
 
areaQuadrado.length; // 1
 ```

 ## Elementos do DOM
 *Praticamente todos os efeitos
 com JS são feitos utilizando
 propriedades e métodos de
 objetos do DOM.*

 ```html
 <a class="btn">Clique</a> 
 ```

```javascript
var btn = document.querySelector('.btn');

btn.classList.add('azul') // adiciona a classe azul 
btn.innerText; // 'Clique' 
btn.addEventListener('click', function() { 
  console.log('Clicou') 
})
``` 

## Objetos revolucionaram a programação

Web API's são métodos e propriedades que permitem a interação JavaScript e Browser.

# Exercício

## Nomeie 3 propriedades ou métodos de strings
```javascript
var nome = 'Gabriel';

nome.toLowerCase; // método
nome.toUpperCase; // método
nome.replace; // método
nome.length; // propriedade
```

## Nomeie 5 propriedades ou métodos de elementos do DOM

```javascript

var btn = document.querySelector('.btn-clique');
// addEventListener
// appendChild
// id
// innerHTML
// outerHTML

console.log(btn);
```

## Busque na web um objeto (método) capaz de interagir com o clip clipboard é a parte do seu computador que lida com o CTRL + C e CTRL + V


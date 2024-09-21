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
// Verifique se a sua idade é maior do que a de algum parente
// Dependendo do resultado coloque no console 'É maior', 'É igual', 'É menor'.

var minhaIdade = 28
var idadePrimo = 24

if(minhaIdade > idadePrimo) {
    console.log('É maior');
} else if(minhaIdade === idadePrimo ){
    console.log('É igual');
} else {
        console.log('É menor');
}

// Qual valor é retornado na seguinte expressão?

var expressão = (5 - 2) && (5 - ' ') && (5 - 2);

console.log(expressão);

// Verifique se as seguintes variáveis são Truthy ou Falsy

var nome = 'Gabriel'; 
var idade = 28; 
var possuiDoutorado = false; 
var empregoFuturo; 
var dinheiroNaConta = 0; 

console.log(!!nome, !!idade, !!possuiDoutorado, !!empregoFuturo, !!dinheiroNaConta);

// Compare o tolta de habitantes do Brasil com China (valor em milhões)

var brasil = 207;
var china = 1340;

if(brasil > china) {
    console.log('Brasil tem mais habitantes');
} else {
    console.log('Brasil tem menos habitantes');
}

// O que irá aparecer no console?
if(('Gato' === 'gato') && (5 > 2)) {
    console.log('Verdadeiro');
} else {
    console.log('Falso');
}

// O que irá aparecer no console?
if(('Gato' === 'gato') || (5 > 2)) {
    console.log('Gato' && 'Cão');
} else {
    console.log('Falso');
}


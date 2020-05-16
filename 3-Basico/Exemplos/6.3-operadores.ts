// OPERADOR AND OU &&

let valor = 10
let resultado = (valor > 5 && valor <= 10)
/**
 * O que a expressão acima diz?
 * Ela diz que se o valor for maior que 5
 * e se o valor for menor ou igual a 10 então a expressão é
 * verdadeira.
 */
console.log(resultado) //saída: true

// OPERADOR OR OU ||
let valor2 = 20
let resultado2 = (valor2 > 5 || valor2 > 25)
console.log(resultado2) // saída: true
/**
 * Nesse exemplo a condição só vai dar falso
 * se ambas as expressões forem falsas
 * por exemplo:
 */
resultado2 = (valor2 > 20 || valor2 > 25)
console.log(resultado2) // saída: false


// OPERADOR NOT OU !

let verdadeiro = true;
let negacao = !verdadeiro
console.log(negacao) // saída: false
/**
 * se pegarmos a variável negacao agora
 * e usarmos o operador NOT nela ela vai
 * ser true.
 */
console.log(`Negação: ${!negacao}`) // saída: true
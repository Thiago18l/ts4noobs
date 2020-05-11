let numero: number = 123;

console.log(numero) // saída: 123

/* diferente do Javascript você não pode associar strings a váriaveis que tenham
number em sua declaração. */

// numero = '123' // Erro!

let decimal: number = 6;
let hex: number = 0xf00d;
let binario: number = 0o1010;
let octal: number = 0o744;

console.log(decimal, hex, binario, octal)


// strings

// Strings

let cor: string = "azul"
cor = "vermelho"

console.log(cor) // saída: vermelho

let nomeCompleto: string = `Thiago Lopes`
let idade: number = 22
let frase: string = `Oi, meu nome é 
    ${nomeCompleto} e vou completar 
    ${idade + 1} anos esse ano!`

console.log(frase) // saída: Oi, meu nome é Thiago Lopes e vou completar 23 anos esse ano!




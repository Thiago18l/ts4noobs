# 3.2 Introdução
Sintaxe define um conjunto de regras para escrever programas. Toda especificação de linguagem define sua própria sintaxe. Um programa TypeScript é composto por:
- Modulos
- Funções
- Variaveis
- Declarações e expressões
- comentários

Iremos abordar todos esses conceitos neste ts4noobs.


### TypeScript é Case-Sensitive

Isso significa que Typescript diferencia letras maiúsculas e minúsculas.

### Ponto e vírgula são Opcionais

Cada linha de uma instrução é chamada de declaração, ponto e vírgula são opcionais.

```ts
let exemplo: string = "ponto e virgula são opcionais";
let exemplo2: string = "Oi tem alguém ai?" 
```

Como podemos perceber acima o uso do `;` é opcional.

Vamos começar com o tradicional Hello World como nosso exemplo:

```ts
let variavel: string =  "Hello World"
console.log(variavel) // saída: Hello World
```
No TypeScript, suportamos os mesmos tipos que você esperaria em JavaScript, com um tipo de enumeração conveniente para ajudar as coisas.

#### -> Vamos começar pelos Numbers:
Como no JavaScript, todos os números no TypeScript são valores de ponto flutuante. Esses números de ponto flutuante obtêm o número do tipo. Além de literais hexadecimais e decimais, o TypeScript também suporta literais binários e octais introduzidos no ECMAScript 2015.
```ts
let decimal: number = 6;
let hex: number = 0xf00d;
let binario: number = 0o1010;
let octal: number = 0o744;
```
<p align="center">
<i>Arquivo encontrado em: Exemplos/1-sintaxe.ts</i>
</p>

#### -> Strings
Outra parte fundamental da criação de programas em JavaScript para páginas da Web e servidores é trabalhar com dados de texto. Como em outras linguagens, usamos o tipo string para nos referir a esses tipos de dados textuais. Assim como o JavaScript, o TypeScript também usa aspas duplas (") ou aspas simples (') para envolver os dados da string.
```ts
let cor: string = "azul"
cor = "vermelho"
```
Você também pode usar template strings, que podem abranger várias linhas e ter expressões incorporadas. Essas strings são cercadas pelo caractere backtick/backquote (``), e as expressões incorporadas tem o formato `${expressao}`:
```ts
let nomeCompleto: string = `Thiago Lopes`
let idade: number = 22
let frase: string = `Oi, meu nome é ${nomeCompleto} e vou completar ${idade + 1} anos esse ano!`
```
<p align="center">
<i>Arquivo encontrado em: Exemplos/Sintaxe/1-sintaxe.ts</i>
</p>

O TypeScript tentará inferir o máximo possível das informações de tipo para fornecer o tipo
segurança com custo mínimo de produtividade durante o desenvolvimento do código. Por exemplo, no
exemplo a seguir, o TypeScript saberá que 'Variavel' é do tipo número abaixo e dará uma erro na segunda linha, como mostrado:
```ts
let variavel = 123;
variavel = '123'; // Error: Não podemos atribuir uma string para número
```
Essa inferência de tipo é bem vinda. Se você fizer coisas como as mostradas acima, no restante do seu código você não vai ter certeza de que `variavel` é um número ou uma string.
Esses problemas aparecem frequentimente em grandes bases de código com vários arquivos.
<hr>
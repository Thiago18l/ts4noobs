# 3.3 Declarações de tipo (Annotations)

Typescript como sendo uma linguagem tipada, nós podemos especificar o tipo de cada váriavel, parâmetros de funções e propriedades de objetos.

No exemplo abaixo vamos ver como declaramos um tipo de uma váriavel:
```ts
let variavel: number = 123
```
O que declaramos acima é que a váriavel é do tipo number e ela vai receber um number, se tentarmos pegar essa variavel e passar um valor que não seja um number o typescript vai mostrar um erro.
```ts
let variavel = '123' // Vai gerar um erro!
```
<p align="center">
<i>Arquivo encontrado em: Exemplos/2-declaracoes.ts</i>
</p>

## Inferência de tipo vs declaração de tipo

Básicamente a declaração de tipo é quando nós como desenvolvedores dizemos ao Typescript que tipo de valor a váriavel vai se referir.
```ts
let meuNumero: number = 10
```
<p align="center">
<i>Arquivo encontrado em: Exemplos/2-declaracoes.ts</i>
</p>

No exemplo acima estamos declarando que a váriavel meu número apenas irá atribuir a numbers, qualquer outro tipo que você atribuir a essa váriavel vai causar um erro.

Já com a inferência de tipo, o próprio Typescript tenta descobrir de que tipo é a váriavel que declaramos.
```ts
let DeixaEuDescobrir = "123"
```
<p align="center">
<i>Arquivo encontrado em: Exemplos/2-declaracoes.ts</i>
</p>
No exemplo acima vemos que não declaramos o tipo da nossa váriavel `DeixaEuDescobrir`, assim o Typescript irá descobrir de que tipo é a nossa váriavel com base no valor que está sendo atríbuido a ele.

```ts
console.log(typeof(DeixaEuDescobrir)) // saída: string.
```
<p align="center">
<i>Arquivo encontrado em: Exemplos/2-declaracoes.ts</i>
</p>
Como podemos perceber ele irá assumir que "123" é uma string e não um number.

Com base nesses exemplos fica bem fácil e simples de entender como declaramos o tipo de uma váriavel no typescript.
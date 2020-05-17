# 5.1 Tipos de Dados

O sistema de tipos representa os diferentes tipos de valores suportados pela linguagem. O sistema de tipos verifica a validade dos valores fornecidos, antes de serem armazenados ou manipulados pelo programa. Isso garante que o código se comporte conforme o esperado. O Type System também permite dicas de código mais avançadas e documentação automatizada.

O TypeScript fornece tipos de dados como parte de seu sistema de tipos opcional. A classificação do tipo de dados é a seguinte:
<h1 align="center">
  <img src="https://i.imgur.com/xadSBIF.png" alt="Tipos" width="350">
</h1>

## O Tipo Any:

O tipo `any` é o supertipo de todos os tipos no TypeScript. Denota um tipo dinâmico. Usar o tipo `any` é equivalente a desativar a verificação de tipo para uma variável.

## Tipos embutidos:

A tabela a seguir ilustra todos os tipos internos no TypeScript:
<h1 align="center">
  <img src="https://i.imgur.com/QUB99vs.png" alt="Tipos" width="350">
</h1>

**Observação** − Não há tipo inteiro no TypeScript e JavaScript.

**Null and undefined** ─ São a mesma coisa?

Os tipos de dados nulo e indefinido são frequentemente uma fonte de confusão. O nulo e indefinido não podem ser usados para referenciar o tipo de dados de uma variável. Eles só podem ser atribuídos como valores a uma variável.

No entanto, nulo e indefinido não são os mesmos. Uma variável inicializada com indefinido significa que a variável não tem valor ou objeto atribuído a ela, enquanto nulo significa que a variável foi configurada para um objeto cujo valor é indefinido.

## Tipos definidos pelo o usuário:

Tipos definidos pelo usuário incluem enums (enumerações), classes, interfaces, matrizes e tupla. Estes são discutidos em detalhes nos próximos capítulos.

##  Arrays ( Vetores )

O TypeScript, assim como o JavaScript, permite trabalhar com arrays de valores. Os tipos de arrays podem ser gravados de duas maneiras. Na primeira, você usa o tipo dos elementos seguido por `[]` para denotar um array desse tipo de elemento:

```ts
let lista: number[] = [1,2,3]
```
<p align="center">
<i>Arquivo encontrado em: Exemplos/Tipos_de_Dados/Tipos.ts</i>
</p>

Alguns recursos dos arrays: 
- Uma declaração de array aloca blocos de memória sequencial.
- Como variáveis, arrays também devem ser declarados antes de serem usados. Use a palavra-chave `let` ou `const` para declarar um array.
- A inicialização de um array refere-se ao preenchimento dos elementos do array.
- Arrays são estáticos. Isso significa que um array, uma vez inicializado, não pode ser redimensionado.

Acessando valores de um array:
```ts
console.log(lista[0]) // saída: 1
```
<p align="center">
<i>Arquivo encontrado em: Exemplos/Tipos_de_Dados/Tipos.ts</i>
</p>
Os arrays tem indíces e eles sempre começam pelo índice 0.

## Tuplas

As tuplas representam uma estrutura de dados simples parecida com um Array.

A grande diferença entra as duas é que nos array’s nós trabalhamos somente com um tipo de dado e com as tuplas com diferentes tipos. Para ficar mais claro, veja abaixo a declaração de um array de number e de uma tuple de string,number e string.

```ts
let list: number[] = [1, 2, 3] //Array comum
let list2: [string, number, boolean] = ['Oi', 2020, true]
```
<p align="center">
<i>Arquivo encontrado em: Exemplos/Tipos_de_Dados/Tipos.ts</i>
</p>

Para acessar o elemento de uma tupla, acontece da mesma forma que de um array comum.
```ts
console.log(list2[0]) // saída: Oi
```

## Enums

Uma adição muito útil ao conjunto padrão de tipos de dados do JavaScript é o `enum`. Como em idiomas como Java, um `enum` é uma maneira de atribuir nomes mais amigáveis a conjuntos de valores numéricos.

```ts
enum Color {
  Vermelho,
  Verde,
  Azul,
}
let c: Color = Color.Azul;
console.log(c)
```
<p align="center">
<i>Arquivo encontrado em: Exemplos/Tipos_de_Dados/Tipos.ts</i>
</p>

Por padrão, os `enum` começam a numerar seus membros a partir de 0. Você pode alterar isso definindo manualmente o valor de um de seus membros. Por exemplo, podemos iniciar o exemplo anterior em 2 em vez de 0:

```ts
enum Color {
    Vermelho = 2,
    Verde = 3,
    Azul = 5,
}
let c: Color = Color.Azul;
console.log(c) // saída: 5
```
<p align="center">
<i>Arquivo encontrado em: Exemplos/Tipos_de_Dados/Tipos.ts</i>
</p>

## Any

Podemos precisar descrever o tipo de variáveis ​​que não sabemos quando estamos escrevendo um aplicativo. Esses valores podem ser provenientes de conteúdo dinâmico, por exemplo, do usuário ou de uma biblioteca de terceiros. Nesses casos, queremos desativar a verificação de tipo e deixar que os valores passem pelas verificações em tempo de compilação. Para fazer isso, rotulamos estes com qualquer tipo:

```ts
let semCerteza: any = 4;
semCerteza = "Pode ter uma string aqui!"
semCerteza = false
console.log(semCerteza) // saída: false
```
<p align="center">
<i>Arquivo encontrado em: Exemplos/Tipos_de_Dados/Tipos.ts</i>
</p>

O any type é uma maneira poderosa de trabalhar com o JavaScript existente, permitindo que você inclua e desative gradualmente a verificação de tipo durante a compilação. Você pode esperar que o Object desempenhe um papel semelhante, como ocorre em outros idiomas. No entanto, variáveis ​​do tipo Objeto permitem apenas atribuir qualquer valor a elas. Você não pode chamar métodos arbitrários, nem mesmo os que existem.

O any type também é útil se você conhece alguma parte do tipo, mas talvez nem tudo. Por exemplo, você pode ter um array, mas o array possui uma mistura de diferentes tipos:
```ts
let lista3: any[] = [1, true, "string"]
lista[1] = 100 // Você pode alterar os tipos dentro de um array do tipo any.
console.log(lista) // saída: 100
```
<p align="center">
<i>Arquivo encontrado em: Exemplos/Tipos_de_Dados/Tipos.ts</i>
</p>

## Vazio (Void)

vazio é um pouco como o oposto de qualquer: a ausência de ter qualquer tipo. Você geralmente vê isso como o tipo de retorno de funções que não retornam um valor:

```ts
function messagem(): void {
  console.log("Oi gente!")
}
```
<p align="center">
<i>Arquivo encontrado em: Exemplos/Tipos_de_Dados/Tipos.ts</i>
</p>

## Null e Undefined

No TypeScript, tanto undefined quanto null, na verdade, têm seus próprios tipos chamados undefined e null, respectivamente. Assim como o void, eles não são extremamente úteis por conta própria:
```ts
// Não há muito mais que possamos atribuir a essas variáveis!
let indefinido: undefined = undefined;
let nulo: null = null;
```
<p align="center">
<i>Arquivo encontrado em: Exemplos/Tipos_de_Dados/Tipos.ts</i>
</p>

[Próxima Seção](./6-Operadores.md)
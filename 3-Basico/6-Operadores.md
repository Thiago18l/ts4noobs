# 6.1 Operadores

## O que é um operador?

Um operador define alguma função que será executada nos dados. Os dados nos quais os operadores trabalham são chamados operandos. Considere a seguinte expressão:
<p align="center">
<strong>7 + 5 = 12</strong>
</p>

Aqui, os valores `7`, `5` e `12` são operandos, enquanto `+` e `=` são operadores.

Os principais operadores do TypeScript podem ser classificados como:

- Operadores aritméticos
- Operadores lógicos
- Operadores relacionais
- Operadores bit a bit
- Operador ternário / condicional
- Tipo Operador

## 6.2 Operadores aritméticos

![Preview](https://i.imgur.com/p3bB7NO.png)

<p align="center">
<i>Arquivo encontrado em: Exemplos/Operadores/Aritmeticos.ts</i>
</p>

## 6.3 Operadores Lógicos

Em lógica binária, ocorrem apenas dois estados:
- Verdadeiro, representado pela letra **V**, ou pelo número 1.
- Falso, representado pela letra **F**, ou pelo número 0.

Como aqui iremos falar de lógica segue um breve exemplo sobre os símbolos que iremos útilizar aqui:

1. Operador `E` representado na computação por `&&` ou `AND` ou na lógica binária por `∧` (conectivo lógico).
2. Operador `OU` representado na computação por `||` ou `OR` ou na lógica binária por `∨`.
3. Operador `Negação` representado na computação por `!` ou na lógica binária por `¬`.

Abaixo uma tabela com exemplos:

![Preview](https://i.imgur.com/67Ik6KE.png)

<p align="center">
<i>Arquivo encontrado em: Exemplos/Operadores/Lógicos.ts</i>
</p>

## 6.4 Operadores Relacionais

Operadores relacionais testam ou definem o tipo de relacionamento entre duas entidades. Operadores relacionais retornam um valor booleano, isto é, verdadeiro / falso, veja a tabela abaixo:

![Preview](https://i.imgur.com/tfZfWkj.png)

<p align="center">
<i>Arquivo encontrado em: Exemplos/Operadores/Relacionais.ts</i>
</p>

## 6.5 Operadores bit a bit (Bitwise)

A lógica binária, ou bitwise operation é a base de todo o cálculo computacional. Na verdade, são estas operações mais básicas que constituem todo o poderio dos computadores. Qualquer operação, por mais complexa que pareça, é traduzida internamente pelo processador para estas operações. 

**Observação**: Este é um topico mais avançado da computação mas ele não é essencial para esse curso, mas caso você tenha curiosidade em saber mais sobre operadores bit a bit veja a tabela abaixo:

**Nota** - Considere **A** e **B** como variáveis de entrada e **S** como a saída.


![Preview](https://i.imgur.com/EcKKdVl.png)

<p align="center">
<i>Arquivo encontrado em: Exemplos/Operadores/Bitwise.ts</i>
</p>

# Operadores ternário / condicional

Este operador é usado para representar uma expressão condicional. O operador condicional também é chamado de operador ternário. A sintaxe é a seguinte:

```ts
Teste ? expr1 : expr2
```

- **Teste** - refere-se à expressão condicional
- **expr1** - valor retornado se a condição for verdadeira
- **expr2** - valor retornado se a condição for falsa

#### Vamos dar uma olhada no seguinte código:
```ts
let num: number = 2
const condition = num > 0 ? "verdade" : "falso"
console.log(condition) // saída: verdade
```
<p align="center">
<i>Arquivo encontrado em: Exemplos/Operadores/Ternário.ts</i>
</p>

## Operador typeof

É um operador unário. Este operador retorna o tipo de dados do operando. Veja o exemplo a seguir:

```ts
let n = 10
console.log(typeof n) // saída: number
``` 

com isso finalizamos nosso tópico sobre operadores.

[Próxima Seção](./7-Loops.md)
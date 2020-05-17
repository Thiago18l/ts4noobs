# Laços e iterações

Laços oferecem um jeito fácil e rápido de executar uma ação repetidas vezes. 

Você pode pensar em um laço de repetição como um jogo onde você manda o seu personagem andar X passos em uma direção e Y passos em outra; por exemplo, a ideia "vá 5 passos para leste" pode ser expressa em um laço desta forma:

```ts
let passo = 5
for (let i = 0; i < passo; i++) {
    console.log("ande um passo para o leste");
}
```
<p align="center">
<i>Arquivo encontrado em: Exemplos/Loops/Laços.ts</i>
</p>

Existem várias formas diferentes de laços, mas eles essencialmente fazem a mesma coisa: repetir uma ação múltiplas vezes ( inclusive você poderá repetir 0 vezes). Os vários mecanismos diferentes de laços oferecem diferentes formas de determinar quando este irá começar ou terminar. Há várias situações em que é mais fácil resolver um problema utilizando um determinado tipo de laço do que outros.

## Declaração for

Um laço for é repetido até que a condição especificada seja falsa. O laço for no TypeScript é similar ao Java e C. Uma declaração for é feita da seguinte maneira:
```
for ([expressaoInicial]; [condicao]; [incremento])
  declaracao
```
Quando um for é executado, ocorre o seguinte:

1. A expressão expressao Inicial é inicializada e, caso possível, é executada. Normalmente essa expressão inicializa um ou mais contadores, mas a sintaxe permite expressões de qualquer grau de complexidade. Podendo conter também declaração de variáveis.

2. A expressão condicao é avaliada. caso o resultado de condicao seja verdadeiro, o laço é executado. Se o valor de condicao é falso, então o laço terminará. Se a expressão condicao é omitida, a condicao é assumida como verdadeira.

3.  A instrução é executada. Para executar múltiplas declarações, use uma declaração em bloco ({ ... }) para agrupá-las.

4. A atualização da expressão incremento, se houver, executa, e retorna o controle para o passo 2.

#### Exemplo: 
```ts
for (let i = 0; i < 5; i++) {
    console.log(`O número é ${i}`)
}
```
<p align="center">
<i>Arquivo encontrado em: Exemplos/Loops/Laços.ts</i>
</p>

## Declaração do...while

A instrução do...while repetirá até que a condição especificada seja falsa.
```
do
  declaracao
while (condicao)
```

A instrução será executada uma vez antes da condição ser verificada. Para executar multiplas instruções utilize uma declaração de bloco ({ ... }) para agrupá-las. Caso a condicao seja verdadeira, então o laço será executado novamente. Ao final de cada execução, a condicao é verificada. Quando a condição contida no while for falsa a execução do laço é terminada e o controle é passado para a instrução seguinte a do...while.

#### Exemplo:

```ts
let i: number = 0;
do {
  i += 1;
  console.log(i);
} while (i < 5);
```
<p align="center">
<i>Arquivo encontrado em: Exemplos/Loops/Laços.ts</i>
</p>

## Declaração while

Uma declaração while executa suas instruções, desde que uma condição especificada seja avaliada como verdadeira. Segue uma declaração while: 

```ts
while (condicao)
  declaracao
  ```

Se a condição se tornar falsa,  a declaração dentro do laço para a execução e o controle é passado para a instrução após o laço.

O teste da condição ocorre antes que o laço seja executado. Desta forma se a condição for verdadeira o laço executará e testará a condição novamente. Se a condição for falsa o laço termina e passa o controle para as instruções após o laço.

Para executar múltiplas declarações, use uma declaração em bloco ({ ... }) para agrupar essas declarações.

#### Exemplo: 
```ts
let condicao = 0;

while (condicao < 3) {
    console.log(`Condição: ${condicao}`)
    condicao++;
}
```
<p align="center">
<i>Arquivo encontrado em: Exemplos/Loops/Laços.ts</i>
</p>


a cada iteração, o laço incrementa `condicao` e enquanto ele for menor que 3 a condição continua sendo verdadeira, depois dele executar a condição pela terceira vez `condicao` não será mais verdadeira, então o laço encerrará.

**Nota** - Evite laços infinitos, tenha certeza que a condição do laço eventualmente será falsa, caso contrário, o laço nunca terminará.

## Declaração break

Use break para terminar laços, switch:

- Quando você utiliza break sem um label, ele encerrará imediatamente o laço mais interno while, do-while, for, ou switch e transferirá o controle para a próxima instrução.

segue a sintaxe do break:

-  break;

#### Exemplo:
```ts
for (i = 0; i < 5; i++) {
    console.log(`Número atual: ${i}`)
    if (i == 3) { // Iremos abordar o if ainda, não se preocupe.
        console.log("Opa encontrei o 3!")
        break;
    }
} // Quando ele encontrar o número 3 o programa vai parar.
```
<p align="center">
<i>Arquivo encontrado em: Exemplos/Loops/Laços.ts</i>
</p>

## Declaração continue

A declaração continue pode ser usada para reiniciar uma instrução while, do-while, for.
- Quando você utiliza continue ele encerrará a iteração atual mais interna de uma instrução while, do-while, ou for e continuará a execução do laço a partir da próxima iteração. Ao contrário da instrução break, continue não encerra a execução completa do laço. Em um laço while, ele voltará para a condição. Em um laço for, ele pulará para a expressão de incrementação.

sintaxe do continue:
- continue

#### Exemplo: 
```ts
let acumulo: number = 0;
let k: number = 0;
while (k < 5) {
    console.log(`Numero: ${k}`)
    k++;
    if (k == 3) {
        continue;
    }
    acumulo += k;
    console.log(`Acumulo: ${acumulo}`)
}
```
<p align="center">
<i>Arquivo encontrado em: Exemplos/Loops/Laços.ts</i>
</p>

O exemplo acima mostra um laço while utlizando continue que executará quando o valor de `k` for igual a 3. Desta forma, `acumulo` recebe os valores um, 3, 7, e 12.

[Próxima Seção](./8-Arrays_e_Tuplas.md)
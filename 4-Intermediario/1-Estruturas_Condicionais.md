# 4.1 Estruturas condicionais


## Comando If
O comando if (que significa **se** em português) permite que uma parte do programa seja executada apenas quando uma condição for verdadeira. A sintaxe do comando if é a seguinte:

```ts
if (condição) {
    comando_1
    comando_2
    ...
}
comando_apos_if
```

Apenas caso a condição for verdadeira, o bloco contendo os comandos comando_1, comando_2 é executado. Caso contrário, esse bloco não é executado e a execução do programa continua com o comando comando_apos_if.

Dessa forma, o if permite resolver problemas do tipo:

```ts
let idade: number = 15; // Você pode alterar o número se desejar...

if (idade >= 18) {
    console.log(`Parabéns você já tem idade de tirar sua carteira!`)
}

console.log(`Fim!`)
```
<p align="center">
<i>Arquivo encontrado em: Exemplos/Estruturas_Condicionais/if_else.ts</i>
</p>

## Comando If-else

Em várias ocasiões é necessário executar blocos de forma alternativa. Nesses casos, podemos utilizar o comando if-else (que significa se-senão em português), cuja sintaxe é a seguinte:

```ts
if (condição) {
    dentro_do_if
} else {
    dentro_do_else
}
```
Apenas caso a condição for verdadeira, o bloco contendo os comandos `dentro_do_if` vai ser executado, caso contrário ele entra no else e executa o `dentro_do_else`.

Esse comando nos ajuda a resolver problemas como, por exemplo, determinar se um número é par ou ímpar:

```ts
let numero: number = 10;

if (numero % 2 == 0) {
    console.log(`O numero ${numero} é par!`);
} else {
    console.log(`O numero ${numero} é ímpar!`)
}
```
<p align="center">
<i>Arquivo encontrado em: Exemplos/Estruturas_Condicionais/if_else.ts</i>
</p>

## Comando else-if

Blocos de else e else if só executam se nenhuma das condições anteriores tiver sido atendida. 

Por exemplo: 
```ts
numero = 100;
if (numero <= 100) {
    console.log("Menor ou igual a 100")
} else if (numero < 1000) {
    console.log("Menor que 1000")
}
```
<p align="center">
<i>Arquivo encontrado em: Exemplos/Estruturas_Condicionais/if_else.ts</i>
</p>

O else não será executado, pois já entrou no if (else quer dizer "senão").

## Comando Switch

A instrução switch avalia uma expressão, combina o valor da expressão com uma cláusula case e executa instruções associadas a esse caso.

Por exemplo:
```ts
let grau: string = "A";

switch (grau) {
    case "A": {
        console.log("Excelente!")
        break;
    }
    case "B": {
        console.log("Muito bom!")
        break;
    }
    case "C": {
        console.log("Justo!")
    }
    default: {
        console.log("Escolha inválida!")
    }
}
```

<p align="center">
<i>Arquivo encontrado em: Exemplos/Estruturas_Condicionais/switch.ts</i>
</p>

O exemplo verifica o valor da variável `grau` e executa o bloco correspondente ao seu valor. Se o valor que está na variável não corresponder nenhuma das constantes (A, B, C), o bloco `default` vai ser executado.
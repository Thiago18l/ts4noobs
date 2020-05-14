# 4.1 Escopo de váriaveis e como eles funcionam.

Escopo nada mais é que a acessibilidade de objetos, váriaveis e funções em diferentes partes do código. Em outras palavras, o que determina quais são os dados que podem ser acessados em uma determinada parte do código é o escopo.

Quando você declara uma váriavel fora de qualquer função, ela é chamada de variável global, porque está disponível para qualquer outro código no documento atual. Quando você declara uma variável dentro de uma função, é chamada de variável local,  pois ela está disponível somente dentro dessa função.


# Diferenças entre var, let e const

Você pode declarar variáveis de três formas:
- Com a palavra chave `var`. Por exemplo, `var x = 42`. Esta sintaxe pode ser usada para declarar tanto variáveis locais como variáveis globais.
- Com a palavra chave `let`. Por exemplo, `let y = 13`. Essa sintaxe pode ser usada para declarar uma variável local de escopo de bloco.
- Com a palavra chave `const`. Uma constante não pode alterar seu valor por meio de uma atribuição ou ser declarada novamente enquanto o script está em execução.
As regras de escopo para as constantes são as mesmas para as variáveis let de escopo de bloco. Por exemplo `const PI = 3.14` pode ser usada para declarar uma constante.

```ts
if (true) {
    var x: number = 5
}
console.log(x) // saída: 5

// com let

if (true) {
    let y: number = 5
}
console.log(y) // erro, y não está definido

if (true) {
    const PI = 3.14;
}
console.log(PI) // Erro, PI não está definido.
```
<p align="center">
<i>Arquivo encontrado em: Exemplos/3-escopo.ts</i>
</p>

O mais indicado é que para as variáveis de seus códigos sempre declarem como `let` ou `const` com base no contexto do bloco.


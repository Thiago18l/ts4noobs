# 5.1 Tipos

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
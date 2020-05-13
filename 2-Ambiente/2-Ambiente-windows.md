# 2.2 Ambiente de desenvolvimento no Windows.

Como já abordamos, o TypeScript ele nada mais é do que um superconjunto de JavaScript. Para compilar código TypeScript precisaremos instalar o NodeJS e suas depedências:


<a href="https://nodejs.org/en/download/"> Clique aqui para fazer o Download</a>

Selecione a Versão LTS (Long term Support) e baixe a versão com base no seu sistema seja ele de 32bit ou 64bit.

<a href="https://imgur.com/tyecO2o"><img src="https://i.imgur.com/tyecO2o.png" title="NodeJS Download" /></a>

Após a instalação do NodeJS, abriremos o prompt de comando, no caso recomendamos utilizar o PowerShell e para instalar globalmente o TypeScript para seus estudos usaremos o npm (Node Packger Manager) com o seguinte script:

```
npm install -g typescript ts-node
```
<hr>

### Executando o código

Iremos usar como exemplo de compilação um simples script a ser executado:
<h2 align="center">
<img src="https://i.imgur.com/aVR60QN.png" alt="Vs code" width="350">
</h2>
Assim com o script feito, iremos executar o código usando o seguinte comando no seu PowerShell:

```
tsc Exemplo.ts
```
Quando executamos o código usando o tsc (typescript compiler) ele irá criar um arquivo JavaScript do nosso código:

<h2 align="center">
    <img src="https://i.imgur.com/ZKgcRH4.png" alt="compilação" width="160">
</h2>

Podemos observar dentro do arquivo Exemplo.js vai estar o nosso código:
```js
console.log("Oi TypeScript");
```
<hr>

    
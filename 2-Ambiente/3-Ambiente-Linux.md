# 3.1 Ambiente de Desenvolvimento no Linux

Primeiro passo é instalar o Node.JS, para instalar o Node.JS no Debian, Ubuntu, Linux Mint e derivados, vamos precisar do Terminal, você pode abri-lo manualmente ou se preferir pode usar o atalho Ctrl + Alt + T e colar os comandos a seguir. Lembre-se que no caso do Debian o sudo não vem habilitado por padrão.


Para obter essa versão, utilize o gerenciador de pacotes apt. Recarregue seu índice de pacotes local digitando:

```
sudo apt update
```

Instale o node.JS dos repositórios:
```
sudo apt install nodejs
```

Se o pacote nos repositórios atender às suas necessidades, isso é tudo que precisa fazer para estar configurado com o Node.js. Na maioria dos casos, também será necessário instalar o npm, o gerenciador de pacotes Node.js. Faça isso digitando:
```
sudo apt install npm
```
Isso permitirá que você instale os módulos e os pacotes para usar com o Node.js.

Para verificar qual versão do Node.js você tem instalada após esses passos iniciais, digite:
```
node -v
```
<hr>

## Instalando o TypeScript globalmente

Para instalar o TypeScript globalmente em sua máquina use o seguinte comando:
```
sudo npm install -g typescript
```
após a instalação ser concluida você pode verificar qual versão do TypeScript foi instalada:
```
tsc -v
```

## Compilando código TypeScript

Iremos usar como exemplo de compilação um simples script a ser executado:
<h2 align="center">
<img src="https://i.imgur.com/aVR60QN.png" alt="Vs code" width="350">
</h2>
Assim com o script feito, iremos executar o código usando o seguinte comando em nosso terminal:

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
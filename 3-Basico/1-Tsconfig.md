# Configurações do Typescript Compiler

No TypeScript você pode fornecer opções de compilação que acompanham seu código por meio de um arquivo tsconfig.json. Para iniciar um novo projeto TypeScript, cd no diretório raiz do projeto e no seu terminal execute o seguinte script:
```
tsc --init
```
Este comando irá gerar um arquivo tsconfig.json com opções de configuração. Indico para este tutorial usar as seguintes configurações no seu tsconfig.json:
```js
{
  "compilerOptions": {
    "target": "es5",                          
    "module": "commonjs",                     
    "outDir": "./dist",                      
    "noImplicitAny": false,                   
    "esModuleInterop": true,                  
    "forceConsistentCasingInFileNames": true,  
    "exclude": [
      "node_modules"
    ]
  }
}
```
<p align="center"><i>Arquivo encontrado em: Exemplos/tsconfig.json</i><p>

Com o tsconfig.json colocado na raíz do seu projeto, você vai poder usar o comando tsc para compilar seu código.

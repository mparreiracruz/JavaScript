"use strict";// Esta é uma diretiva do JavaScript que ativa o "modo estrito". Isso significa que o código será executado em um modo mais restrito, impondo algumas regras adicionais e desabilitando certas funcionalidades consideradas propensas a erros.

const ps = require("prompt-sync");//: Esta linha importa o módulo prompt-sync do Node.js. O prompt-sync é um módulo que permite receber entrada do usuário no console de forma síncrona, ou seja, o programa aguarda a entrada do usuário antes de prosseguir.

const prompt = ps();//Aqui, o método ps() do módulo prompt-sync é invocado para criar uma função de prompt. Essa função será usada posteriormente para solicitar entrada do usuário.

var a = prompt();//Esta linha solicita ao usuário que insira um valor e armazena esse valor na variável a. A função prompt() é chamada para exibir o prompt e aguardar a entrada do usuário.

var b = prompt();//Similarmente à linha anterior, esta linha solicita ao usuário que insira outro valor e armazena esse valor na variável b.

var numero1Inteiro = parseInt(a);//Da mesma forma, o valor da variável b é convertido em um número inteiro usando parseInt() e armazenado na variável numero2Inteiro.

var numero2Inteiro = parseInt(b);//Da mesma forma, o valor da variável b é convertido em um número inteiro usando parseInt() e armazenado na variável numero2Inteiro.

var X = numero1Inteiro + numero2Inteiro;// Aqui, os valores armazenados nas variáveis numero1Inteiro e numero2Inteiro são somados, e o resultado é armazenado na variável X.

console.log('X = ' + X);//Por fim, esta linha exibe o valor de X no console. O operador + é usado para concatenar a string 'X = ' com o valor de X, e o resultado é impresso no console.


/*
Link da solucao do exercício 1001 do beecrowd na lingagem JavaScript:

https://github.com/gabrielduete/BEECROWD-JS-GUIA/blob/main/README.md

Vídeo explicando como entrar com dados do usuário no vscode usando a linguagem JavaScript:

https://www.youtube.com/watch?v=MntVOZxB3BA
*/

/*
Código da solucao LITERAL no beecrowd:

var input = require('fs').readFileSync('/dev/stdin', 'utf8')

var valoresRecebidos = input.split('\n')

var A = parseInt(valoresRecebidos.shift())
var B = parseInt(valoresRecebidos.shift())

var X = A + B

console.log('X = ' + X)
*/
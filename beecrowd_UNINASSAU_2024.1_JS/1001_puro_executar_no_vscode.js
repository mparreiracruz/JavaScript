"use strict";
const ps = require("prompt-sync");
const prompt = ps();

var a = prompt();
var b = prompt();

var numero1Inteiro = parseInt(a);
var numero2Inteiro = parseInt(b);

var X = numero1Inteiro + numero2Inteiro;

console.log('X = ' + X);
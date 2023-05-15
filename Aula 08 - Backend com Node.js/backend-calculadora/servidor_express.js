const express = require('express');
const app = express();

// const quadrado = require('./quadrado');
const calculadora = require('./calculadora');

app.get('/', function (req, res) {
  res.send(`Ola mundo node.js!`);
});

app.get('/api/somar', function (req, res) {
  var num1 = req.query.num1;
  var num2 = req.query.num2;
  //var num2 = Number(req.query.num2);
  res.send(`O resultado da soma é: ${calculadora.somar(num1, num2)}`);
});

app.get('/api/subtrair', function (req, res) {
  var num1 = req.query.num1;
  var num2 = req.query.num2;
  res.send(`O resultado da substração é: ${calculadora.somar(num1, num2)}`);
});

app.get('/api/dividir', function (req, res) {
  var num1 = req.query.num1;
  var num2 = req.query.num2;
  res.send(`O resultado da divisão é: ${calculadora.somar(num1, num2)}`);
});

app.get('/api/multiplicar', function (req, res) {
  var num1 = req.query.num1;
  var num2 = req.query.num2;
  res.send(`O resultado da multiplicação é: ${calculadora.somar(num1, num2)}`);
});

app.get('/api/calculadora', function (req, res) {
  var operation = req.query.oper;
  var num1 = req.query.num1;
  var num2 = req.query.num2;

  var restxt = ""

  if (operation === 'somar') {
    restxt = `O resultado da soma é: ${calculadora.somar(num1, num2)}`
  }
  else if (operation === 'subtrair') {
    restxt = `O resultado da subtração é: ${calculadora.subtrair(num1, num2)}`
  }
  else if (operation === 'multiplicar') {
    restxt = `O resultado da multiplicação é: ${calculadora.multiplicar(num1, num2)}`
  }
  else if (operation === 'dividir') {
    restxt = `O resultado da divisão é: ${calculadora.dividir(num1, num2)}`
  } else {
    restxt = `Operação inválida!`
  }
  res.send(restxt);
});


app.listen(3000, function () {
  console.log('App rodando na porta 3000!');
});

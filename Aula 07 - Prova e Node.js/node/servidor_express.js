const express = require('express');
const app = express();

const quadrado = require('./quadrado');

app.get('/', function(req, res){
  res.send(`O perimetro do quadrado de 4 é: ${quadrado.perimetro(4)}`);
  // res.send(`A área do quadrado de 4 é: ${quadrado.area(4)}`);
});

app.listen(3000, function(){
  console.log('App rodando na porta 3000!');
});

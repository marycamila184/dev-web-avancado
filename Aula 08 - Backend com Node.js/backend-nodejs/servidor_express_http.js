const express = require('express');
const app = express();

const movies = require('./moviesdb.json');

app.use(express.urlencoded({extended: true}))
app.use(express.json());

app.get('/', function(req, res) {
  res.send('API Catálogo de filmes disponível!');
});

app.post('/api', function(req, res) {
  res.json({texto_enviado: req.body.texto});
});

app.get('/api/movies', function(req, res) {
  res.json({listmoveis: movies});
});

app.listen(3001, function() {
  console.log('App rodando na porta 3001!'); 
}); 
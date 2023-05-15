const http = require("http");

const server = http.createServer(function(request, response) {

  response.writeHead(200, {'Content-type': 'text/plain; charset=utf8'});
  //response.setEncoding('utf8');
  response.end('Olá mundo node.js\n');

});

server.listen(8000, 'localhost', function(){
  console.log("Servidor rodando em http://localhost:8000/");
});

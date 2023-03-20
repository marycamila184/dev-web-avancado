import "./Filme.css";

const listNumbers = [0, 1, 2]

const filmes = [{
  "nome": "Vingadores",
  "duracao": "2H30",
  "foto": "vingadores.png",
  "ano": 2010,
  "genero": "Ação/Nerd",
  "descricao": "Filme da Marvel com super-heróis",
  "nota": 5
},
{
  "nome": "Vingadores 2",
  "duracao": "1H30",
  "foto": "vingadores.png",
  "ano": 2014,
  "genero": "Ação/Nerd",
  "descricao": "Filme da Marvel com super-heróis",
  "nota": 5
},
{
  "nome": "Vingadores 3",
  "duracao": "2H00",
  "foto": "vingadores.png",
  "ano": 2015,
  "genero": "Ação/Nerd",
  "descricao": "Filme da Marvel com super-heróis",
  "nota": 5
}
]

export default function Filme() {
  return (
    <div className="container text-center">
      <div class="row">
        {filmes.map((filme) => (
          <div className="col">
            <div className="card">
              <img class="card-img-top" src={'/assets/images/' + filme.foto} alt="Card image cap" />
              <div class="card-body">
                <h5 class="card-title">{filme.nome}</h5>
                <p>{filme.duracao}</p>
                <p>{filme.genero}</p>
                <p>{filme.nota}</p>
                <a href={`https://youtube.com/results?search_query=${filme.nome} Trailer`}>
                  <div className="btn btn-primary">
                    Trailer
                  </div>
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
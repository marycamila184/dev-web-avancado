import React from 'react';
import { useParams } from 'react-router-dom';
import Title from './../components/Title/index';
import Comments from './../components/Comments/index';

const filmes = [{
    "nome": "Vingadores",
    "genero": "Ação/Nerd",
    "descricao": "Filme da Marvel com super-heróis",
    "nota": 5
},
{
    "nome": "Vingadores 2",
    "genero": "Ação/Nerd",
    "descricao": "Filme da Marvel com super-heróis",
    "nota": 5
},
{
    "nome": "Vingadores 3",
    "genero": "Ação/Nerd",
    "descricao": "Filme da Marvel com super-heróis",
    "nota": 5
}
]


function Detalhes() {
    const { filme } = useParams();

    const filmeEscolhido = filmes.filter(f =>
        f.nome === filme
    );

    return (
        <div>
            <Title
                title={"Detalhes"}
                text="" />
            <div className="container text-center">
                <p>Filme: {filmeEscolhido[0].nome}</p>
                <div>
                    <p>{filmeEscolhido[0].descricao}</p>
                    <p>{filmeEscolhido[0].genero}</p>
                </div>
                <Comments filme={filmeEscolhido[0].nome} />
            </div>
        </div>
    )
}

export default Detalhes;
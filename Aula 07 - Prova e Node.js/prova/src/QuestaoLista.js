const listmercadorias = [
  { "produto": "Computador", "desconto": true, "valor": 100.00 },
  { "produto": "Luminária", "desconto": false, "valor": 200.00 },
  { "produto": "Monitor", "desconto": true, "valor": 300.00 }
]

function QuestaoLista() {
  return(
    <div>
      {listmercadorias.map((c) => (
        <div key={c.produto}>
          <p> Nome: {c.produto} Preco Total R$:{c.desconto ? (c.valor * 0.9).toFixed(2) : c.valor.toFixed(2)}</p>
        </div>
      ))}

    </div>

  );
};

export default QuestaoLista;

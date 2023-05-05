const listmercadorias = [
    { "produto": "Computador", "desconto": true, "valor": 100.00, 'valor_desconto': 0.50 },
    { "produto": "Luminária", "desconto": false, "valor": 200.00, 'valor_desconto': 0 },
    { "produto": "Monitor", "desconto": true, "valor": 300.00, 'valor_desconto': 0.25 }
]

function ListaMercadorias({ desconto, valor, valor_desconto }) {
    if (desconto) {
        return <p>Produto com desconto de {valor_desconto * 100} % de R$ {valor} por R$ {valor - (valor * valor_desconto)} !</p>;
    }
    return <p>Produto sem desconto! Valor: R$ {valor}</p>;
}

export default function QuestaoProps() {
    return (
        <div>
            {listmercadorias.map((item, i) => (
                <div>
                    <p>Produto: {item.produto} </p>
                    <ListaMercadorias key={i} desconto={item.desconto} valor={item.valor} valor_desconto={item.valor_desconto} />
                </div>
            ))}
        </div>
    );
};
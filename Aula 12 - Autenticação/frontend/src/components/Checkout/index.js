import { useNavigate } from "react-router-dom";
import jwt from 'jwt-decode'

const pedidoItems = {
    "total": 285.00,
    "items": [
        {
            "nome": "Item 1",
            "qtde": 2,
            "preco": 150
        },
        {
            "nome": "Item 2",
            "qtde": 1,
            "preco": 50
        }
    ]
}

export default function Checkout() {

    const navigate = useNavigate();

    function handleSubmit(event) {
        event.preventDefault();

        const storedToken = localStorage.getItem("token");

        if (storedToken) {
            try {
                const data = jwt(storedToken)
                console.log(data)
                alert("Compra efetuada com sucesso para o cliente codigo: " + data.codigo + ".")
            } catch (error) {
                console.log(error)
            }
        } else {
            alert('Usuario não autenticado! Por favor fazer o login!')
            navigate("/login");
        }
    }

    return (
        <div className="container text-center">
            <form onSubmit={handleSubmit}>
                <div className="row">
                    {pedidoItems.items.map((item, i) => (
                        <div className="col" key={i}>
                            <div className="card">
                                <div className="card-body">
                                    <h5 className="card-title">{item.nome} </h5>
                                    <p>Quantidade: {item.qtde}</p>
                                    <p>Preço: {item.preco}</p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
                <div className="row">
                    <div className="col">
                        <br />
                        <p className="lead">Valor Total do Pedido: R$ {pedidoItems.total}</p>
                    </div>
                </div>
                <button type="submit" className="btn btn-primary">Finalizar Pedido</button>
            </form>
        </div>
    )
}
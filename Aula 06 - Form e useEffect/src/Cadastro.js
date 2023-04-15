import React, { useState } from 'react';

export default function Cadastro() {
    const [nome, setNome] = useState('');
    const [telefone, setTelefone] = useState('');

    function handleNomeChange(event) {
        setNome(event.target.value);
    }  
    
    function handleTelefoneChange(event) {
        setTelefone(event.target.value);
    }

    function handleSubmit(event) {
        event.preventDefault();
        // enviar dados de cadastro para o servidor aqui
        console.log(`Nome: ${nome}, Telefone: ${telefone}`);
    }

    return (
        <div className="form-custom">
            <form onSubmit={handleSubmit}>
                <label>
                    Nome:
                    <input type="text" value={nome} onChange={handleNomeChange} />
                </label>
                <br />
                <label>
                    Telefone:
                    <input type="text" value={telefone} onChange={handleTelefoneChange} />
                </label>
                <br />
                <button type="submit">Enviar</button>
            </form>
        </div>
    );
}

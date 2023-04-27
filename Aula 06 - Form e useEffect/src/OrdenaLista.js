import React, { useState } from 'react';

export default function OrdenaLista() {

    const [frutaList, setfrutaList] = useState(["Banana", "Orange", "Apple", "Mango"]);
    const [numList, setnumList] = useState([5, 1, 6, 9, 3]);

    const sortArrays = () => {
        // O sort não retorna um novo array, então se dermos diretamente o set o react nao consegue diferenciar e vai entender que não houve alteração
        // Por isso precisamos retornar um novo array (um novo endereço de memoria) para que o react entenda que houve uma alteração
        const frutaListSorted = [
            ...frutaList.sort()
        ];
        setfrutaList(frutaListSorted);


        const numListSorted = [
            ...numList.sort((a, b) => a - b)
        ];
        setnumList(numListSorted);
    };

    return (
        <div className="form-custom">
            <div>
                <div>Dados: {frutaList.map((result, index) => <div key={index}>{result}</div>)}</div>
            </div>
            <br></br>
            <div>
                <div>Dados: {numList.map((result, index) => <div key={index}>{result}</div>)}</div>
            </div>
            <button type="submit" onClick={sortArrays}>Ordenar Lista</button>
        </div>
    );
}
import React from 'react';
import Title from './../components/Title/index';
import Autentica from '../components/Autentica/index';

export default function Login() {
    return (
        <div>
            <Title
                title={"Login"}
                text={"Faça seu login para concluir a compra"} />
            <Autentica />
        </div>
    )
}
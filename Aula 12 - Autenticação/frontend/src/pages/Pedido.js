import React from 'react';
import Title from './../components/Title/index';
import Checkout from '../components/Checkout/index';

export default function Login() {
    return (
        <div>
            <Title
                title={"Checkout"}
                text={"Finalize seu pedido"} />
            <Checkout />
        </div>
    )
}
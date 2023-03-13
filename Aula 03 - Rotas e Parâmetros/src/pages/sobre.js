import React from 'react';
import Footer from './../components/Footer/index';
import { useParams } from 'react-router-dom';

function Sobre() {
    const { name } = useParams();
    
    return (
        <div>            
            <p>Olá usuário {name}!</p>       
            <Footer /> 
        </div>
    )
}

export default Sobre;
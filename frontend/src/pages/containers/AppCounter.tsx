import React, { useState } from 'react';
import { Container, Button } from "reactstrap";
import { FiMinus, FiPlus } from "react-icons/fi";
import './../../App.css';

const AppCounter = () => {
    const [valor, setValor] = useState<number>(0);
    return (
        <Container>
            <div className="area-contador">
                <h1>{valor}</h1>
                <div>
                    <Button onClick={() => setValor(valor + 1)}><FiPlus size={30} /></Button>
                    <Button onClick={() => setValor(valor - 1)}><FiMinus size={30} /></Button>
                </div>
            </div>
        </Container>
    );
}

export default AppCounter;
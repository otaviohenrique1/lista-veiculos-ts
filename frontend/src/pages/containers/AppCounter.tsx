import React, { useState } from 'react';
import { Container, Button } from "reactstrap";
import './../../App.css';

const AppCounter = () => {
    const [valor, setValor] = useState<number>(0);
    return (
        <Container>
            <h1>{valor}</h1>
            <Button onClick={() => setValor(valor + 1)}>+</Button>
            <Button onClick={() => setValor(valor - 1)}>-</Button>
        </Container>
    );
}

export default AppCounter;
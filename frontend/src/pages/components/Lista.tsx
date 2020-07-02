import React from 'react';
import './../../App.css';
import { Container, ListGroup } from "reactstrap";
import Titulo from "./Titulo";
import ListaItem from "./ListaItem";
import Busca from "./Busca";
import { lista_dados1 } from "../utils/lista_app";

const Lista = () => {
    return (
        <Container>
            <Titulo
                texto="Lista"
                elemento="h1"
            />
            <Busca />
            <ListGroup>
                {lista_dados1.map((item, index) => (
                    <ListaItem
                        key={index.toString()}
                        imagem={item.imagem}
                        nome={item.nome}
                        paisOrigem={item.paisOrigem}
                        tipo={item.tipo}
                    />
                ))}
            </ListGroup>
        </Container>
    );
}

export default Lista;
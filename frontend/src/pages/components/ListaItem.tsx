import React from 'react';
import './../../App.css';
import { ListGroupItem, Label, Row, Col, Button } from "reactstrap";
import { Link } from "react-router-dom";
import Tank from "./assets/m4_sherman_tank.png";
import Imagem from "./Imagem";

interface Props {
    imagem?: string,
    // imagem2?: File,
    nome?: string,
    paisOrigem?: string,
    tipo?: string,
}

const ListaItem: React.FC<Props> = ({ imagem, nome, paisOrigem, tipo }) => {
    return (
        <ListGroupItem>
            <Row>
                <Col md={2}>
                    {/* <div>
                        {imagem}
                    </div> */}
                    {/* <img src={Tank} alt="Tank" width="150px" height="100px" /> */}
                    <Imagem src={Tank} alt="Tank" width="150px" height="100px" />
                </Col>
                <Col md={8}>
                    <Row>
                        <Col md={4}>
                            <Label>{nome}</Label>
                        </Col>
                        <Col md={4}>
                            <Label>{paisOrigem}</Label>
                        </Col>
                        <Col md={4}>
                            <Label>{tipo}</Label>
                        </Col>
                    </Row>
                </Col>
                <Col md={2} className="area-item-botao">
                    <Row>
                        <Col md={12}>
                            <Link to="/detalhes">
                                <Button color="primary">Exibir</Button>
                            </Link>
                        </Col>
                        <Col md={12}>
                            <Button color="danger">Apagar</Button>
                        </Col>
                    </Row>
                </Col>
            </Row>
        </ListGroupItem>
    );
}

export default ListaItem;
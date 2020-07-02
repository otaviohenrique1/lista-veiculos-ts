import React from 'react';
import './../../App.css';
import { Row, Col, Input, InputGroup, InputGroupAddon, InputGroupText, Button, Label } from "reactstrap";
import { MdSearch } from "react-icons/md";

interface Props {
    handleBusca?: (nome: string) => void;
    onChange?: () => void;
    value?: string;
}

const Busca: React.FC<Props> = ({handleBusca, onChange, value}) => {
    return (
        <Row className="area-busca">
            <Col md={12}>
                <InputGroup>
                    <InputGroupAddon addonType="prepend">
                        <InputGroupText>
                            <Label htmlFor="campo_busca" className="campo-busca">
                                <MdSearch size={20}/>
                            </Label>
                        </InputGroupText>
                    </InputGroupAddon>
                    <Input type="text" placeholder="Busca de veiculos" onChange={onChange} value={value} name="campo_busca" id="campo_busca"/>
                    <InputGroupAddon addonType="append">
                        <Button type="button" color="primary" onClick={() => handleBusca}>Buscar</Button>
                    </InputGroupAddon>
                </InputGroup>
            </Col>
        </Row>
    );
}

export default Busca;
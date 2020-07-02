import React from 'react';
import { Row, Col, Label } from "reactstrap";
import './../../App.css';

const Footer = () => {
    return (
        <footer className="rodape">
            <Row>
                <Col>
                    <Label>&copy;Copyright 2020 - Otavio Henrique</Label>
                </Col>
            </Row>
        </footer>
    );
}

export default Footer;
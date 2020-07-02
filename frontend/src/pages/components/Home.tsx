import React from 'react';
import { Container, Row, Col, Card, CardBody, CardFooter, Button } from "reactstrap";
import Titulo from "./Titulo";
import './../../App.css';
import { MdPlaylistAddCheck, MdPlaylistAdd } from "react-icons/md";
import { Link } from "react-router-dom";

const Home = () => {
    return (
        <Container>
            <Titulo
                texto="Home"
                elemento="h1"
            />
            <Row>
                <Col md={6}>
                    <Card>
                        <CardBody>
                            <MdPlaylistAddCheck size={200} />
                            <CardFooter>
                                <Link to="/lista">
                                    <Button color="primary">Lista</Button>
                                </Link>
                            </CardFooter>
                        </CardBody>
                    </Card>
                </Col>
                <Col md={6}>
                    <Card>
                        <CardBody>
                            <MdPlaylistAdd size={200} />
                            <CardFooter>
                                <Link to="/cadastro">
                                    <Button color="primary">Cadastro</Button>
                                </Link>
                            </CardFooter>
                        </CardBody>
                    </Card>
                </Col>
            </Row>
        </Container>
    );
}

export default Home;
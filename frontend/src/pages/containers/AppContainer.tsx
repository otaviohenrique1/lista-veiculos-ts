import React from 'react';
import Header from "../components/Header";
import Footer from "../components/Footer";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import './../../App.css';
import Lista from '../components/Lista';
import Cadastro from '../components/Cadastro';
import Home from '../components/Home';
import ListaItemDetalhes from '../components/ListaItemDetalhes';

const AppContainer = () => {
    return (
        <div>
            <BrowserRouter>
                <Header/>
                <Switch>
                    <Route exact component={Home} path="/" />
                    <Route exact component={Lista} path="/lista" />
                    <Route exact component={Cadastro} path="/cadastro" />
                    <Route exact component={ListaItemDetalhes} path="/detalhes" />
                </Switch>
                <Footer/>
            </BrowserRouter>
        </div>
    );
}

export default AppContainer;
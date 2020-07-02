import React , { useState } from 'react';
import { Nav, Navbar, NavbarBrand, NavbarToggler, NavItem, Collapse, Label, Button } from "reactstrap";
import { FaRegListAlt } from "react-icons/fa";
import { MdPlaylistAddCheck, MdPlaylistAdd } from "react-icons/md";
import { Link } from "react-router-dom";
import './../../App.css';

const Header = () => {
    const [open, setOpen] = useState<boolean>(false);

    const toggle = () => {
        setOpen(!open);
    };

    return (
        <header className="area-header">
            <Navbar className="bg-blue-custom" light expand="md">
                <NavbarBrand>
                    <Link to="/">
                        <div className="nav-titulo">
                            <FaRegListAlt size={27}/>
                            <Label>Lista veiculos</Label>
                        </div>
                    </Link>
                </NavbarBrand>
                <NavbarToggler onClick={toggle} />
                <Collapse isOpen={open} navbar>
                    <Nav className="ml-auto" navbar>
                        <NavItem>
                            <Link to="/lista">
                                <Button className="nav-botao" color="secondary"><MdPlaylistAddCheck/> Lista</Button>
                            </Link>
                        </NavItem>
                        <NavItem>
                            <Link to="/cadastro">
                                <Button className="nav-botao" color="secondary"><MdPlaylistAdd/> Cadastro</Button>
                            </Link>
                        </NavItem>
                    </Nav>
                </Collapse>
            </Navbar>
        </header>
    );
}

export default Header;
import React from 'react';
import './../../App.css';
import { Container, Row, Col, Button } from "reactstrap";
import { lista_dados2 } from "./../utils/lista_app";
import Tank from "./assets/m4_sherman_tank.png";
import { Link } from "react-router-dom";
import Campo from "./Campo";
import Imagem from "./Imagem";

interface Props {
    nome?: string;
    paisOrigem?: string;
    tipo?: string;
    imagem?: string;
    // imagem2?: File;
    fabricante?: string;
    utilizadores?: string;
    quantidadeProduzida?: number;
    peridoServico?: Date;
    massa?: number;
    comprimento?: number;
    altura?: number;
    largura?: number;
    tripulacao?: number;
    custoUnitario?: number;
    armamento?: string;
    item?: [];
}

const ListaItemDetalhes = () => {
    return (
        <Container>
            <Row>
                <Imagem
                    md={12}
                    src={Tank}
                    alt="Tank"
                    className="campo-detalhe-item-imagem"
                />
                {/* <Col md={12} className="campo-detalhe-item-imagem"> */}
                    {/* <img src={Tank} alt="Tank" className="img-fluid" /> */}
                    {/* <img src={Tank} alt="Tank" width="500px" height="333px" /> */}
                {/* </Col> */}
                <Campo
                    md={12}
                    addonType="prepend"
                    labelTexto="Nome:"
                    labelHtmlFor="nome"
                    labelClassName="campo-cadastro"
                    type="text"
                    value={lista_dados2[0].nome}
                    name="nome"
                    id="nome"
                    readOnly
                />
                <Campo
                    md={6}
                    addonType="prepend"
                    labelTexto="Pais de origem:"
                    labelHtmlFor="pais_origem"
                    labelClassName="campo-cadastro"
                    type="text"
                    value={lista_dados2[0].paisOrigem}
                    name="pais_origem"
                    id="pais_origem"
                    readOnly
                />
                <Campo
                    md={6}
                    addonType="prepend"
                    labelTexto="Tipo:"
                    labelHtmlFor="tipo"
                    labelClassName="campo-cadastro"
                    type="text"
                    value={lista_dados2[0].tipo}
                    name="tipo"
                    id="tipo"
                    readOnly
                />
                <Campo
                    md={12}
                    addonType="prepend"
                    labelTexto="Fabricante:"
                    labelHtmlFor="fabricante"
                    labelClassName="campo-cadastro"
                    type="text"
                    value={lista_dados2[0].fabricante}
                    name="fabricante"
                    id="fabricante"
                    readOnly
                />
                <Campo
                    md={12}
                    addonType="prepend"
                    labelTexto="Utilizadores:"
                    labelHtmlFor="utilizadores"
                    labelClassName="campo-cadastro"
                    type="text"
                    value={lista_dados2[0].utilizadores}
                    name="utilizadores"
                    id="utilizadores"
                    readOnly
                />
                <Campo
                    md={6}
                    addonType="prepend"
                    labelTexto="Quantidade produzida:"
                    labelHtmlFor="quantidade_produzida"
                    labelClassName="campo-cadastro"
                    type="text"
                    value={lista_dados2[0].quantidadeProduzida}
                    name="quantidade_produzida"
                    id="quantidade_produzida"
                    readOnly
                />
                <Campo
                    md={6}
                    addonType="prepend"
                    labelTexto="Perido de serviço:"
                    labelHtmlFor="perido_servico"
                    labelClassName="campo-cadastro"
                    type="text"
                    value={lista_dados2[0].peridoServico}
                    name="perido_servico"
                    id="perido_servico"
                    readOnly
                />
                <Campo
                    md={6}
                    addonType="prepend"
                    labelTexto="Massa:"
                    labelHtmlFor="massa"
                    labelClassName="campo-cadastro"
                    type="text"
                    value={lista_dados2[0].massa}
                    name="massa"
                    id="massa"
                    readOnly
                />
                <Campo
                    md={6}
                    addonType="prepend"
                    labelTexto="Comprimento:"
                    labelHtmlFor="comprimento"
                    labelClassName="campo-cadastro"
                    type="text"
                    value={lista_dados2[0].comprimento}
                    name="comprimento"
                    id="comprimento"
                    readOnly
                />
                <Campo
                    md={6}
                    addonType="prepend"
                    labelTexto="Altura:"
                    labelHtmlFor="altura"
                    labelClassName="campo-cadastro"
                    type="text"
                    value={lista_dados2[0].altura}
                    name="altura"
                    id="altura"
                    readOnly
                />
                <Campo
                    md={6}
                    addonType="prepend"
                    labelTexto="Largura:"
                    labelHtmlFor="largura"
                    labelClassName="campo-cadastro"
                    type="text"
                    value={lista_dados2[0].largura}
                    name="largura"
                    id="largura"
                    readOnly
                />
                <Campo
                    md={6}
                    addonType="prepend"
                    labelTexto="Tripulação:"
                    labelHtmlFor="tripulacao"
                    labelClassName="campo-cadastro"
                    type="text"
                    value={lista_dados2[0].tripulacao}
                    name="tripulacao"
                    id="tripulacao"
                    readOnly
                />
                <Campo
                    md={6}
                    addonType="prepend"
                    labelTexto="Custo unitario:"
                    labelHtmlFor="custo_unitario"
                    labelClassName="campo-cadastro"
                    type="text"
                    value={lista_dados2[0].custoUnitario}
                    name="custo_unitario"
                    id="custo_unitario"
                    readOnly
                />
                <Campo
                    md={12}
                    addonType="prepend"
                    labelTexto="Armamento:"
                    labelHtmlFor="armamento"
                    labelClassName="campo-cadastro"
                    type="text"
                    value={lista_dados2[0].armamento}
                    name="armamento"
                    id="armamento"
                    readOnly
                />
                <Col md={12} className="area-botoes">
                    <Button color="primary">Alterar</Button>
                    <Link to="/lista">
                        <Button color="secondary">Voltar</Button>
                    </Link>
                </Col>
            </Row>
        </Container>
    );
}

export default ListaItemDetalhes;

// interface Props2 {
//     md: number;
//     addonType: 'prepend' | 'append';
//     texto: string;
//     tipoInput: | 'text' | 'email' | 'select' | 'file' | 'radio' | 'checkbox' | 'textarea' | 'button' | 'reset' | 'submit' | 'date' | 'datetime-local' | 'hidden' | 'image' | 'month' | 'number' | 'range' | 'search' | 'tel' | 'url' | 'week' | 'password' | 'datetime' | 'time' | 'color';
//     value: string | number | any;
//     nameInput: string;
//     idInput: string;
// }

// const CampoDetalhes: React.FC<Props2> = ({ md, addonType, texto, tipoInput, value, nameInput, idInput }) => {
//     return (
//         <Col md={md} >
//             <FormGroup>
//                 <InputGroup>
//                     <InputGroupAddon addonType={addonType}>
//                         <InputGroupText>
//                             <strong>{texto}</strong>
//                         </InputGroupText>
//                     </InputGroupAddon>
//                     <Input type={tipoInput} readOnly value={value} name={nameInput} id={idInput}/>
//                 </InputGroup>
//             </FormGroup>
//         </Col>
//     );
// };

/* <CampoDetalhes
    md={12}
    addonType="prepend"
    texto="Nome:"
    tipoInput="text"
    value={lista_dados2[0].nome}
    nameInput="nome"
    idInput="nome"
/>
<CampoDetalhes
    md={6}
    addonType="prepend"
    texto="Pais de origem:"
    tipoInput="text"
    value={lista_dados2[0].paisOrigem}
    nameInput="pais_origem"
    idInput="pais_origem"
/>
<CampoDetalhes
    md={6}
    addonType="prepend"
    texto="Tipo:"
    tipoInput="text"
    value={lista_dados2[0].tipo}
    nameInput="tipo"
    idInput="tipo"
/>
<CampoDetalhes
    md={12}
    addonType="prepend"
    texto="Fabricante:"
    tipoInput="text"
    value={lista_dados2[0].fabricante}
    nameInput="fabricante"
    idInput="fabricante"
/>
<CampoDetalhes
    md={12}
    addonType="prepend"
    texto="Utilizadores:"
    tipoInput="text"
    value={lista_dados2[0].utilizadores}
    nameInput="utilizadores"
    idInput="utilizadores"
/>
<CampoDetalhes
    md={6}
    addonType="prepend"
    texto="Quantidade produzida:"
    tipoInput="text"
    value={lista_dados2[0].quantidadeProduzida}
    nameInput="quantidade_produzida"
    idInput="quantidade_produzida"
/>
<CampoDetalhes
    md={6}
    addonType="prepend"
    texto="Perido de serviço:"
    tipoInput="text"
    value={lista_dados2[0].peridoServico}
    nameInput="perido_servico"
    idInput="perido_servico"
/>
<CampoDetalhes
    md={6}
    addonType="prepend"
    texto="Massa:"
    tipoInput="text"
    value={lista_dados2[0].massa}
    nameInput="massa"
    idInput="massa"
/>
<CampoDetalhes
    md={6}
    addonType="prepend"
    texto="Comprimento:"
    tipoInput="text"
    value={lista_dados2[0].comprimento}
    nameInput="comprimento"
    idInput="comprimento"
/>
<CampoDetalhes
    md={6}
    addonType="prepend"
    texto="Altura:"
    tipoInput="text"
    value={lista_dados2[0].altura}
    nameInput="altura"
    idInput="altura"
/>
<CampoDetalhes
    md={6}
    addonType="prepend"
    texto="Largura:"
    tipoInput="text"
    value={lista_dados2[0].largura}
    nameInput="largura"
    idInput="largura"
/>
<CampoDetalhes
    md={6}
    addonType="prepend"
    texto="Tripulação:"
    tipoInput="text"
    value={lista_dados2[0].tripulacao}
    nameInput="tripulacao"
    idInput="tripulacao"
/>
<CampoDetalhes
    md={6}
    addonType="prepend"
    texto="Custo unitario:"
    tipoInput="text"
    value={lista_dados2[0].custoUnitario}
    nameInput="custo_unitario"
    idInput="custo_unitario"
/>
<CampoDetalhes
    md={12}
    addonType="prepend"
    texto="Armamento:"
    tipoInput="text"
    value={lista_dados2[0].armamento}
    nameInput="armamento"
    idInput="armamento"
/> */
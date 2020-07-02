import React, { useState, ChangeEvent, FormEvent } from 'react';
import { Container, Button, Form, FormGroup, Row, Col } from "reactstrap";
import Titulo from "./Titulo";
import './../../App.css';
import Campo from "./Campo";

const Cadastro = () => {
    const [selectedFile, setSelectedFile] = useState<File>();
    const [erro, setErro] = useState<boolean>(false);
    const [formData, setFormData] = useState({
        nome: '',
        paisOrigem: '',
        tipo: '',
        fabricante: '',
        utilizadores: '',
        quantidadeProduzida: 0,
        peridoServico: '',
        massa: 0,
        comprimento: 0,
        altura: 0,
        largura: 0,
        tripulacao: 0,
        custoUnitario: 0,
        armamento: '',
    });
    
    function handleInputChange(event: ChangeEvent<HTMLInputElement>) {
        const { name, value } = event.target;
        setFormData({...formData, [name]: value});
    }
    
    function validaCampo(campo: any): boolean {
        return campo === '';
    }

    function handleSubmit(event: FormEvent) {
        event.preventDefault();
        // if (formData.nome === '') {
        //     console.log("Campo vazio");
        //     return;
        // } else {
        //     console.log("Cadastrado");
        // }
        console.log("Cadastrado");
    }
    
    return (
        <Container>
            <Titulo
                texto="Cadastro"
                elemento="h1"
            />
            <Form onSubmit={handleSubmit}>
                <Row>
                    {/* <Campo
                        // Campo provisorio
                        md={12}
                        addonType="prepend"
                        labelClassName="campo-cadastro"
                        labelHtmlFor="imagem"
                        labelTexto="Imagem"
                        type="text"
                        name="imagem"
                        id="imagem"
                        value='[Local do dropzone da imagem]'
                    /> */}
                    <Campo
                        md={12}
                        addonType="prepend"
                        labelClassName="campo-cadastro"
                        labelHtmlFor="nome"
                        labelTexto="Nome"
                        type="text"
                        name="nome"
                        id="nome"
                        onChange={handleInputChange}
                        required={true}
                    />
                    <Campo
                        md={6}
                        addonType="prepend"
                        labelClassName="campo-cadastro"
                        labelHtmlFor="pais_origem"
                        labelTexto="Pais de origem"
                        type="text"
                        name="pais_origem"
                        id="pais_origem"
                        onChange={handleInputChange}
                        required={true}
                    />
                    <Campo
                        md={6}
                        addonType="prepend"
                        labelClassName="campo-cadastro"
                        labelHtmlFor="tipo"
                        labelTexto="Tipo"
                        type="text"
                        name="tipo"
                        id="tipo"
                        onChange={handleInputChange}
                        required={true}
                    />
                    <Campo
                        md={6}
                        addonType="prepend"
                        labelClassName="campo-cadastro"
                        labelHtmlFor="fabricante"
                        labelTexto="Fabricante"
                        type="text"
                        name="fabricante"
                        id="fabricante"
                        onChange={handleInputChange}
                        required={true}
                    />
                    <Campo
                        md={6}
                        addonType="prepend"
                        labelClassName="campo-cadastro"
                        labelHtmlFor="utilizadores"
                        labelTexto="Utilizadores"
                        type="text"
                        name="utilizadores"
                        id="utilizadores"
                        onChange={handleInputChange}
                        required={true}
                    />
                    <Campo
                        md={6}
                        addonType="prepend"
                        labelClassName="campo-cadastro"
                        labelHtmlFor="quantidade_produzida"
                        labelTexto="Quantidade produzida"
                        type="number"
                        name="quantidade_produzida"
                        id="quantidade_produzida"
                        onChange={handleInputChange}
                        required={true}
                    />
                    <Campo
                        md={6}
                        addonType="prepend"
                        labelClassName="campo-cadastro"
                        labelHtmlFor="perido_servico"
                        labelTexto="Perido de serviço"
                        type="text" name="perido_servico"
                        id="perido_servico"
                        onChange={handleInputChange}
                        required={true}
                    />
                    <Campo
                        md={6}
                        addonType="prepend"
                        labelClassName="campo-cadastro"
                        labelHtmlFor="massa"
                        labelTexto="Massa"
                        type="number"
                        name="massa"
                        id="massa"
                        onChange={handleInputChange}
                        required={true}
                    />
                    <Campo
                        md={6}
                        addonType="prepend"
                        labelClassName="campo-cadastro"
                        labelHtmlFor="comprimento"
                        labelTexto="Comprimento"
                        type="number"
                        name="comprimento"
                        id="comprimento"
                        onChange={handleInputChange}
                        required={true}
                    />
                    <Campo
                        md={6}
                        addonType="prepend"
                        labelClassName="campo-cadastro"
                        labelHtmlFor="altura"
                        labelTexto="Altura"
                        type="number"
                        name="altura"
                        id="altura"
                        onChange={handleInputChange}
                        required={true}
                    />
                    <Campo
                        md={6}
                        addonType="prepend"
                        labelClassName="campo-cadastro"
                        labelHtmlFor="largura"
                        labelTexto="Largura"
                        type="number"
                        name="largura"
                        id="largura"
                        onChange={handleInputChange}
                        required={true}
                    />
                    <Campo
                        md={6}
                        addonType="prepend"
                        labelClassName="campo-cadastro"
                        labelHtmlFor="tripulacao"
                        labelTexto="Tripulação"
                        type="number"
                        name="tripulacao"
                        id="tripulacao"
                        onChange={handleInputChange}
                        required={true}
                    />
                    <Campo
                        md={6}
                        addonType="prepend"
                        labelClassName="campo-cadastro"
                        labelHtmlFor="custo_unitario"
                        labelTexto="Custo unitario"
                        type="number"
                        name="custo_unitario"
                        id="custo_unitario"
                        onChange={handleInputChange}
                        required={true}
                    />
                    <Campo
                        md={12}
                        addonType="prepend"
                        labelClassName="campo-cadastro"
                        labelHtmlFor="armamento"
                        labelTexto="Armamento"
                        type="text"
                        name="armamento"
                        id="armamento"
                        onChange={handleInputChange}
                        required={true}
                    />
                    <Col md={12}>
                        <FormGroup className="area-botoes">
                            <Button type="button" color="primary">Salvar</Button>
                            <Button type="reset" color="danger">Limpar</Button>
                        </FormGroup>
                    </Col>
                </Row>
            </Form>
        </Container>
    );
}

export default Cadastro;

// interface Props {
//     md: number;
//     addonType: 'prepend' | 'append';
//     labelClassName: string;
//     labelHtmlFor: string;
//     labelTexto: string;
//     children: React.ReactNode;
// }

// const Campo: React.FC<Props> = ({ md, addonType, labelClassName, labelHtmlFor, labelTexto, children }) => {
//     return (
//         <Col md={md}>
//             <FormGroup>
//                 <InputGroup>
//                     <InputGroupAddon addonType={addonType}>
//                         <InputGroupText>
//                             <Label className={labelClassName} htmlFor={labelHtmlFor}>{labelTexto}</Label>
//                         </InputGroupText>
//                     </InputGroupAddon>
//                     {children}
//                 </InputGroup>
//             </FormGroup>
//         </Col>
//     );
// };

/* <Campo
    md={12}
    addonType="prepend"
    labelClassName="campo-cadastro"
    labelHtmlFor="nome"
    labelTexto="Nome"
>
    <Input type="text" name="nome" id="nome" onChange={handleInputChange} />
</Campo>
<Campo
    md={6}
    addonType="prepend"
    labelClassName="campo-cadastro"
    labelHtmlFor="pais_origem"
    labelTexto="Pais de origem"
>
    <Input type="text" name="pais_origem" id="pais_origem" onChange={handleInputChange} />
</Campo>
<Campo
    md={6}
    addonType="prepend"
    labelClassName="campo-cadastro"
    labelHtmlFor="tipo"
    labelTexto="Tipo"
>
    <Input type="text" name="tipo" id="tipo" onChange={handleInputChange} />
</Campo>
<Campo
    md={12}
    addonType="prepend"
    labelClassName="campo-cadastro"
    labelHtmlFor="imagem"
    labelTexto="Imagem"
>
    <Input type="text" name="imagem" id="imagem" value='[Local do dropzone da imagem]' />
</Campo>
<Campo
    md={6}
    addonType="prepend"
    labelClassName="campo-cadastro"
    labelHtmlFor="fabricante"
    labelTexto="Fabricante"
>
    <Input type="text" name="fabricante" id="fabricante" onChange={handleInputChange} />
</Campo>
<Campo
    md={6}
    addonType="prepend"
    labelClassName="campo-cadastro"
    labelHtmlFor="utilizadores"
    labelTexto="Utilizadores"
>
    <Input type="text" name="utilizadores" id="utilizadores" onChange={handleInputChange} />
</Campo>
<Campo
    md={6}
    addonType="prepend"
    labelClassName="campo-cadastro"
    labelHtmlFor="quantidade_produzida"
    labelTexto="Quantidade produzida"
>
    <Input type="number" name="quantidade_produzida" id="quantidade_produzida" onChange={handleInputChange} />
</Campo>
<Campo
    md={6}
    addonType="prepend"
    labelClassName="campo-cadastro"
    labelHtmlFor="perido_servico"
    labelTexto="Perido de serviço"
>
    <Input type="text" name="perido_servico" id="perido_servico" onChange={handleInputChange} />
</Campo>
<Campo
    md={6}
    addonType="prepend"
    labelClassName="campo-cadastro"
    labelHtmlFor="massa"
    labelTexto="Massa"
>
    <Input type="number" name="massa" id="massa" onChange={handleInputChange} />
</Campo>
<Campo
    md={6}
    addonType="prepend"
    labelClassName="campo-cadastro"
    labelHtmlFor="comprimento"
    labelTexto="Comprimento"
>
    <Input type="number" name="comprimento" id="comprimento" onChange={handleInputChange} />
</Campo>
<Campo
    md={6}
    addonType="prepend"
    labelClassName="campo-cadastro"
    labelHtmlFor="altura"
    labelTexto="Altura"
>
    <Input type="number" name="altura" id="altura" onChange={handleInputChange} />
</Campo>
<Campo
    md={6}
    addonType="prepend"
    labelClassName="campo-cadastro"
    labelHtmlFor="largura"
    labelTexto="Largura"
>
    <Input type="number" name="largura" id="largura" onChange={handleInputChange} />
</Campo>
<Campo
    md={6}
    addonType="prepend"
    labelClassName="campo-cadastro"
    labelHtmlFor="tripulacao"
    labelTexto="Tripulação"
>
    <Input type="number" name="tripulacao" id="tripulacao" onChange={handleInputChange} />
</Campo>
<Campo
    md={6}
    addonType="prepend"
    labelClassName="campo-cadastro"
    labelHtmlFor="custo_unitario"
    labelTexto="Custo unitario"
>
    <Input type="number" name="custo_unitario" id="custo_unitario" onChange={handleInputChange} />
</Campo>
<Campo
    md={12}
    addonType="prepend"
    labelClassName="campo-cadastro"
    labelHtmlFor="armamento"
    labelTexto="Armamento"
>
    <Input type="text" name="armamento" id="armamento" onChange={handleInputChange} />
</Campo> */
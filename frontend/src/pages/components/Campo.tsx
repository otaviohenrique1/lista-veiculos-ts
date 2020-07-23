import React, { ChangeEvent } from 'react';
import { Label, Input, Col, InputGroup, InputGroupAddon, InputGroupText, FormGroup
    // , FormFeedback
} from "reactstrap";
// import Mensagem from './Mensagem';

interface Props {
    md?: number;
    className?: string;
    addonType: 'prepend' | 'append';
    labelClassName?: string;
    labelHtmlFor?: string;
    labelTexto: string;
    type?: | 'text' | 'email' | 'select' | 'file' | 'radio' | 'checkbox' | 'textarea' | 'button' | 'reset' | 'submit' | 'date' | 'datetime-local' | 'hidden' | 'image' | 'month' | 'number' | 'range' | 'search' | 'tel' | 'url' | 'week' | 'password' | 'datetime' | 'time' | 'color';
    value?: string | number | any;
    name?: string;
    id?: string;
    onChange?: ((event: ChangeEvent<HTMLInputElement>) => void);
    readOnly?: boolean;
    required?: boolean;
    erro?: boolean;
    erroMensagem?: string;
}

const Campo: React.FC<Props> = ({ md, addonType, labelClassName, labelHtmlFor, labelTexto, type, value, name, id, onChange, className, readOnly, required
    // , erro, erroMensagem
}) => {
    return (
        <Col md={md} className={className}>
            <FormGroup>
                <InputGroup>
                    <InputGroupAddon addonType={addonType}>
                        <InputGroupText>
                            <Label className={labelClassName} htmlFor={labelHtmlFor}>{labelTexto}</Label>
                        </InputGroupText>
                    </InputGroupAddon>
                    <Input
                        type={type}
                        readOnly={readOnly}
                        value={value}
                        name={name}
                        id={id}
                        onChange={onChange}
                        required={required}
                        // invalid={erro}
                        // valid={erro}
                    />
                    {/* <FormFeedback>{erroMensagem}</FormFeedback> */}
                </InputGroup>
            </FormGroup>
            {/* {
                (erro) ?
                    <Mensagem mensagem={erroMensagem} color="danger" /> :
                    null
            } */}
        </Col>
    );
};

export default Campo;
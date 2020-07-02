import React, { ChangeEvent } from 'react';
import { Label, Input, Col, InputGroup, InputGroupAddon, InputGroupText, FormGroup } from "reactstrap";

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
}

const Campo: React.FC<Props> = ({ md, addonType, labelClassName, labelHtmlFor, labelTexto, type, value, name, id, onChange, className, readOnly, required }) => {
    return (
        <Col md={md} className={className}>
            <FormGroup>
                <InputGroup>
                    <InputGroupAddon addonType={addonType}>
                        <InputGroupText>
                            <Label className={labelClassName} htmlFor={labelHtmlFor}>{labelTexto}</Label>
                        </InputGroupText>
                    </InputGroupAddon>
                    <Input type={type} readOnly={readOnly} value={value} name={name} id={id} onChange={onChange} required={required}/>
                </InputGroup>
            </FormGroup>
        </Col>
    );
};

export default Campo;
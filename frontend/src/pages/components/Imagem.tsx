import React from 'react';
import './../../App.css';
import { Col } from "reactstrap";

interface Props {
    md?: number;
    src?: string;
    alt?: string;
    className?: string;
    width?: string | number;
    height?: string | number;
}

const Imagem: React.FC<Props> = ({md, src, alt, className, width, height}) => {
    return (
        <Col md={md} className={className}>
            <img src={src} alt={alt} width={width} height={height} className="img-fluid" />
        </Col>
    );
}

export default Imagem;
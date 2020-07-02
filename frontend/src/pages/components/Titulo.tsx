import React from 'react';
import './../../App.css';

interface Props {
    texto: string | number;
    elemento: string;
}

const Titulo: React.FC<Props> = ({ texto, elemento }) => {
    return (
        <div>
            {
                (elemento === 'h1') ?
                    <h1>{ texto }</h1> :
                (elemento === 'h2') ?
                    <h2>{ texto }</h2> :
                (elemento === 'h3') ?
                    <h3>{ texto }</h3> :
                (elemento === 'h4') ?
                    <h4>{ texto }</h4> :
                (elemento === 'h5') ?
                    <h5>{ texto }</h5> :
                    <h6>{ texto }</h6>
            }
        </div>
    );
}

export default Titulo;
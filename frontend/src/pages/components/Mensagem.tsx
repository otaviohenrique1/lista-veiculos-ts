import React, { useState } from 'react';
import { Alert } from "reactstrap";

interface Props {
    color?: string;
    mensagem?: string;
    botao_fechar?: boolean
}

const Mensagem: React.FC<Props> = ({ color, mensagem, botao_fechar }) => {
    const [visible, setVisible] = useState<boolean>(true);
    const onDismiss = () => setVisible(false);

    return (
        (botao_fechar) ?
            <Alert color={color} isOpen={visible} toggle={onDismiss}>{mensagem}</Alert> :
            <Alert color={color}>{mensagem}</Alert>
    );
}

export default Mensagem;
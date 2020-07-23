import React from 'react';
import { View, Text, TouchableHighlight } from 'react-native';
import styles from "./style";
import { MaterialIcons } from "@expo/vector-icons";

interface Props {
    titulo?: string;
    exibeVoltar?: boolean;
    exibeBuscar?: boolean;
}

const Lista: React.FC<Props> = ({ titulo, exibeVoltar, exibeBuscar }) => {
    let exibeBotaoVoltar = (exibeVoltar) ?
        <TouchableHighlight>
            <MaterialIcons name="arrow_back" size={10} />
        </TouchableHighlight> :
        <View></View>;
    
    let exibeBotaoBuscar = (exibeBuscar) ?
        <TouchableHighlight>
            <MaterialIcons name="search" size={10} />
        </TouchableHighlight> :
        <View></View>;

    return (
        <View style={styles.container}>
            <View>
                {exibeBotaoVoltar}
                <Text>{titulo}</Text>
                {exibeBotaoBuscar}
            </View>
        </View>
    );
}

export default Lista;
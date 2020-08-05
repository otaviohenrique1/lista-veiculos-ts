import React from 'react';
import { View, Text, TouchableHighlight, FlatList } from 'react-native';
import styles from "../Cadastro/style";
import { MaterialIcons } from "@expo/vector-icons";
import Header from "../../components/Header";
import { lista_dados1 } from "../../utils/lista_app";

interface Props {
    imagem: string;
    nome: string;
    paisOrigem: string;
    tipo: string;
}

const ItemLista: React.FC<Props> = ({ imagem, nome, paisOrigem, tipo }) => {
    return (
        <View>
            <Text>{imagem}</Text>
            <Text>{nome}</Text>
            <Text>{paisOrigem}</Text>
            <Text>{tipo}</Text>
        </View>
    );
};

const Lista = () => {
    return (
        <View style={styles.container}>
            <View>
                <Header titulo="Lista" exibeVoltar={false} exibeBuscar/>
            </View>
            <FlatList
                data={lista_dados1}
                renderItem={({ item }) => (
                    <View key={item.id}>
                        <Text>{item.imagem}</Text>
                        <Text>{item.nome}</Text>
                        <Text>{item.paisOrigem}</Text>
                        <Text>{item.tipo}</Text>
                    </View>
                )}
                keyExtractor={item => item.id}
            />
        </View>
    );
}

export default Lista;
import React from 'react';
import { View, Text, TouchableHighlight } from 'react-native';
import styles from "./style";
import { MaterialIcons } from "@expo/vector-icons";
import Header from "../components/Header";

const Lista = () => {
    return (
        <View style={styles.container}>
            <View>
                <Header titulo="Lista" exibeVoltar={false} exibeBuscar/>
            </View>
        </View>
    );
}

export default Lista;
import React, { useState } from 'react';
import { View, Text, TouchableHighlight } from 'react-native';
import styles from "../Lista/style";
import { MaterialIcons } from "@expo/vector-icons";
import Header from "../../components/Header";
import Campo from "../../components/Campo";

const Lista = () => {
    return (
        <View style={styles.container}>
            <View>
                <Header titulo="Cadastro" exibeVoltar exibeBuscar={false}/>
            </View>
            <View>
                <Campo
                    value={"1"}
                    onChangeText={() => {}}
                    placeholder={"nome"}
                />
                <Campo
                    value={"1"}
                    onChangeText={() => {}}
                    placeholder={"pais_origem"}
                />
                <Campo
                    value={"1"}
                    onChangeText={() => {}}
                    placeholder={"tipo"}
                />
                <Campo
                    value={"1"}
                    onChangeText={() => {}}
                    placeholder={"fabricante"}
                />
                <Campo
                    value={"1"}
                    onChangeText={() => {}}
                    placeholder={"utilizadores"}
                />
                <Campo
                    value={"1"}
                    onChangeText={() => {}}
                    placeholder={"quantidade_produzida"}
                />
                <Campo
                    value={"1"}
                    onChangeText={() => {}}
                    placeholder={"perido_servico"}
                />
                <Campo
                    value={"1"}
                    onChangeText={() => {}}
                    placeholder={"massa"}
                />
                <Campo
                    value={"1"}
                    onChangeText={() => {}}
                    placeholder={"comprimento"}
                />
                <Campo
                    value={"1"}
                    onChangeText={() => {}}
                    placeholder={"altura"}
                />
                <Campo
                    value={"1"}
                    onChangeText={() => {}}
                    placeholder={"largura"}
                />
                <Campo
                    value={"1"}
                    onChangeText={() => {}}
                    placeholder={"tripulacao"}
                />
                <Campo
                    value={"1"}
                    onChangeText={() => {}}
                    placeholder={"custo_unitario"}
                />
                <Campo
                    value={"1"}
                    onChangeText={() => {}}
                    placeholder={"armamento"}
                />
            </View>
        </View>
    );
}

export default Lista;
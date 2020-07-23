import React from 'react';
import { View, TextInput } from 'react-native';
import styles from "./style";

interface Props {
    value: any;
    onChangeText: () => void;
}

const Campo: React.FC<Props> = ({ onChangeText, value }) => {
    return (
        <View>
            <TextInput
                style={styles.campo}
                value={value}
                onChangeText={onChangeText}
            />
        </View>
    );
}

export default Campo;
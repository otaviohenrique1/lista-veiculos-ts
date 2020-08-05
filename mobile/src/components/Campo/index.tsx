import React from 'react';
import { View, TextInput } from 'react-native';
import styles from "./style";

interface Props {
    value?: any;
    onChangeText?: () => void;
    placeholder?: string
}

const Campo: React.FC<Props> = ({ onChangeText, value, placeholder }) => {
    return (
        <View>
            <TextInput
                style={styles.campo}
                value={value}
                onChangeText={onChangeText}
                placeholder={placeholder}
            />
        </View>
    );
}

export default Campo;
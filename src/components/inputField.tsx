import React from "react";
import { TextInput, StyleSheet } from "react-native";

interface InputFieldProps {
    placeholder: string;
    value: string;
    onChangeText: (text: string) => void;
    secureTextEntry?: boolean;
}

export default function InputField({
                                       placeholder,
                                       value,
                                       onChangeText,
                                       secureTextEntry = false,
                                   }: InputFieldProps) {
    return (
        <TextInput
            style={styles.input}
            placeholder={placeholder}
            value={value}
            onChangeText={onChangeText}
            secureTextEntry={secureTextEntry}
        />
    );
}

const styles = StyleSheet.create({
    input: {
        borderWidth: 1,
        borderColor: "#ccc",
        padding: 8,
        marginBottom: 16,
        borderRadius: 4,
    },
});

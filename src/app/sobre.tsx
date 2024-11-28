import React from "react";
import { View, Text, StyleSheet, Linking, Pressable } from "react-native";
import Header from "../components/header";

export default function Sobre() {
    const handleOpenGitHub = () => {
        Linking.openURL("https://github.com/tiago-sampaio-cordeiro/avaliacao-1"); // Substitua pelo seu link do GitHub
    };

    return (
        <View style={styles.container}>
            <Header title="Sobre" />
            <View style={styles.content}>
                <Text style={styles.text}>Versão: 1.0</Text>
                <Text style={styles.text}>Desenvolvido por: Tiago Sampaio Cordeiro</Text>
                <Pressable onPress={handleOpenGitHub} style={styles.link}>
                    <Text style={styles.linkText}>Acesse meu GitHub</Text>
                </Pressable>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#f5f5f5",
    },
    content: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        padding: 20,
    },
    text: {
        fontSize: 18,
        marginBottom: 10,
    },
    link: {
        marginTop: 20,
        padding: 10,
        borderRadius: 5,
        backgroundColor: "#6200ea",
    },
    linkText: {
        fontSize: 16,
        color: "#fff",
    },
});

import React from "react";
import { View, Text, StyleSheet, Pressable } from "react-native";
import { useActionSheet } from "@expo/react-native-action-sheet";
import { useRouter } from "expo-router";

interface HeaderProps {
    title: string; // O título do cabeçalho
}

export default function Header({ title }: HeaderProps) {
    const { showActionSheetWithOptions } = useActionSheet();
    const router = useRouter();

    const openMenu = () => {
        const options = ["Sobre", "Logout", "Cancelar"];
        const destructiveButtonIndex = 1; // Logout em vermelho
        const cancelButtonIndex = 2; // Botão Cancelar

        showActionSheetWithOptions(
            { options, destructiveButtonIndex, cancelButtonIndex },
            (selectedIndex) => {
                if (selectedIndex === 0) {
                    // Navegar para a tela Sobre
                    router.push("/sobre");
                } else if (selectedIndex === 1) {
                    // Logout: Remover a pilha de navegação e voltar ao Login
                    router.replace("/");
                }
            }
        );
    };

    return (
        <View style={styles.header}>
            <Text style={styles.title}>{title}</Text>
            <Pressable onPress={openMenu} style={styles.menuButton}>
                <Text style={styles.menuIcon}>☰</Text>
            </Pressable>
        </View>
    );
}

const styles = StyleSheet.create({
    header: {
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
        backgroundColor: "#6200ea",
        padding: 15,
    },
    title: {
        fontSize: 20,
        color: "white",
        fontWeight: "bold",
    },
    menuButton: {
        padding: 10,
    },
    menuIcon: {
        fontSize: 24,
        color: "white",
    },
});

import React from "react";
import { View, Text, StyleSheet, Pressable } from "react-native";
import { useActionSheet } from "@expo/react-native-action-sheet";
import { useRouter } from "expo-router";

interface HeaderProps {
    title: string;
}

export default function Header({ title }: HeaderProps) {
    const { showActionSheetWithOptions } = useActionSheet();
    const router = useRouter();

    const openMenu = () => {
        const options = ["Sobre", "Logout", "Cancelar", "Listagem"];
        const destructiveButtonIndex = 1;
        const cancelButtonIndex = 2;

        showActionSheetWithOptions(
            { options, destructiveButtonIndex, cancelButtonIndex },
            (selectedIndex) => {
                if (selectedIndex === 0) {
                    router.push("/sobre");
                } else if (selectedIndex === 1) {
                    router.replace("/");
                } else if (selectedIndex === 3) {
                    router.push("/listagem");
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

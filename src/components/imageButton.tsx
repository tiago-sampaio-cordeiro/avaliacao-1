import React from "react";
import { Pressable, Image, StyleSheet, ImageSourcePropType } from "react-native";

interface ImageButtonProps {
    source: ImageSourcePropType; // Imagem a ser exibida
    onPress: () => void; // Evento disparado ao pressionar o botão
    width?: number; // Largura personalizada (opcional)
    height?: number; // Altura personalizada (opcional)
}

export default function ImageButton({
                                        source,
                                        onPress,
                                        width = 50, // Valor padrão para largura
                                        height = 50, // Valor padrão para altura
                                    }: ImageButtonProps) {
    return (
        <Pressable onPress={onPress} style={styles.button}>
            <Image source={source} style={{ width, height, resizeMode: "contain" }} />
        </Pressable>
    );
}

const styles = StyleSheet.create({
    button: {
        alignItems: "center",
        justifyContent: "center",
    },
});

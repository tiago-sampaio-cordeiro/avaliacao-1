import React from "react";
import { Pressable, Image, StyleSheet, ImageSourcePropType } from "react-native";

interface ImageButtonProps {
    source: ImageSourcePropType;
    onPress: () => void;
    width?: number;
    height?: number;
}

export default function ImageButton({
                                        source,
                                        onPress,
                                        width = 50,
                                        height = 50,
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

import React from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import { Image } from "expo-image";
import { useNavigation } from "@react-navigation/native";

export default function Evelyn() {
    const navigation = useNavigation();

    return (
        <View style={styles.container}>
            <TouchableOpacity
                onPress={() => navigation.navigate("HomeEvelyn")}
            >
                <Image source={require("../assets/roupa4.jpg")} style={styles.img} />
            </TouchableOpacity>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#f8f8f8",
    },
    img: {
        width: 300,
        height: 300,
        borderRadius: 20,
        borderWidth: 2,
        borderColor: "rgba(119, 6, 36, 1)",
        alignSelf: "center",
    },
    text: {
        fontSize: 24,
        fontWeight: "bold",
        color: "grey"
    },
});
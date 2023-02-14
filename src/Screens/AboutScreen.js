import { StatusBar } from "expo-status-bar";
import React, { useContext } from "react";
import { StyleSheet, View } from "react-native";

const AboutScreen = () => {

    return (
        <View style={styles.container}>
            <StatusBar style="auto" />

        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
});

export default AboutScreen;
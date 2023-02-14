import React from 'react';
import { ActivityIndicator, StyleSheet, Text, View } from 'react-native';
import Colors from '../utilities/Color';

const Spinner = () => (
    <View style={styles.loader}>
        <ActivityIndicator size='large' color={Colors.RED} />
        <Text style={styles.loaderText}>Nous récupérons les données...</Text>
    </View>
);

const styles = StyleSheet.create({
    loader: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: Colors.WHITE,
    },
    loaderText: {
        color: Colors.BLUEBLACK,
        fontSize: 16,
        fontWeight: '300',
        marginTop: 10
    },
});

export default Spinner;
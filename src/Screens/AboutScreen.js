import { StatusBar } from "expo-status-bar";
import React from "react";
import { Dimensions, Image, StyleSheet, Text, View } from "react-native";
import Constants from "expo-constants"
import { AntDesign } from '@expo/vector-icons';
import { A } from '@expo/html-elements';
import { SafeAreaView } from "react-native-safe-area-context";
import Colors from "../utilities/Color";

const { width, height } = Dimensions.get("window");


const AboutScreen = () => {

    const version = Constants.manifest.version;

    return (
        <SafeAreaView style={styles.container}>
            <StatusBar style="dark" />
            <View style={styles.logoContainer}>
                <Image style={styles.logo} source={require('../../assets/icon_removebg.png')} />
                <Text style={styles.AppName}>Films populaires V{version} </Text>
            </View>
            <View style={styles.hr}></View>
            <View style={styles.linkContainer}>
                <Text style={styles.linkContainerTitle}>Suivez-nous sur </Text>
                <View style={styles.linkContainerItem}>
                    <AntDesign name="linkedin-square" size={20} color="black" />
                    <Text style={styles.linkContainerItemName}>Linkedin</Text>
                    <A style={styles.linkContainerItemLink} href="https://www.linkedin.com/in/vanotis720/">@Vander Otis</A>
                </View>
                <View style={styles.linkContainerItem}>
                    <AntDesign name="twitter" size={20} color="black" />
                    <Text style={styles.linkContainerItemName}>Twitter</Text>
                    <A style={styles.linkContainerItemLink} href="https://twitter.com/otis_vander">@otis_vander</A>
                </View>
                <View style={styles.linkContainerItem}>
                    <AntDesign name="instagram" size={20} color="black" />
                    <Text style={styles.linkContainerItemName}>Instagram</Text>
                    <A style={styles.linkContainerItemLink} href="https://www.instagram.com/vanotis720/">@Vander Otis</A>
                </View>
                <View style={styles.privacyContainer}>
                    <A style={styles.privacyLink} href="https://www.privacypolicies.com/live/ba1afd62-3134-49a6-b601-0091554de3cf">Notre politique de confidentialité</A>
                    <AntDesign name="doubleright" size={18} color="#4285f4" />
                </View>
            </View>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingHorizontal: 30,
        backgroundColor: Colors.WHITE,
    },
    logoContainer: {
        justifyContent: 'center',
        alignItems: 'center',
        marginVertical: height / 15,
    },
    logo: {
        width: width / 2,
        height: width / 2,
        resizeMode: 'contain',
    },
    AppName: {
        fontSize: 18,
        fontWeight: '600',
        marginTop: 20
    },
    hr: {
        borderBottomColor: 'gray',
        borderBottomWidth: 0.5,
        width: '100%',
        marginTop: 10
    },
    linkContainer: {
        justifyContent: 'flex-start'
    },
    linkContainerTitle: {
        fontSize: 20,
        color: 'gray',
        fontWeight: '500',
        marginVertical: 20
    },
    linkContainerItem: {
        flexDirection: 'row',
        marginBottom: 15,
        alignItems: 'center'
    },
    linkContainerItemName: {
        fontSize: 17,
        fontWeight: '400',
        marginHorizontal: 10,
    },
    linkContainerItemLink: {
        color: '#4285f4',
        fontSize: 17,
        fontWeight: '400',
    },
    privacyContainer: {
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'row',
        marginTop: 20
    },
    privacyLink: {
        fontSize: 15,
        color: '#4285f4',
        marginEnd: 5
    },
});

export default AboutScreen;
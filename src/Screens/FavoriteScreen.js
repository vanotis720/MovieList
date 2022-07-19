import React, { useContext } from "react";
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, FlatList } from 'react-native';
import Colors from "../utilities/Color";
import MovieCardAlt from "../Components/MovieCardAlt";
import context from "../Context/context";


const FavoriteScreen = () => {
    const { favorites } = React.useContext(context);

    return (
        <View style={styles.container}>
            <StatusBar style="white" />
            <View style={styles.popular}>
                <View style={styles.popularContent}>
                    {
                        (favorites.length > 0) ? (
                            <FlatList data={favorites}
                                renderItem={({ item }) =>
                                    <MovieCardAlt movie={item.favorite} />
                                }
                            />
                        ) : (
                            <View style={styles.noFavotite}>
                                <Image source={require('../../assets/icon.png')} style={styles.noFavotiteImage} />
                                <Text style={styles.noFavotiteText}> No favorite yet </Text>
                            </View>
                        )
                    }
                </View>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: Colors.WHITE,
        marginBottom: 10,
        paddingHorizontal: 15,
    },
    popular: {
        flex: 1,
    },
    popularContent: {
        flex: 1,
        paddingVertical: 10,
    },
    noFavotite: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        color: Colors.BLUEBLACK,
    },
    noFavotiteText: {
        color: Colors.BLUEBLACK,
        fontSize: 32,
        fontWeight: 'bold',
        textAlign: 'center',
    },
    noFavotiteImage: {
        width: 120,
        height: 120,
        marginBottom: 20,
    },
});

export default FavoriteScreen;
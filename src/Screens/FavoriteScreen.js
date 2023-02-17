import React, { useContext } from "react";
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, FlatList } from 'react-native';
import Colors from "../utilities/Color";
import MovieCardAlt from "../Components/MovieCardAlt";
import context from "../Context/context";
import { AntDesign } from '@expo/vector-icons';
import { SafeAreaView } from "react-native-safe-area-context";


const FavoriteScreen = () => {
    const { favorites } = React.useContext(context);

    return (
        <SafeAreaView style={styles.container}>
            <StatusBar style="dark" />
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
                                <Image source={require('../../assets/icon/undraw_Web_search_re_efla.png')} style={styles.noFavotiteImage} />
                                <View style={styles.noFavotiteTextContainer}>
                                    <Text style={styles.noFavotiteText}>Aucun favori pour l'instant</Text>
                                    <Text style={styles.noFavotiteTextDescription}>
                                        Vous pouvez ajouter un film a vos favoris en appuyant sur l'icon <AntDesign name="heart" size={16} color={Colors.RED} /> dans les details d'un film.
                                    </Text>
                                </View>
                            </View>
                        )
                    }
                </View>
            </View>
        </SafeAreaView>
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
    noFavotiteImage: {
        resizeMode: 'contain',
        height: '50%',
    },
    noFavotiteTextContainer: {
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 10
    },
    noFavotiteText: {
        color: Colors.BLUEBLACK,
        fontSize: 30,
        fontWeight: '700',
        textAlign: 'center',
    },
    noFavotiteTextDescription: {
        color: Colors.BLACK,
        fontSize: 16,
        fontWeight: '300',
        marginVertical: 10,
        textAlign: 'center'
    }

});

export default FavoriteScreen;
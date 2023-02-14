import React, { useState, useEffect } from "react";
import { StyleSheet, Text, View, FlatList, ActivityIndicator } from 'react-native';
import Colors from "../utilities/Color";
import MovieCard from "../Components/MovieCard";
import MovieCardAlt from "../Components/MovieCardAlt";
import { url, apiKey } from "../services/api";
import Spinner from "../Components/Spinner";
import context from "../Context/context";
import { SafeAreaView } from "react-native-safe-area-context";

const HomeScreen = ({ navigation }) => {

    const [isLoading, setIsLoading] = useState(true);
    const [results, setResults] = useState([]);

    const fetchPopular = async () => {
        fetch(`${url}/movie/popular?api_key=${apiKey}`)
            .then((response) => response.json())
            .then((json) => {
                let items = json.results;
                items.sort(function (a, b) {
                    return b.vote_average - a.vote_average;
                });
                setResults(items);
                setIsLoading(false);
            }).catch((error) => {
                console.error(error);
                setIsLoading(false);
            });
    }

    useEffect(() => {
        fetchPopular();
    }
        , []);

    return (
        <SafeAreaView style={styles.container}>
            {
                (!isLoading) ? (
                    <View style={styles.popular}>
                        <Text style={styles.sectionTitle}>Films populaires</Text>
                        <View style={styles.popularContent}>
                            <FlatList data={results} showsVerticalScrollIndicator={false}
                                renderItem={({ item }) => <MovieCardAlt movie={item} />}
                            />
                        </View>
                    </View>
                ) : (
                    <Spinner />
                )
            }
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: Colors.WHITE,
        paddingHorizontal: 20,
    },
    nowShowing: {
        flex: 0.3,
        marginBottom: 10,
    },
    sectionTitle: {
        fontSize: 22,
        color: Colors.BLUEBLACK,
        marginVertical: 10,
        fontWeight: '700',
        textAlign: 'center',
    },
    nowShowingContent: {
        flex: 1,
    },
    popular: {
        flex: 1,
    },
    popularContent: {
        flex: 1,
    },
});

export default HomeScreen;
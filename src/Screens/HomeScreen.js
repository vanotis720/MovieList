import React, { useState, useEffect } from "react";
import { StyleSheet, Text, View, FlatList } from 'react-native';
import Colors from "../utilities/Color";
import MovieCard from "../Components/MovieCard";
import MovieCardAlt from "../Components/MovieCardAlt";
import { url, apiKey } from "../services/api";
import Spinner from "../Components/Spinner";

const HomeScreen = ({ navigation }) => {

    const [isLoading, setIsLoading] = useState(true);
    const [results, setResults] = useState([]);
    const [latest, setLatest] = useState({});

    const fetchPopular = async () => {
        fetch(`${url}/movie/popular?api_key=${apiKey}`)
            .then((response) => response.json())
            .then((json) => {
                setResults(json.
                    results);
                setIsLoading(false);
                console.log(json.
                    results);
            }).catch((error) => {
                console.error(error);
            });
    }

    const fetchLatest = async () => {
        fetch(`${url}/movie/latest?api_key=${apiKey}`)
            .then((response) => response.json())
            .then((json) => {
                setLatest(json);
                setIsLoading(false);
                console.log(json);
            }).catch((error) => {
                console.error(error);
            });
    }


    useEffect(() => {
        fetchPopular();
        fetchLatest();
    }
        , []);

    return (
        <>
            {
                (!isLoading) ? (
                    <View style={styles.container}>
                        <View style={styles.nowShowing}>
                            <Text style={styles.sectionTitle}>Latest Movie</Text>
                            <View style={styles.nowShowingContent}>
                                <MovieCard movie={latest} />
                            </View>
                        </View>
                        <View style={styles.popular}>
                            <Text style={styles.sectionTitle}>Popular Movies</Text>
                            <View style={styles.popularContent}>
                                <FlatList data={results}
                                    renderItem={({ item }) => <MovieCardAlt movie={item} />}
                                />
                            </View>
                        </View>
                    </View>
                ) : (
                    <View style={styles.loader}>
                        <Spinner />
                    </View>
                )
            }
        </>

    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: Colors.WHITE,
        paddingBottom: 10,
        paddingHorizontal: 15,
    },
    loader: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: Colors.WHITE,
    },
    appBar: {
        flex: 0.1,
        flexDirection: 'row',
        backgroundColor: Colors.WHITE,
        justifyContent: 'space-between',
        paddingHorizontal: 20,
    },
    nowShowing: {
        flex: 0.3,
        marginBottom: 10,
    },
    sectionTitle: {
        fontSize: 20,
        color: Colors.BLUEBLACK,
        marginHorizontal: 5,
        marginVertical: 10,
        fontWeight: 'bold',
    },
    nowShowingContent: {
        flex: 1,
    },
    popular: {
        flex: 0.7,
    },
    popularContent: {
        flex: 1,
    },
});

export default HomeScreen;
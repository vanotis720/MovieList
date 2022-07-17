import React from "react";
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, ScrollView, FlatList } from 'react-native';
import Colors from "../utilities/Color";
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import MovieCard from "../Components/MovieCard";
import MovieCardAlt from "../Components/MovieCardAlt";

const movies = [
    {
        id: 1,
        title: "The Shawshank Redemption juliette",
        year: 1994,
        rating: 9.2,
        votes: 922,
        overview: "Two imprisoned world of coca cola, where they must survive a cruel and unusual prison life.",
        poster: "https://images.unsplash.com/photo-1484995342839-a9eb42974616",
        backdrop: "https://image.tmdb.org/t/p/w500/j9XKiZrVePdz2KdM8fq3IfooZHv.jpg",
        genres: ["Drama"],
        runtime: 142,
        language: "en",
        releaseDate: "1994-09-10",
        revenue: "$1,890,816,829",
        tagline: "Two imprisoned ",
    },
    {
        id: 2,
        title: "The Godfather",
        year: 1972,
        rating: 9.2,
        votes: 922,
        overview: "Two imprisoned ",
        poster: "https://media.giphy.com/media/R03zWv5p1oNSQd91EP/giphy.gif",
        backdrop: "https://image.tmdb.org/t/p/w500/j9XKiZrVePdz2KdM8fq3IfooZHv.jpg",
        genres: ["Drama"],
        runtime: 142,
        language: "en",
        releaseDate: "1994-09-10",
        revenue: "$1,890,816,829",
        tagline: "Two imprisoned ",
    },
    {
        id: 3,
        title: "The Godfather",
        year: 1972,
        rating: 9.2,
        votes: 922,
        overview: "Two imprisoned ",
        poster: "https://images.unsplash.com/photo-1484995342839-a9eb42974616",
        backdrop: "https://image.tmdb.org/t/p/w500/j9XKiZrVePdz2KdM8fq3IfooZHv.jpg",
        genres: ["Drama"],
        runtime: 142,
        language: "en",
        releaseDate: "1994-09-10",
        revenue: "$1,890,816,829",
        tagline: "Two imprisoned ",
    },
    {
        id: 4,
        title: "The Godfather",
        year: 1972,
        rating: 9.2,
        votes: 922,
        overview: "Two imprisoned ",
        poster: "https://img.icons8.com/color/240/000000/javascript--v1.png",
        backdrop: "https://image.tmdb.org/t/p/w500/j9XKiZrVePdz2KdM8fq3IfooZHv.jpg",
        genres: ["Drama"],
        runtime: 142,
        language: "en",
        releaseDate: "1994-09-10",
        revenue: "$1,890,816,829",
        tagline: "Two imprisoned ",
    },
    {
        id: 5,
        title: "The Godfather",
        year: 1972,
        rating: 9.2,
        votes: 922,
        overview: "Two imprisoned ",
        poster: "https://images.unsplash.com/photo-1484995342839-a9eb42974616",
        backdrop: "https://image.tmdb.org/t/p/w500/j9XKiZrVePdz2KdM8fq3IfooZHv.jpg",
        genres: ["Drama"],
        runtime: 142,
        language: "en",
        releaseDate: "1994-09-10",
        revenue: "$1,890,816,829",
        tagline: "Two imprisoned ",
    },
];

const HomeScreen = ({ navigation }) => {
    return (
        <View style={styles.container}>
            <View style={styles.nowShowing}>
                <Text style={styles.sectionTitle}>Latest Movies</Text>
                <View style={styles.nowShowingContent}>
                    <FlatList data={movies} horizontal
                        renderItem={({ item }) => <MovieCard movie={item} />}
                    />
                </View>
            </View>

            <View style={styles.popular}>
                <Text style={styles.sectionTitle}>Popular Movies</Text>
                <View style={styles.popularContent}>
                    <FlatList data={movies}
                        renderItem={({ item }) => <MovieCardAlt movie={item} />}
                    />
                </View>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: Colors.WHITE,
        paddingBottom: 10,
        paddingHorizontal: 15,
    },
    appBar: {
        flex: 0.1,
        flexDirection: 'row',
        backgroundColor: Colors.WHITE,
        justifyContent: 'space-between',
        paddingHorizontal: 20,
    },
    nowShowing: {
        flex: 0.4,
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
        flex: 0.6,
    },
    popularContent: {
        flex: 1,
    },
});

export default HomeScreen;
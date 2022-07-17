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

const HomeScreen = () => {
    return (
        <View style={styles.container}>
            <StatusBar style="white" />
            <View style={styles.appBar}>
                <MaterialCommunityIcons
                    name="menu"
                    size={30}
                    style={styles.menu}
                    onPress={() => { alert("menu") }}
                />
                <Text style={styles.appBarTitle}>Home</Text>
            </View>
            <View style={styles.nowShowing}>
                <Text style={styles.sectionTitle}>Latest Movies</Text>
                <ScrollView horizontal style={styles.nowShowingContent}>
                    <FlatList data={movies} horizontal
                        renderItem={({ item }) => <MovieCard movie={item} />}
                    />
                </ScrollView>
            </View>

            <View style={styles.popular}>
                <Text style={styles.sectionTitle}>Popular Movies</Text>
                <ScrollView style={styles.popularContent}>
                    <FlatList data={movies}
                        renderItem={({ item }) => <MovieCardAlt movie={item} />}
                    />
                </ScrollView>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: Colors.WHITE,
        marginTop: StatusBar.currentHeight || 40,
        marginBottom: 10,
        marginHorizontal: 15,
    },
    appBar: {
        flex: 0.1,
        flexDirection: 'row',
        backgroundColor: Colors.WHITE,
        justifyContent: 'space-between',
        paddingHorizontal: 20,
    },
    menu: {
        flex: 0.5,
        color: Colors.BLACK,
    },
    appBarTitle: {
        flex: 0.5,
        fontSize: 20,
        color: Colors.BLUEBLACK,
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
        flex: 0.5,
    },
    popularContent: {
        flex: 1,
    },
});

export default HomeScreen;
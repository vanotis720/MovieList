import React from "react";
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, Dimensions, TouchableOpacity, ScrollView } from 'react-native';
import Colors from "../utilities/Color";
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import { formatMinutesToHours } from "../helpers/cast";


const movie = {
    id: 1,
    title: "The Shawshank Redemption juliette",
    year: 1994,
    rating: 9.2,
    votes: 922,
    overview: "With Spider-Man's identity now revealed, Peter asks Doctor Strange for help. When a spell goes wrong, dangerous foes from other worlds start to appear, forcing Peter to discover what it truly means to be Spider-Man.",
    poster: "https://images.unsplash.com/photo-1484995342839-a9eb42974616",
    backdrop: "https://image.tmdb.org/t/p/w500/j9XKiZrVePdz2KdM8fq3IfooZHv.jpg",
    genres: ["Drama"],
    runtime: 142,
    language: "en",
    releaseDate: "1994-09-10",
    revenue: "$1,890,816,829",
    tagline: "Two imprisoned ",
};

const { width, height } = Dimensions.get("window");

const FilmScreen = () => {
    return (
        <View style={styles.container}>
            <StatusBar style="auto" />
            <View style={styles.cover}>
                <Image source={{ uri: movie.poster }} style={styles.poster} />
                <TouchableOpacity
                    style={styles.iconPlay}
                    onPress={() => {
                        alert("Pressed");
                    }}
                >
                    <MaterialCommunityIcons name="play-circle" size={50} color={Colors.WHITE} />
                    <Text style={styles.iconPlayText}>Play Trailer</Text>
                </TouchableOpacity>
            </View>
            <View style={styles.infoContainer}>
                <View style={styles.titleContainer}>
                    <View style={styles.titleSection}>
                        <Text style={styles.movieTitle}>{movie.title}</Text>
                        <View style={styles.movieNote}>
                            <MaterialCommunityIcons name="star" size={20} color={Colors.YELLOW} />
                            <Text style={styles.movieNoteText}>{movie.rating}/10</Text>
                        </View>
                    </View>
                    <View style={styles.favoriSection}>
                        <TouchableOpacity
                            style={styles.iconSave}
                            onPress={() => {
                                alert("Pressed");
                            }
                            }
                        >
                            <MaterialCommunityIcons name="bookmark-outline" size={30} color={Colors.BLACK} />
                        </TouchableOpacity>
                    </View>
                </View>
                <View style={styles.metaData}>
                    <View style={styles.metaDataItem}>
                        <Text style={styles.metaDataTitle}>Length</Text>
                        <Text style={styles.metaDataText}>{formatMinutesToHours(movie.runtime)}</Text>
                    </View>
                    <View style={styles.metaDataItem}>
                        <Text style={styles.metaDataTitle}>Language</Text>
                        <Text style={styles.metaDataText}>{movie.language}</Text>
                    </View>
                    <View style={styles.metaDataItem}>
                        <Text style={styles.metaDataTitle}>Release date</Text>
                        <Text style={styles.metaDataText}>{movie.releaseDate}</Text>
                    </View>
                </View>
                <View style={styles.desciption}>
                    <Text style={styles.desciptionTitle}>Description</Text>
                    <Text style={styles.desciptionText}>{movie.overview}</Text>
                </View>
                <View style={styles.cast}>
                    <Text style={styles.castTitle}>Cast</Text>
                    <ScrollView style={styles.castContainer} horizontal>
                        <View style={styles.castItem}>
                            <Image source={{ uri: "https://images.unsplash.com/photo-1518791841217-8f162f1e1131" }} style={styles.castImage} />
                            <Text style={styles.castName}>Tom Hanks</Text>
                        </View>
                        <View style={styles.castItem}>
                            <Image source={{ uri: "https://images.unsplash.com/photo-1518791841217-8f162f1e1131" }} style={styles.castImage} />
                            <Text style={styles.castName}>Tom Hanks</Text>
                        </View>
                        <View style={styles.castItem}>
                            <Image source={{ uri: "https://images.unsplash.com/photo-1518791841217-8f162f1e1131" }} style={styles.castImage} />
                            <Text style={styles.castName}>Tom Hanks</Text>
                        </View>
                        <View style={styles.castItem}>
                            <Image source={{ uri: "https://images.unsplash.com/photo-1518791841217-8f162f1e1131" }} style={styles.castImage} />
                            <Text style={styles.castName}>Tom Hanks</Text>
                        </View>
                        <View style={styles.castItem}>
                            <Image source={{ uri: "https://images.unsplash.com/photo-1518791841217-8f162f1e1131" }} style={styles.castImage} />
                            <Text style={styles.castName}>Tom Hanks</Text>
                        </View>
                    </ScrollView>
                </View>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: Colors.WHITE,
        marginTop: 30,
    },
    cover: {
        flex: 2,
        width: width,
        backgroundColor: Colors.WHITE,
        overflow: "hidden",
        justifyContent: "center",
    },
    poster: {
        width: "100%",
        height: "100%",
        resizeMode: "contain",
    },
    iconPlay: {
        position: "absolute",
        top: "40%",
        left: width / 2 - 25,
    },
    iconPlayText: {
        color: Colors.WHITE,
        fontSize: 14,
        justifyContent: "center",
    },
    infoContainer: {
        flex: 4,
        borderTopRightRadius: 10,
        borderTopLeftRadius: 10,
        marginHorizontal: 10,
    },
    titleContainer: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        paddingHorizontal: 10,
        paddingVertical: 10,
    },
    movieTitle: {
        fontSize: 20,
        flexWrap: "wrap",
        fontWeight: 'bold',
        color: Colors.BLUEBLACK,
    },
    movieNote: {
        flexDirection: 'row',
        margin: 5,
    },
    movieNoteText: {
        fontSize: 12,
        color: Colors.BLACK,
    },
    favoriSection: {
        alignItems: "center",
        paddingHorizontal: 10,
        paddingVertical: 10,
    },
    metaData: {
        flexDirection: "row",
        justifyContent: "space-between",
        paddingHorizontal: 10,
        paddingVertical: 10,
    },
    metaDataItem: {
        alignItems: "center",
    },
    metaDataTitle: {
        fontSize: 14,
        color: Colors.BLUEBLACK,
    },
    metaDataText: {
        fontSize: 14,
        color: Colors.BLACK,
        fontWeight: 'bold',
    },
    desciption: {
        paddingHorizontal: 10,
        paddingVertical: 10,
    },
    desciptionTitle: {
        fontSize: 17,
        color: Colors.BLUEBLACK,
        fontWeight: 'bold',
    },
    desciptionText: {
        fontSize: 14,
        color: Colors.BLACK,
    },
    cast: {
        paddingHorizontal: 10,
        paddingVertical: 10,
    },
    castTitle: {
        fontSize: 17,
        color: Colors.BLUEBLACK,
        fontWeight: 'bold',
    },
    castContainer: {
        flexDirection: "row",
        flexWrap: "wrap",
        marginTop: 10,
    },
    castItem: {
        alignItems: "center",
        marginBottom: 10,
        marginRight: 10,
    },
    castImage: {
        width: width / 4,
        height: width / 4,
        borderRadius: 10,
    },
    castName: {
        fontSize: 14,
        color: Colors.BLACK,
        fontWeight: 'bold',
    }

});

export default FilmScreen;
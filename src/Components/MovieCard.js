import React from "react";
import { StyleSheet, View, Image, Text, Dimensions, TouchableOpacity } from "react-native";
import Colors from "../utilities/Color";
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import { useNavigation } from "@react-navigation/native";
import { excerpt } from "../helpers/string";

const height = Dimensions.get("window").height;
const width = Dimensions.get("window").width;

const MovieCard = ({ movie }) => {

    const navigation = useNavigation();
    const poster = (movie.poster_path) ? 'http://image.tmdb.org/t/p/w500/' + movie.poster_path : 'https://source.unsplash.com/random/500x250';

    return (
        <TouchableOpacity
            style={styles.movie}
            onPress={() => {
                navigation.navigate("MovieDetail", { id: movie.id });
            }
            }>
            <Image source={{ uri: poster }} style={styles.moviePoster} />
            <View style={styles.titleCover}>
                <Text style={styles.movieTitle}>{excerpt(movie.title, 25)}</Text>
            </View>
        </TouchableOpacity>
    );
}

const styles = StyleSheet.create({
    movie: {
        flex: 1,
        marginHorizontal: 3,
        borderRadius: 10,
        backgroundColor: Colors.YELLOW,
    },
    moviePoster: {
        height: '100%',
        width: '100%',
        borderRadius: 10,
        resizeMode: 'cover',
    },
    titleCover: {
        position: 'absolute',
        bottom: 20,
        left: 20,
        right: 20,
        backgroundColor: Colors.WHITE,
        opacity: 1,
        borderRadius: 5,
    },
    movieTitle: {
        fontSize: 20,
        fontWeight: 'bold',
        color: Colors.BLUEBLACK,
        marginHorizontal: 10,
        backgroundColor: Colors.WHITE,
    },
});

export default MovieCard;
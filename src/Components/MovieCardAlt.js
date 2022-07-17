import React from "react";
import { StyleSheet, View, Image, Text, Dimensions, TouchableOpacity } from "react-native";
import Colors from "../utilities/Color";
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import { formatMinutesToHours } from "../helpers/cast";

const height = Dimensions.get("window").height;
const width = Dimensions.get("window").width;

const MovieCardAlt = ({ movie }) => {
    return (
        <TouchableOpacity
            style={styles.movie}
            onPress={() => {
                alert("MovieCardAlt: " + movie.title);
            }
            }>
            <Image source={{ uri: movie.poster }} style={styles.moviePoster} />
            <View style={styles.movieInfo}>
                <Text style={styles.movieTitle}>{movie.title}</Text>
                <View style={styles.movieNote}>
                    <MaterialCommunityIcons name="star" size={15} color={Colors.YELLOW} />
                    <Text style={styles.movieNoteText}>{movie.rating}/10</Text>
                </View>
                <Text style={styles.movieOverview}>{movie.overview}</Text>
                <View style={styles.movieNote}>
                    <MaterialCommunityIcons name="clock" size={15} color={Colors.YELLOW} />
                    <Text style={styles.movieNoteText}>{formatMinutesToHours(movie.runtime)}</Text>
                </View>
            </View>
        </TouchableOpacity>
    );
}

const styles = StyleSheet.create({
    movie: {
        flex: 1,
        flexDirection: 'row',
        width: width,
        height: height / 5,
        marginVertical: 5,
        borderRadius: 10,
    },
    moviePoster: {
        height: '100%',
        width: '35%',
        borderRadius: 5,
        resizeMode: 'cover',
    },
    movieInfo: {
        width: '65%',
        flexDirection: 'column',
        justifyContent: 'space-between',
        paddingHorizontal: 10,
    },
    movieTitle: {
        fontSize: 16,
        flexWrap: 'wrap',
        fontWeight: 'bold',
        color: Colors.BLUEBLACK,
        marginHorizontal: 5,
    },
    movieNote: {
        flexDirection: 'row',
    },
    movieNoteText: {
        marginBottom: 5,
        fontSize: 12,
        color: Colors.BLACK,
    },
    movieOverview: {
        fontSize: 12,
        color: Colors.BLACK,
        marginHorizontal: 5,
        marginBottom: 5,
    }
});

export default MovieCardAlt;
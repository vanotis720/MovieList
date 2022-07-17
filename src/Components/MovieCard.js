import React from "react";
import { StyleSheet, View, Image, Text, Dimensions, TouchableOpacity } from "react-native";
import Colors from "../utilities/Color";
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import { useNavigation } from "@react-navigation/native";

const height = Dimensions.get("window").height;
const width = Dimensions.get("window").width;

const MovieCard = ({ movie }) => {

    const navigation = useNavigation();

    return (
        <TouchableOpacity
            style={styles.movie}
            onPress={() => {
                navigation.navigate("MovieDetail", { movie });
            }
            }>
            <Image source={{ uri: movie.poster }} style={styles.moviePoster} />
            <Text style={styles.movieTitle}>{movie.title}</Text>
            <View style={styles.movieNote}>
                <MaterialCommunityIcons name="star" size={20} color={Colors.YELLOW} />
                <Text style={styles.movieNoteText}>{movie.rating}/10</Text>
            </View>
        </TouchableOpacity>
    );
}

const styles = StyleSheet.create({
    movie: {
        flex: 1,
        width: width / 2.5,
        marginHorizontal: 5,
        borderRadius: 10,
    },
    moviePoster: {
        height: '80%',
        width: '100%',
        borderRadius: 5,
        resizeMode: 'cover',
        marginBottom: 8,
    },
    movieTitle: {
        fontSize: 14,
        fontWeight: 'bold',
        color: Colors.BLUEBLACK,
    },
    movieNote: {
        flexDirection: 'row',
    },
    movieNoteText: {
        marginBottom: 5,
        fontSize: 12,
        color: Colors.BLACK,
    },
});

export default MovieCard;
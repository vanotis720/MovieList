import React, { useState, useEffect } from "react";
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, Dimensions, TouchableOpacity, ScrollView } from 'react-native';
import Colors from "../utilities/Color";
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import { formatMinutesToHours } from "../helpers/cast";
import Spinner from "../Components/Spinner";
import { apiKey, url } from "../services/api";


const { width, height } = Dimensions.get("window");

const FilmScreen = ({ route, navigation }) => {

    const { id } = route.params;
    const [isLoading, setIsLoading] = useState(true);
    const [result, setResult] = useState([]);

    console.log(id);
    console.log(route.params);

    const fetchDetail = async () => {
        fetch(`${url}/movie/${id}?api_key=${apiKey}`)
            .then((response) => response.json())
            .then((json) => {
                setResult(json);
                setIsLoading(false);
                console.log(json);
            }).catch((error) => {
                console.error(error);
            });
    }

    useEffect(() => {
        fetchDetail();
    }
        , []);

    console.log(result);
    const poster = (result.backdrop_path) ? 'http://image.tmdb.org/t/p/w500/' + result.backdrop_path : 'https://source.unsplash.com/random/500x250';

    return (
        <>
            {
                (!isLoading) ? (
                    <View style={styles.container}>
                        <StatusBar style="auto" />
                        <View style={styles.cover}>
                            <Image source={{ uri: poster }} style={styles.poster} />
                            <TouchableOpacity
                                style={styles.iconPlay}
                                onPress={() => {
                                    // 
                                }}
                            >
                                <MaterialCommunityIcons name="play-circle" size={50} color={Colors.WHITE} />
                                <Text style={styles.iconPlayText}>Play Trailer</Text>
                            </TouchableOpacity>
                        </View>
                        <View style={styles.infoContainer}>
                            <View style={styles.titleContainer}>
                                <View style={styles.titleSection}>
                                    <Text style={styles.resultTitle}>{result.title}</Text>
                                    <View style={styles.resultNote}>
                                        <MaterialCommunityIcons name="star" size={20} color={Colors.YELLOW} />
                                        <Text style={styles.resultNoteText}>{result.vote_average}/10</Text>
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
                                    <Text style={styles.metaDataText}>{formatMinutesToHours(result.runtime ? result.runtime : 0)}</Text>
                                </View>
                                <View style={styles.metaDataItem}>
                                    <Text style={styles.metaDataTitle}>Language</Text>
                                    <Text style={styles.metaDataText}>{result.original_language}</Text>
                                </View>
                                <View style={styles.metaDataItem}>
                                    <Text style={styles.metaDataTitle}>Release date</Text>
                                    <Text style={styles.metaDataText}>{result.release_date == "" ? 'unknown' : result.release_date}</Text>
                                </View>
                            </View>
                            <View style={styles.desciption}>
                                <Text style={styles.desciptionTitle}>Description</Text>
                                <Text style={styles.desciptionText}>{result.overview}</Text>
                            </View>
                            {/* <View style={styles.cast}>
                                <Text style={styles.castTitle}>Cast</Text>
                                <ScrollView style={styles.castContainer} horizontal>
                                    <View style={styles.castItem}>
                                        <Image source={{ uri: "https://images.unsplash.com/photo-1518791841217-8f162f1e1131" }} style={styles.castImage} />
                                        <Text style={styles.castName}>Tom Hanks</Text>
                                    </View>
                                </ScrollView>
                            </View> */}
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
        paddingVertical: 3,
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
        paddingVertical: 5,

    },
    resultTitle: {
        fontSize: 24,
        flexWrap: "wrap",
        fontWeight: 'bold',
        color: Colors.BLUEBLACK,
    },
    resultNote: {
        flexDirection: 'row',
        margin: 5,
    },
    resultNoteText: {
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
        fontSize: 20,
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
        fontSize: 20,
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
    },

    loader: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: Colors.WHITE,
    },

});

export default FilmScreen;
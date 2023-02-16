import React, { useState, useEffect } from "react";
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, Dimensions, TouchableOpacity, ScrollView } from 'react-native';
import Colors from "../utilities/Color";
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import { Ionicons, AntDesign, Entypo } from '@expo/vector-icons';
import { formatMinutesToHours, getYearOfDate, numberToK } from "../helpers/cast";
import Spinner from "../Components/Spinner";
import { apiKey, url } from "../services/api";
import context from "../Context/context";
import AsyncStorage from '@react-native-async-storage/async-storage';
import { SafeAreaView } from "react-native-safe-area-context";
import Constants from 'expo-constants';



const { width, height } = Dimensions.get("window");

const FilmScreen = ({ route, navigation }) => {

    const { id } = route.params;
    const [isLoading, setIsLoading] = useState(true);
    const [result, setResult] = useState([]);
    const [casts, setCasts] = useState([]);
    const { favorites, addFavorite, removeFavorite } = React.useContext(context);

    const uri = require('../../assets/icon.png');

    const getColor = async () => {

    }

    const fetchDetail = async () => {
        fetch(`${url}/movie/${id}?api_key=${apiKey}`)
            .then((response) => response.json())
            .then((json) => {
                setResult(json);
                console.log('================= result ===================');
                console.log(json);
                console.log('====================================');
            }).catch((error) => {
                console.error(error);
            });
        fetchCredits();
    }

    const fetchCredits = async () => {
        fetch(`${url}/movie/${id}/credits?api_key=${apiKey}`)
            .then((response) => response.json())
            .then((json) => {
                setCasts(json);
                setIsLoading(false);
            }).catch((error) => {
                console.error(error);
                setIsLoading(false);
            });
    }

    const checkFavorite = () => {
        return favorites.some(item => item.favorite.id == result.id);
    }

    const addFavoriteHandler = () => {
        addFavorite(result);
        console.log("add new" + result.id);
    }

    const removeFavoriteHandler = () => {
        removeFavorite(result.id);
        console.log("remove favorites", result.id);
    }

    useEffect(() => {
        fetchDetail();
        return () => {
            AsyncStorage.setItem('favorites', JSON.stringify(favorites));
        }
    }
        , [favorites]);


    const poster = (result.backdrop_path) ? 'http://image.tmdb.org/t/p/w500/' + result.backdrop_path : 'http://image.tmdb.org/t/p/w500/' + result.poster_path;

    return (
        <View style={styles.container}>
            <StatusBar style="light" />
            {
                (!isLoading) ? (
                    <>
                        <View style={styles.cover}>
                            <Image source={{ uri: poster }} style={styles.poster} />
                            <View style={styles.iconTopSection}>
                                <TouchableOpacity
                                    onPress={() => {
                                        navigation.goBack();
                                    }}
                                >
                                    <Ionicons name="arrow-back" size={30} color={Colors.WHITE} />
                                </TouchableOpacity>
                                <TouchableOpacity
                                    style={styles.iconFavorite}
                                    onPress={() => {
                                        if (checkFavorite()) {
                                            removeFavoriteHandler();
                                        } else {
                                            addFavoriteHandler();
                                        }
                                    }}
                                >
                                    {
                                        (checkFavorite()) ? (
                                            <AntDesign name="heart" size={30} color={Colors.RED} />

                                        ) : (
                                            <AntDesign name="hearto" size={30} color={Colors.WHITE} />
                                        )
                                    }
                                </TouchableOpacity>
                            </View>
                            {/* <TouchableOpacity
                                style={styles.iconPlay}
                                onPress={() => {
                                    // 
                                }}
                            >
                                <MaterialCommunityIcons name="play-circle" size={height / 10} color={Colors.RED} />
                            </TouchableOpacity> */}
                        </View>
                        <ScrollView style={styles.infoContainer}>
                            <View style={styles.metaDataContainer}>
                                <Text style={styles.title}>{result.title}</Text>
                                {/* <Text style={styles.tagline}>{result.tagline}</Text> */}
                                <View style={styles.metadata}>
                                    <Text style={styles.releaseDate}>{getYearOfDate(result.release_date)}</Text>
                                    <Entypo name="dot-single" size={24} color={Colors.BLACK} />
                                    <Text style={styles.releaseDate}>{formatMinutesToHours(result.runtime)}</Text>
                                    <View style={styles.reviews}>
                                        <AntDesign name="star" size={18} color={Colors.YELLOW} />
                                        <Text style={styles.reviewsText}>{parseFloat(result.vote_average).toFixed(1)} ({numberToK(result.vote_count)} avis)</Text>
                                    </View>
                                </View>
                                <View style={styles.genreContainer}>
                                    {
                                        (result.genres) ? (
                                            result.genres.map((genre) => {
                                                return (<Text key={genre.id} style={styles.genre}>{genre.name}</Text>)
                                            })
                                        ) : null
                                    }
                                </View>
                            </View>
                            <View style={styles.descriptionContainer}>
                                <Text style={styles.description}>
                                    {result.overview}
                                </Text>
                            </View>
                            <View style={styles.castContainer} >
                                <Text style={styles.castTitle}>Cast</Text>
                                <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
                                    {casts.cast.map((cast) => {
                                        return (
                                            <View style={styles.castItem} id={cast.cast_id}>
                                                <Image source={{ uri: 'http://image.tmdb.org/t/p/w500/' + cast.profile_path }} style={styles.castImage} />
                                                <Text style={styles.castName}>{cast.name}</Text>
                                            </View>
                                        )
                                    })}
                                </ScrollView>
                            </View>
                        </ScrollView>
                    </>
                ) : (
                    <Spinner />
                )
            }
        </View>

    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: Colors.WHITE,
    },
    cover: {
        flex: 1,
    },
    poster: {
        height: '100%',
        resizeMode: "cover",
    },
    iconTopSection: {
        position: 'absolute',
        width: width,
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingHorizontal: 10,
        marginTop: Constants.statusBarHeight
    },
    iconPlay: {
        position: "absolute",
        top: "40%",
        left: (width / 2) - (height / 20),
    },
    iconPlayText: {
        color: Colors.WHITE,
        fontSize: 14,
        justifyContent: "center",
    },
    infoContainer: {
        flex: 1.5,
        paddingHorizontal: 5,
    },
    metaDataContainer: {
        justifyContent: 'center',
    },
    title: {
        fontSize: 28,
        fontWeight: '600',
        alignSelf: 'center',
    },
    metadata: {
        flexDirection: 'row',
        marginVertical: 8,
        alignItems: 'center',
        justifyContent: 'center'
    },
    releaseDate: {
        fontSize: 14,
        fontWeight: '500'
    },
    reviews: {
        flexDirection: 'row',
        marginStart: 10,
    },
    reviewsText: {
        fontSize: 14,
        fontWeight: '500',
        paddingStart: 3
    },
    genreContainer: {
        flexDirection: 'row',
        justifyContent: 'center',
        flexWrap: 'wrap'
    },
    genre: {
        paddingHorizontal: 10,
        paddingVertical: 5,
        margin: 5,
        backgroundColor: Colors.BLUEBLACK,
        color: Colors.WHITE,
        alignSelf: 'center',
        borderRadius: 10
    },
    descriptionContainer: {
        margin: 10,
        justifyContent: 'center'
    },
    description: {
        fontSize: 15,
        textAlign: 'justify'
    },
    castContainer: {
        marginHorizontal: 5
    },
    castTitle: {
        fontSize: 20,
        color: Colors.BLUEBLACK,
        fontWeight: 'bold',
        marginVertical: 5
    },
    castItem: {
        alignItems: "center",
        marginRight: 5
    },
    castImage: {
        width: width / 4,
        height: width / 4,
        borderRadius: 10,
        resizeMode: 'contain'
    },
    castName: {
        fontSize: 12,
        color: Colors.BLACK,
        fontWeight: 'bold',
    },

});

export default FilmScreen;
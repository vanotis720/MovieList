import * as React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { MaterialCommunityIcons, FontAwesome } from '@expo/vector-icons';
import { StyleSheet, View } from 'react-native';
import Colors from '../utilities/Color';
import MovieStackNavigation from './MovieStackNavigation';
import FavoriteScreen from '../Screens/FavoriteScreen';
import AboutScreen from '../Screens/AboutScreen';



const Tab = createBottomTabNavigator();

export default function AppBottom() {

    return (
        <Tab.Navigator
            initialRouteName="HomeNavigator"
            screenOptions={({ route }) => ({
                tabBarActiveTintColor: Colors.RED,
                tabBarInactiveTintColor: Colors.BLACK,
                tabBarStyle: {
                    backgroundColor: Colors.WHITE,
                    height: 50,
                    elevation: 1,
                    shadowColor: '#000',
                    shadowOffset: { width: 0, height: 1 },
                    shadowOpacity: 0.5,
                    shadowRadius: 20,
                },
            })}
        >
            <Tab.Screen
                name="HomeNavigator"
                component={MovieStackNavigation}
                options={{
                    title: 'Films',
                    tabBarIcon: ({ color, size, focused }) => (
                        <MaterialCommunityIcons name="movie-open-play" color={color} size={size} />
                    ),
                    headerShown: false,

                }}
            />
            <Tab.Screen
                name="Favoris"
                component={FavoriteScreen}
                options={{
                    title: 'Favoris',
                    tabBarIcon: ({ color, size, focused }) => (
                        <MaterialCommunityIcons name="heart" color={color} size={size} />

                    ),
                    headerShown: false,
                }}
            />
            <Tab.Screen
                name="Outils"
                component={AboutScreen}
                options={{
                    title: 'Outils',
                    tabBarIcon: ({ color, size, focused }) => (
                        <FontAwesome name="gear" color={color} size={size} />

                    ),
                    headerShown: false,
                }}
            />
        </Tab.Navigator>
    );
}

const styles = StyleSheet.create({
    background: {
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#B5E7D3',
        opacity: 0.8,
        borderRadius: 90,
        width: 25,
        height: 25
    },
});
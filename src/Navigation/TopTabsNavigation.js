/* eslint-disable prettier/prettier */
import * as React from 'react';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import HomeScreen from '../Screens/HomeScreen';
import FavoriteScreen from '../Screens/FavoriteScreen';
import Colors from '../utilities/Color';
import { StatusBar } from 'expo-status-bar';
import MovieStackNavigation from './MovieStackNavigation';

const Tab = createMaterialTopTabNavigator();

export default function TopTabsNavigation() {
    return (
        <Tab.Navigator
            initialRouteName="HomeNavigator"
            style={{
                marginTop: StatusBar.currentHeight || 30,
            }}
            screenOptions={{
                swipeEnabled: false,
                tabBarActiveTintColor: Colors.BLUEBLACK,
                tabBarInactiveTintColor: Colors.BLACK,
            }}
        >
            <Tab.Screen
                name="HomeNavigator"
                component={MovieStackNavigation}
                options={{ tabBarLabel: 'Movies' }}
            />
            <Tab.Screen name="Favorite" component={FavoriteScreen} />
        </Tab.Navigator>
    );
}

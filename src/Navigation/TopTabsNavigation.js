import * as React from 'react';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import FavoriteScreen from '../Screens/FavoriteScreen';
import Colors from '../utilities/Color';
import MovieStackNavigation from './MovieStackNavigation';
import Constants from 'expo-constants';

const Tab = createMaterialTopTabNavigator();

export default function TopTabsNavigation() {
    return (
        <Tab.Navigator
            initialRouteName="HomeNavigator"
            style={{
                marginTop: Constants.statusBarHeight,
            }}
            screenOptions={{
                swipeEnabled: false,
                tabBarActiveTintColor: Colors.RED,
                tabBarInactiveTintColor: Colors.BLACK,
            }}
        >
            <Tab.Screen
                name="HomeNavigator"
                component={MovieStackNavigation}
                options={{ tabBarLabel: 'Films' }}
            />
            <Tab.Screen name="Favoris" component={FavoriteScreen} />
        </Tab.Navigator>
    );
}

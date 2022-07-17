/* eslint-disable prettier/prettier */
import * as React from 'react';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import HomeScreen from '../Screens/HomeScreen';
import FavoriteScreen from '../Screens/FavoriteScreen';
import Colors from '../utilities/Color';
import { StatusBar } from 'expo-status-bar';

const Tab = createMaterialTopTabNavigator();

export default function TopTabsNavigation() {
    return (
        <Tab.Navigator
            initialRouteName="Home"
            // tabBarPosition="bottom"
            style={{
                marginTop: StatusBar.currentHeight || 40,
            }}
        >
            <Tab.Screen name="Home" component={HomeScreen} />
            <Tab.Screen name="Favoris" component={FavoriteScreen} />
        </Tab.Navigator>
    );
}

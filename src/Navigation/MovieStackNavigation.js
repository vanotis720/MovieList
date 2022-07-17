/* eslint-disable prettier/prettier */
import * as React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from '../Screens/HomeScreen';
import FilmScreen from '../Screens/FilmScreen';

const Stack = createNativeStackNavigator();

export default function MovieStackNavigation() {
    return (
        <Stack.Navigator initialRouteName="Home">
            <Stack.Screen
                name="Home"
                component={HomeScreen}
                options={{
                    headerShown: false,
                }}
            />
            <Stack.Screen
                name="MovieDetail"
                component={FilmScreen}
                options={{
                    headerShown: false,
                }}
            />
        </Stack.Navigator>
    );
}

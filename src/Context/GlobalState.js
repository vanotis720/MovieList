import React from 'react';
import Context from './context';
import AsyncStorage from '@react-native-async-storage/async-storage';

export default class GlobalState extends React.Component {

    state = {
        favorites: [],
    }

    // get favorites from AsyncStorage
    async componentDidMount() {
        const favorites = await AsyncStorage.getItem('favorites');
        if (favorites) {
            this.setState({ favorites: JSON.parse(favorites) });
        }
        console.log("storage get");
    }

    // add favorite to AsyncStorage
    async componentWillUnmount() {
        await AsyncStorage.setItem('favorites', JSON.stringify(this.state.favorites));
        console.log("storage set");
    }

    addFavorite = (favorite) => {
        this.setState({ favorites: [...this.state.favorites, { favorite }] });
    };

    removeFavorite = (id) => {
        console.log('remove favorites', id);
        this.setState({ favorites: this.state.favorites.filter(item => item.favorite.id !== id) });
    };

    render() {
        return (
            <Context.Provider
                value={{
                    favorites: this.state.favorites,
                    addFavorite: this.addFavorite,
                    removeFavorite: this.removeFavorite
                }}
            >
                {this.props.children}
            </Context.Provider>
        );
    }
}
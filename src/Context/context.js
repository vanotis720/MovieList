import React from 'react';

export default React.createContext({
    favorites: [],
    addFavorite: (favorite) => { },
    removeFavorite: (id) => { },
});
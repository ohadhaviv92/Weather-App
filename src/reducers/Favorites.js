
const getFromLocalStroage = (key) => {
    const data = localStorage.getItem(key);
    return data ? JSON.parse(data) : [];
}

const initialState = getFromLocalStroage('favorites')

const favoritesReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'TOGGLE':
            if (state.findIndex(city => city.Key == action.payload.Key) == -1) { //push 
                const favorites = [...state, action.payload];
                localStorage.setItem('favorites', JSON.stringify(favorites));
                return favorites;
            }
            else {
                var favoriteList = state.filter(city => city.Key != action.payload.Key); //pop
                localStorage.setItem('favorites', JSON.stringify(favoriteList));
                return favoriteList;
            }
        case 'INIT':
            return action.payload
        default:
            return state
    }
}

export default favoritesReducer
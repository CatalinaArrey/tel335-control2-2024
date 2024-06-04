const initialState = {
  facts: [],
  favorites: [],
  error: ''
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case 'FETCH_FACTS':
      return { ...state, facts: action.payload, error: '' };
    case 'ADD_TO_FAVORITES':
      return { ...state, favorites: [...state.favorites, action.payload] };
    case 'REMOVE_FROM_FAVORITES':
      return { ...state, favorites: state.favorites.filter(fav => fav.id !== action.payload.id) };
    case 'SET_ERROR':
      return { ...state, error: action.payload };
    default:
      return state;
  }
};

export default reducer;
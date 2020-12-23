import categories from '../data';
const INITIAL_STATE = {
  selectedCategorie: categories[0],
  selectedMovie: categories[0].movies[0],
  categories: [...categories],
}

export default function movieReducer(state = INITIAL_STATE, action) {

  if(action.type === 'SELECT_MOVIE') {
    const { category, movie } = action.payload;
    return {
      ...state,
      selectedCategorie: category,
      selectedMovie: movie,
    }
  }

  return state;
}
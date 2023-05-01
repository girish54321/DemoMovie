import {
  CLEAR_MOVIE_LIST,
  LOAD_FAV_MOVIE,
  SAVE_FAV_MOVIE,
  SEARCH_MOVIE,
  SEARCH_MOVIE_ERROR,
  SEARCH_MOVIE_LOADING,
  SELECT_MOVIE
} from './actionTypes'
const initialState = {
  isLoading: false,
  totalResults: "",
  query: "",
  error: null,
  images: [],
  page: 1,
  selectedMovie: null,
  favoriteMovie: []
}

export const homeImageReducer = (state = initialState, action: any) => {
  switch (action.type) {
    case SEARCH_MOVIE:
      let data = action.payload
      return {
        ...state,
        query: data.query,
        images: [...state.images, ...data.images],
        totalResults: data.totalResults,
        isLoading: false,
        error: null,
        page: data.page
      }

    case CLEAR_MOVIE_LIST:
      return {
        ...state,
        isLoading: true,
        totalResults: "",
        query: "",
        error: null,
        images: [],
        page: 1
      }
    case SEARCH_MOVIE_ERROR:
      return {
        ...state,
        isLoading: false,
        error: action.payload,
        totalResults: "",
      }

    case SEARCH_MOVIE_LOADING:
      return {
        ...state,
        isLoading: true
      }

    case SELECT_MOVIE:
      return {
        ...state,
        selectedMovie: action.payload
      }

    case SAVE_FAV_MOVIE:
      return {
        ...state,
        favoriteMovie: action.payload
      }

    case LOAD_FAV_MOVIE:
      return {
        ...state,
        favoriteMovie: action.payload
      }

    default:
      return state
  }
}

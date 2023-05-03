import {
  CLEAR_MOVIE_LIST,
  LOAD_FAV_MOVIE,
  SAVE_FAV_MOVIE,
  SEARCH_MOVIE,
  SEARCH_MOVIE_ERROR,
  SEARCH_MOVIE_LOADING,
  SELECT_MOVIE
} from './actionTypes'

export interface MoviesReducerType {
  isLoading: boolean,
  totalResults: string,
  query: string,
  error: any,
  movies: Array<any>,
  page: 1,
  selectedMovie: any,
  favoriteMovie: Array<any>,
}

const initialState: MoviesReducerType = {
  isLoading: false,
  totalResults: "",
  query: "",
  error: null,
  movies: [],
  page: 1,
  selectedMovie: null,
  favoriteMovie: []
}

export const moviesReducer = (state: MoviesReducerType = initialState, action: any) => {
  switch (action.type) {
    case SEARCH_MOVIE:
      let data = action.payload
      return {
        ...state,
        query: data.query,
        movies: [...state.movies, ...data.movies],
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
        movies: [],
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

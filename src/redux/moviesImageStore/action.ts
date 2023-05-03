import {
  CLEAR_MOVIE_LIST,
  LOAD_FAV_MOVIE,
  SAVE_FAV_MOVIE,
  SEARCH_MOVIE,
  SEARCH_MOVIE_ERROR,
  SEARCH_MOVIE_LOADING,
  SELECT_MOVIE
} from './actionTypes'
import { AppConst } from '../../constants/constants'
import { createQueryParams } from '../../helper/CreateQuery'
import axios from 'axios'
import AsyncStorage from '@react-native-async-storage/async-storage';
import { store } from '../../../App';
import { AppAlert } from '../../constants/appAlert';
export default (query: string) => async (dispatch: any, getState: any) => {
  let pageNumber = getState().moviesReducer.page;
  let params = {
    apikey: AppConst.API_EYE,
    s: query,
    page: pageNumber
  };
  let URL = `${AppConst.URL}?${createQueryParams(params)}`;
  dispatch({
    type: SEARCH_MOVIE_LOADING,
    payload: true
  });
  try {
    const response = await axios.get(URL);
    if (response.data.Response === "False") {
      dispatch({
        type: SEARCH_MOVIE_ERROR,
        payload: `${response.status} ${response.data.Error}`
      });
      return
    }
    if (response.status == 200) {
      let data = {
        movies: response.data.Search,
        totalResults: response.data.totalResults,
        page: pageNumber + 1,
        query: query
      };
      dispatch({
        type: SEARCH_MOVIE,
        payload: data
      });
    }
  } catch (error) {
    console.log(error);
    dispatch({
      type: SEARCH_MOVIE_ERROR,
      payload: `${error}`
    });
  }
};

export const setHomeError = (payload: any) => ({
  type: SEARCH_MOVIE_ERROR,
  payload
})

export const setHomeLoading = (payload: any) => ({
  type: SEARCH_MOVIE_LOADING,
  payload
})

export const clearMovieAction = () => ({
  type: CLEAR_MOVIE_LIST
})

export const selectMovieAction = (payload: any) => ({
  type: SELECT_MOVIE,
  payload
})

export const getSelectedMovieInfo = (id: string) => async (dispatch: any, getState: any) => {
  let params = {
    apikey: AppConst.API_EYE,
    i: id,
  };
  let URL = `${AppConst.URL}?${createQueryParams(params)}`;
  console.log(URL);

  try {
    const response = await axios.get(URL);
    console.log(response);
    if (response.data.Response === "False") {

      return
    }
    if (response.status == 200) {
      let data = {
        ...response.data
      };
      dispatch({
        type: SELECT_MOVIE,
        payload: data
      });
    }
  } catch (error) {
    console.log(error);
    dispatch({
      type: SEARCH_MOVIE_ERROR,
      payload: `${error}`
    });
  }

}

export const loadFavMovieAction = (payload: any) => ({
  type: LOAD_FAV_MOVIE,
  payload
})


export const addToFavoriteAction = (payload: any) => async (dispatch: any, getState: any) => {
  let data = store.getState().moviesReducer;
  let array1: any = []
  if (data?.favoriteMovie?.length) {
    array1 = [payload, ...data?.favoriteMovie,]
  } else {
    array1 = [payload]
  }
  const jsonValue = JSON.stringify(array1);
  AsyncStorage.setItem(LOAD_FAV_MOVIE, jsonValue);
  AppAlert("Success.", "Movie is added to Favorite.")
  dispatch({
    type: SAVE_FAV_MOVIE,
    payload: array1
  });
}
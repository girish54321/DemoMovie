import React, { useEffect } from "react"
import { createStackNavigator } from "@react-navigation/stack";
import { SelectedMovieScreen } from "../../Screen/SelectedMovieScreen/SelectedMovieScreen";
import { HomeScreen } from "../../Screen/HomeScreen/HomeScreen";
import { Route } from "../../constants/Route";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { LOAD_FAV_MOVIE } from "../../redux/homeImageStore/actionTypes";
import { loadFavMovieAction } from "../../redux/homeImageStore/action";
import { useDispatch } from "react-redux";
const HomeStack = createStackNavigator();

const HomeScreenStack = () => {
    const appDispatch = useDispatch()

    useEffect(() => {
        loadMovie()
    }, [])

    const loadMovie = () => {
        AsyncStorage.getItem(LOAD_FAV_MOVIE)
            .then((value) => {
                if (value) {
                    let data = JSON.parse(value);
                    appDispatch(loadFavMovieAction(data));
                } else {
                    appDispatch(loadFavMovieAction([]));
                }
            })
            .catch(() => {
                appDispatch(loadFavMovieAction([]));
            });
    }
    return (
        <HomeStack.Navigator
            screenOptions={{
                title: "Welcome",
            }}
        >
            <HomeStack.Screen name={Route.WELCOME} component={HomeScreen} />
            <HomeStack.Screen name={Route.SELECTED_MOVIE_SCREEN} component={SelectedMovieScreen} />

        </HomeStack.Navigator>
    )
}

export default HomeScreenStack;


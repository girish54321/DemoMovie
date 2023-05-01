import React from "react"
import { createStackNavigator } from "@react-navigation/stack";
import { SelectedMovieScreen } from "../../Screen/SelectedMovieScreen/SelectedMovieScreen";
import { Route } from "../../constants/Route";
import { FavoriteMovieScreen } from "../../Screen/FavoriteMovieScreen/FavoriteMovieScreen";
const HomeStack = createStackNavigator();

const FavScreenStack = () => {
    return (
        <HomeStack.Navigator
            screenOptions={{
                title: "Welcome",
            }}
        >
            <HomeStack.Screen name={Route.FAV} component={FavoriteMovieScreen} />
            <HomeStack.Screen name={Route.SELECTED_MOVIE_SCREEN} component={SelectedMovieScreen} />
        </HomeStack.Navigator>
    )
}

export default FavScreenStack;


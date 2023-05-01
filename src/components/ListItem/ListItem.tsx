import React from "react";
import { GestureResponderEvent, Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { selectMovieAction } from "../../redux/homeImageStore/action";
import { navigate } from "../../navigation/NavigationService";
import { Route } from "../../constants/Route";
import { useDispatch } from "react-redux";

export const MovieListItem = ({ movie }) => {
    const appDispatch = useDispatch()

    return (
        <TouchableOpacity style={MovieListItemStyles.container}
            onPress={() => {
                appDispatch(selectMovieAction(movie))
                navigate(Route.SELECTED_MOVIE_SCREEN)
            }}
        >
            <Image source={{ uri: movie.Poster }} style={MovieListItemStyles.poster} />
            <View style={MovieListItemStyles.details}>
                <Text style={MovieListItemStyles.title}>{movie.Title}</Text>
                <Text style={MovieListItemStyles.year}>{movie.Year}</Text>
            </View>
        </TouchableOpacity>
    );
};

const MovieListItemStyles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'row',
        backgroundColor: 'gray',
        margin: 8,
    },
    poster: {
        height: 250,
        width: 180,
        resizeMode: 'cover',
    },
    details: {
        marginLeft: 20,
    },
    title: {
        fontSize: 18,
        fontWeight: 'bold',
        marginBottom: 5,
    },
    year: {
        fontSize: 16,
        color: '#888',
    },
});



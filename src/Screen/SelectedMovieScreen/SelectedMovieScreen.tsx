
import React, { useEffect } from "react"
import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import { useDispatch, useSelector } from "react-redux"
import { addToFavoriteAction, getSelectedMovieInfo } from "../../redux/homeImageStore/action"

export const SelectedMovieScreen = (props: any) => {
    const appDispatch = useDispatch()
    const selectedMovie: any = useSelector((state: any) => state.moviesReducer.selectedMovie)

    useEffect(() => {
        appDispatch(getSelectedMovieInfo(selectedMovie?.imdbID))
        props.navigation.setOptions({ title: selectedMovie?.Title })
    }, [])

    return (
        <View style={styles.container}>
            <Image source={{ uri: selectedMovie?.Poster }} style={styles.poster} />
            <Text style={styles.title}>{selectedMovie?.Title}</Text>
            <Text style={styles.year}>{selectedMovie?.Year}</Text>
            <Text style={styles.plot}>{selectedMovie?.Plot}</Text>
            <TouchableOpacity style={styles.button}
                onPress={() => {
                    let data = {
                        Poster: selectedMovie?.Poster,
                        Title: selectedMovie?.Title,
                        Year: selectedMovie?.Year,
                        imdbID: selectedMovie?.imdbID,
                    }

                    appDispatch(addToFavoriteAction(data))
                }}>
                <Text style={styles.buttonText}>Add to Favorites</Text>
            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    poster: {
        width: 200,
        height: 300,
        resizeMode: 'cover',
        marginBottom: 10,
        borderRadius: 14,
    },
    details: {
        marginLeft: 20,
        flex: 1,
    },
    title: {
        fontSize: 20,
        fontWeight: 'bold',
        marginBottom: 5,
    },
    button: {
        margin: 6,
        backgroundColor: '#ffbf00',
        paddingHorizontal: 10,
        paddingVertical: 5,
        borderRadius: 5,
    },
    buttonText: {
        color: '#fff',
        fontWeight: 'bold',
    },
    year: {
        fontSize: 16,
        marginBottom: 5,
    },
    plot: {
        fontSize: 16,
        textAlign: 'center',
        marginHorizontal: 20,
    },
});

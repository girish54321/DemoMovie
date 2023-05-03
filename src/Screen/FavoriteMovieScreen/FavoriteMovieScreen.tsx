
import React from "react"
import { FlatList, StyleSheet, View } from 'react-native'
import { useSelector } from "react-redux"
import { EmptyScreen } from "../../constants/loadingView"
import { MovieListItem } from "../../components/ListItem/ListItem"

export const FavoriteMovieScreen = (props: any) => {
    const data = useSelector((state: any) => state.moviesReducer.favoriteMovie)
    return (
        <View style={{ flex: 1 }}>
            <FlatList
                keyExtractor={(item, index) => index.toString()}
                data={data}
                ListEmptyComponent={
                    <EmptyScreen message={"No Favorite movies yet"} />
                }
                renderItem={({ item }) => <MovieListItem movie={{
                    Poster: item.Poster,
                    Title: item.Title,
                    Type: item.Type,
                    Year: item.Year,
                    imdbID: item.imdbID,
                }} />}
            />
        </View>
    )
}

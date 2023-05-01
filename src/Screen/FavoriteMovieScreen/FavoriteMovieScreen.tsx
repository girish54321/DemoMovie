
import React, { useEffect } from "react"
import { FlatList, StyleSheet, View } from 'react-native'
import { useDispatch, useSelector } from "react-redux"
import { LoadingView } from "../../constants/loadingView"
import { MovieListItem } from "../../components/ListItem/ListItem"
import { LOAD_FAV_MOVIE } from "../../redux/homeImageStore/actionTypes"
import AsyncStorage from "@react-native-async-storage/async-storage"
import { loadFavMovieAction } from "../../redux/homeImageStore/action"

export const FavoriteMovieScreen = (props: any) => {
    const appDispatch = useDispatch()
    const data: Array<any> = useSelector((state: any) => state.homeImageReducer.favoriteMovie)


    return (
        <View style={{ flex: 1 }}>
            <FlatList
                keyExtractor={(item, index) => index.toString()}
                data={data}
                renderItem={({ item }, index: number) => {
                    return (
                        <MovieListItem movie={{
                            Poster: item.Poster,
                            Title: item.Title,
                            Type: item.Type,
                            Year: item.Year,
                            imdbID: item.imdbID,
                        }} />
                    )
                }}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },

});

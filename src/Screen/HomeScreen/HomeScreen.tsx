
import React, { useState } from "react"
import { FlatList, StyleSheet, TextInput, View } from 'react-native'
import { useDispatch, useSelector } from "react-redux"
import setHomeImages, { clearMovieAction } from "../../redux/homeImageStore/action"
import { LoadingMoreView, LoadingView } from "../../constants/loadingView"
import { MovieListItem } from "../../components/ListItem/ListItem"

export const HomeScreen = () => {
    const appDispatch = useDispatch()
    const data: Array<any> = useSelector((state: any) => state.homeImageReducer?.images)
    const isLoading: boolean = useSelector((state: any) => state.homeImageReducer.isLoading)
    const error: any = useSelector((state: any) => state.homeImageReducer.error)
    const query: any = useSelector((state: any) => state.homeImageReducer.query)
    const totalResults: any = useSelector((state: any) => state.homeImageReducer.totalResults)

    return (
        <View style={{ flex: 1 }}>
            <SearchBar placeholder={"Search.."} onChangeText={() => console.log("")
            } />
            {isLoading && !data?.length ? <LoadingView /> :
                <FlatList
                    keyExtractor={(item, index) => index.toString()}
                    data={data || []}
                    onEndReached={() => {
                        console.log("!isNaN(totalResults", !isNaN(totalResults));
                        console.log("!isNaN(totalResults", Number(totalResults) > data?.length);

                        if (!isNaN(totalResults) &&
                            Number(totalResults) > data?.length) {
                            appDispatch(setHomeImages(query))
                        }
                    }}
                    ListFooterComponent={
                        isLoading ? <LoadingMoreView /> : null
                    }
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
            }
        </View>
    )
}




const SearchBar = ({ placeholder, onChangeText }) => {
    const [query, setQuery] = useState('');
    const appDispatch = useDispatch()

    const handleInputChange = (text: string) => {
        setQuery(text);
        onChangeText(text);
    };

    return (
        <View style={styles.container}>
            <TextInput
                onSubmitEditing={(e) => {
                    appDispatch(clearMovieAction())
                    appDispatch(setHomeImages(query))
                }}
                style={styles.input}
                placeholder={placeholder}
                onChangeText={handleInputChange}
                value={query}
            />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        backgroundColor: '#fff',
        borderRadius: 10,
        marginHorizontal: 14,
        marginVertical: 10,
        paddingHorizontal: 10,
        paddingVertical: 5,
        alignItems: 'center',
        elevation: 2,
    },
    icon: {
        marginRight: 10,
    },
    input: {
        flex: 1,
    },
});

export default SearchBar;

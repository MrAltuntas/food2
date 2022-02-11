import React, { useState, useEffect } from 'react'
import { View, Text, StyleSheet, ScrollView, Image, FlatList,Dimensions } from 'react-native'
import { useRoute } from '@react-navigation/native';
import yelp from '../api/yelp';

const ResultsShowScreen = () => {
    const route = useRoute();
    const id = route.params.id
    const [result, setResult] = useState(null)


    const getResults = async(id) => {
        const response = await yelp.get(`/${id}`)
        setResult(response.data)
    }

    useEffect(() => {
        getResults(id)
    }, [])

    return (
        <View>
            {result ? 
            <>
                <Text style={styles.title}>{result.name}</Text>
                <FlatList  horizontal={true}
                data={result.photos}
                showsHorizontalScrollIndicator={false}
                keyExtractor={(index)=> index}
                renderItem={({item})=> {
                    return(
                        <Image style={styles.image} source={{uri: item}}/>
                    )
                }} />

            </>
            :<Text>wait a second...</Text>}
        </View>
    )
}

const styles = StyleSheet.create({
    image:{
        width: Math.round(Dimensions.get('window').width-10),
        height: 350,
    resizeMode: 'contain',
        borderRadius: 5,
        marginBottom: 5,
        marginLeft: 5,
    },
    title:{
        fontWeight: 'bold',
        fontSize: 18
    }
})

export default ResultsShowScreen
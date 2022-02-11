import React from 'react'
import { View, Image, Text, StyleSheet, FlatList } from 'react-native'
import { Feather } from '@expo/vector-icons'

const ResultsDetail = ({result}) => {
    return(
        <View style={styles.container}>
            <Image style={styles.image} source={{uri: result.image_url}}/>
            <Text style={styles.name}>{result.name}</Text>
            <Text style={styles.name2}>{result.rating} Starts, {result.review_count} Reviews</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container:{
        marginLeft: 10,
        marginBottom: 15
    },
    image:{
        width: 250,
        height: 120,
        borderRadius: 5,
        marginBottom: 5
    },
    name:{
        fontWeight: 'bold',
        fontSize: 14
    },
    name2:{
        fontSize: 14,
        color: 'gray'
    }
})

export default ResultsDetail
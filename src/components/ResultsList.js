import React from 'react'
import { View, TextInput, Text, StyleSheet, FlatList, TouchableOpacity } from 'react-native'
import { Feather } from '@expo/vector-icons'
import ResultsDetail from './ResultsDetail'
import { useNavigation } from '@react-navigation/native';

const ResultsList = ({ title, results }) => {
    console.log("resultlist refresh");
    const navigation = useNavigation();

    return (
        <View style={styles.background}>
            <Text style={styles.title}>{title}</Text>
            <FlatList
                horizontal={true}
                data={results}
                showsHorizontalScrollIndicator={false}
                keyExtractor={(result) => result.id}
                renderItem={({ item }) => {
                    return (
                        <TouchableOpacity onPress={() => navigation.navigate('Detail', {id: item.id})}>
                            <ResultsDetail result={item}/>
                        </TouchableOpacity>
                    )
                }}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    title: {
        fontSize: 18,
        fontWeight: 'bold',
        marginLeft: 10,
        marginBottom: 10
    },
    background:{
    }
})

export default ResultsList
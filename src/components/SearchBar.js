import React from 'react'
import { View, TextInput, Text, StyleSheet } from 'react-native'
import { Feather } from '@expo/vector-icons'

const SearchBar = ({term, onTermChange, onTermSubmit}) => {
    console.log("search bar refreshh");
    return(
        <View style={styles.background}>
            <Feather style={styles.iconStyle} name="search" size={30}/>
            
            <TextInput style={styles.inputStyle} placeholder='Search' 
            value={term} onChangeText={newTerm => onTermChange(newTerm)}
             autoCorrect={false}
            onEndEditing={() => onTermSubmit()}/>
        </View>
    )
}

const styles = StyleSheet.create({
    background:{
        backgroundColor: '#c4c4c4',
        height: 50,
        borderRadius: 5,
        marginHorizontal: 10,
        flexDirection: 'row',
        marginTop: 3,
        marginBottom: 5
    },
    inputStyle:{
        flex: 1,
        fontSize: 18
    },
    iconStyle:{
        fontSize: 35,
        alignSelf: 'center',
        marginHorizontal: 15
    }
})

export default SearchBar
import React, { useState } from 'react'
import { Text, StyleSheet, ScrollView } from 'react-native'
import SearchBar from '../components/SearchBar'
import useResults from '../hooks/useResults'
import ResultsList from '../components/ResultsList'
import { Logs } from 'expo'

const SearchScreen = () => {
    const [term, setTerm] = useState("")
    const [searchApi, results, errorMessage] = useResults()
    console.log("searchscreen refreshhh")

    const filterResultsByPrice = (price) => {
        // price === '$ || '$$' || '$$$'
        return results.filter(result => {
            return result.price === price
        })
    }

    return (
        <>
            <SearchBar term={term} onTermChange={(newTerm) => setTerm(newTerm)}
                onTermSubmit={() => { searchApi(term) }} />



            {errorMessage.length > 0 ? <Text>{errorMessage}</Text> : null}

            <ScrollView>
                <ResultsList results={filterResultsByPrice('$')} title="Cost Effective" />
                <ResultsList results={filterResultsByPrice('$$')} title="Bit Pricier" />
                <ResultsList results={filterResultsByPrice('$$')} title="Big Spender" />
            </ScrollView>
        </>
    )
}

const style = StyleSheet.create({})

export default SearchScreen
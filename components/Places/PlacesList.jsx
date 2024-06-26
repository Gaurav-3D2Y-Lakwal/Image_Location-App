import { FlatList, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import PlacesItem from './PlacesItem'
import { Colors } from '../../constants/colors'

const PlacesList = ({places}) => {
    if(!places || places.length === 0){
        return(
            <View style={styles.fallbackContainer}>
                <Text style={styles.fallbackText}>No place added yet - start adding some! </Text>
            </View>
        )
    }



  return (
    <FlatList
    data={places}
    keyExtractor={(item) => item.id }
    renderItem={({item}) => <PlacesItem place={item}/>}
    />
  )
}

export default PlacesList

const styles = StyleSheet.create({
    fallbackContainer:{
        flex: 1,
        juustifyContent: 'center',
        alignItems: 'center'
    },
    fallbackText:{
        fontSize: 16,
        color: Colors.primary400,
    },
})
import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'

const PlacesItem = ({ place, onSelect }) => {
    
  return (
     <TouchableOpacity onPress={onSelect}>
      <Image source={{uri: place.imageUri}}/>
      <View>
        <Text>{place.title}</Text>
        <Text>{place.address}</Text>
      </View>
      </TouchableOpacity>
    
  )
}

export default PlacesItem

const styles = StyleSheet.create({
    
})

import { ScrollView, StyleSheet, Text, TextInput, View } from 'react-native'
import React, { useCallback, useState } from 'react'
import ImagePicker from './ImagePicker';
import { Colors } from '../../constants/colors';
import LocationPicker from './LocationPicker';
import Button from '../UI/Button';

const PlaceForm = () => {
    const [enteredTitle, setEnteredTitle] = useState('');
    const [selectedImage, setSelectedImage] = useState('');
    const [pickedLocation, setPickedLocation] = useState();
 
    const changeTitleHandler = (enteredText) => {
        setEnteredTitle(enteredText);
    }

    const onTakeImage = (imageUri) =>{
        setSelectedImage(imageUri);
    }

    const onPickLocation = useCallback((location) =>{
        setPickedLocation(location)
    },[]);

    const savePlaceHandler = () =>{
       const placeData = {enteredTitle};
       onCreatePlace();
    }


  return (
    <ScrollView style={styles.form}>
        <View>
            <Text style={styles.label}>Title</Text>
            <TextInput 
            style={styles.input} 
            onChangeText={changeTitleHandler} 
            value={enteredTitle}/>
        </View>
        <ImagePicker onTakeImage={onTakeImage} />
        <LocationPicker onPickLocation={onPickLocation} />
        <Button onPress={savePlaceHandler}>Add Place</Button>
    </ScrollView>
  )
}

export default PlaceForm

const styles = StyleSheet.create({
    form: {
        flex: 1,
        padding: 24,
    },
    label: {
        fontWeight: 'bold',
        marginBottom: 4,
        color: Colors.primary500,
    },
    input: {
        marginVertical: 8,
        paddingHorizontal: 4,
        paddingVertical: 8,
        fontSize: 16,
        borderBottomColor: Colors.primary700,
        borderBottomWidth: 2,
        backgroundColor: Colors.primary100,
    },
})
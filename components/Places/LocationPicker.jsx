import { Alert, StyleSheet, Text, View } from 'react-native'
import React, {useEffect, useState} from 'react'

import { Colors } from '../../constants/colors'
import OutlineButton from '../UI/OutlineButton'
import MapView, { Marker } from 'react-native-maps'
import { PermissionStatus, getCurrentPositionAsync, useForegroundPermissions } from 'expo-location'
import { useNavigation, useRoute, useIsFocused } from '@react-navigation/native'


const LocationPicker = ({onPickLocation}) => {
    const navigation = useNavigation();
    const route = useRoute();

    const [locationPermissionInformation, requestPermission] = useForegroundPermissions();
    const [mapRegion, setMapRegion] = useState({
        latitude: 37.78825,
        longitude: -122.4324,
    })
    const isFocused = useIsFocused();
    
     useEffect(()=>{
        if(isFocused && route.params){
            const mapPickedLocation =
            {lat: route.params.pickedLat,
             lng: route.params.pickedLng}

             setMapRegion(mapPickedLocation)
        }

        
       
     },[route, isFocused])

useEffect(()=>{
    const handlerLocation = async()=>{
        if(mapRegion){

            onPickLocation(mapRegion)
        }
    }
  
    handlerLocation();
    
},[mapRegion, onPickLocation]);

    const verifyPermissions = async()=>{
        if(locationPermissionInformation.status === PermissionStatus.UNDETERMINED){
            const permissionResponse = await requestPermission();

            return permissionResponse.granted;
        }

        if(locationPermissionInformation.status === PermissionStatus.DENIED){
            Alert.alert(
                'Insufficent Permissions!',
                'You need to grant location permissions'
            );
            return false;
        }
        return true
    }
    
    const getLocationHandler = async () =>{   
        const hasPermission = await verifyPermissions();

        if(!hasPermission){
            return ;
        }

        const loaction = await getCurrentPositionAsync({enableHighAccuracy: true});
        setMapRegion({
            latitude: loaction.coords.latitude,
            longitude: loaction.coords.longitude,
            latitudeDelta: 0.001,
            longitudeDelta: 0.0003,
        })
        
    }

    let locationPreview = <Text>No location is Selected yet!</Text>  
     
    if(mapRegion){
        locationPreview = (<MapView style={styles.map}
        region={mapRegion}
        zoomEnabled = {false}
        scrollEnabled ={false}
        onMapReady={()=>console.log("ready")}>
        <Marker coordinate={mapRegion} title='Marker'/>
    </MapView>)
    }



    const pickOnMapHandler = () => {
          navigation.navigate('Map')
    }

  return (
    <View>
      <View style={styles.mapPreview}>
        {locationPreview}
      </View>
      <View style={styles.action}>
        <OutlineButton icon='location' onPress={getLocationHandler}>Locate User</OutlineButton>
        <OutlineButton icon="map" onPress={pickOnMapHandler}>Pick on Map</OutlineButton>
      </View>
    </View>
  )
}

export default LocationPicker

const styles = StyleSheet.create({
    mapPreview:{
        width: '100%',
        height: 200,
        marginVertical: 8,
        justifyContent: 'center',
        alignItems: 'center',
        alignItems: 'center',
        backgroundColor: Colors.primary100,
        borderRadius: 4,
    },
    map:{
        width: '100%',
        height: '100%',
    },
    action:{
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center',
    },

})
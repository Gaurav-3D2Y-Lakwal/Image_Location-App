import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { Colors } from '../../constants/colors'
import {Ionicons} from '@expo/vector-icons'

const OutlineButton = ({onPress, icon, children}) => {
  return (
    <TouchableOpacity 
     style={styles.button}
     onPress={onPress}>
        <Ionicons 
         style={styles.icon} 
         name = {icon}
         size={18} 
         color={Colors.primary500}/>
        <Text style={styles.text}>{children}</Text>
    </TouchableOpacity>
  )
}

export default OutlineButton

const styles = StyleSheet.create({
    button:{
        paddingHorizontal: 12,
        paddingVertical: 6,
        margin: 4,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        borderWidth: 1,
        borderColor: Colors.primary500,
    },
    icon:{
        marginRight: 6,
    },
    text:{
        color: Colors.primary500,
    },
})
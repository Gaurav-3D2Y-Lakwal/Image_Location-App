import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, TextInput, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import {Ionicon} from "@expo/vector-icons"

import IconButton from './components/UI/IconButton';
import { Colors } from './constants/colors';
import AddPlace from './screens/AddPlace';
import AllPlace from './screens/AllPlace';
import Map from './screens/Map';

const Stack = createNativeStackNavigator();

export default function App() {

  return (
      <>
      <StatusBar style='auto'/>
      <NavigationContainer>
        <Stack.Navigator screenOptions={{
          headerStyle: {backgroundColor: Colors.primary500},
          headerTintColor: Colors.gray700,
          contentStyle: {backgroundColor: Colors.gray700},
        }}>
          <Stack.Screen name="AllPlace" component={AllPlace} 
          options={({navigation}) => ({
            title: 'Your Favorite Places',
            headerRight:({tintColor}) =>(
              <IconButton 
               icon="add" 
               size={24} 
               color={tintColor} 
               onPress={() => navigation.navigate('AddPlace')} />
              
             )
          })
        }/>
          <Stack.Screen name="AddPlace" component={AddPlace}
          options={{
            title: 'Add a new place'
            }} />
            <Stack.Screen name='Map' component={Map}/>
        </Stack.Navigator>
      </NavigationContainer>
      </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import login from './screens/login';
import homepage from './screens/homepage';

const MasterNavigator = createNativeStackNavigator()

export default function App() {

  return (
    <NavigationContainer>
      <MasterNavigator.Navigator>
        <MasterNavigator.Screen 
          name = 'login'
          component={login} />
        <MasterNavigator.Screen
          name ='home'
          component = {homepage}
        />
      </MasterNavigator.Navigator>
    </NavigationContainer>

  );
}

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#fff',
//     alignItems: 'center',
//     justifyContent: 'center',
//   },
// });

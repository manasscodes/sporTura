import { View, Text } from 'react-native'
import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from '../screens/HomeScreen';


export type HomeStackParamList = {
     Home: undefined;
     ProfileDetails: undefined;
}

const Stack = createNativeStackNavigator<HomeStackParamList>();

const HomeStackNavigator = () => {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
     <Stack.Screen name='Home' component={HomeScreen} />
    </Stack.Navigator>
  )
}

export default HomeStackNavigator
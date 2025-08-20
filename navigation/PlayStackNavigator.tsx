import { View, Text } from 'react-native'
import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import PlayScreen from '../screens/PlayScreen';

export type PlayStackParamList = {
  PlayHome: undefined;
  CreateActivity: undefined;
}

const Stack = createNativeStackNavigator<PlayStackParamList>();

const PlayStackNavigator = () => {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="PlayHome" component={PlayScreen}  />
    </Stack.Navigator>
  )
}

export default PlayStackNavigator
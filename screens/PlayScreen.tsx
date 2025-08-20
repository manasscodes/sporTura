import { View, Text } from 'react-native'
import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack';

export type PlayStackParamList = {
     Play: undefined;
     PlayDetails: undefined;
}

const Stack = createNativeStackNavigator<PlayStackParamList>();

const PlayScreen = () => {
  return (
    <View>
      <Text>PlayScreen</Text>
    </View>
  )
}

export default PlayScreen
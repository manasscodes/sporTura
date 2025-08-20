
import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import AppNavigator from "./AppNavigator";

const RootNavigator = () => {
  const isSignedin = true;
  const Stack = createNativeStackNavigator();

  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      {isSignedin ? (
        <Stack.Screen name="Main" component={AppNavigator} />
      ) : (
        <Stack.Group></Stack.Group>
      )}
    </Stack.Navigator>
  );
};

export default RootNavigator;

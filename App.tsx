import { StatusBar } from "expo-status-bar";
import { Text, View } from "react-native";
import "./global.css";
import RootNavigator from "./navigation/RootNavigator";
import { NavigationContainer } from "@react-navigation/native";
export default function App() {
  return (
    <NavigationContainer>
      <RootNavigator />
    </NavigationContainer>
  );
}

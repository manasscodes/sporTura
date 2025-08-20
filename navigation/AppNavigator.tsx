import { View, Text } from "react-native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import React from "react";
import HomeStackNavigator from "./HomeStackNavigator";
import PlayStackNavigator from "./PlayStackNavigator";
import BookStackNavigator from "./BookStackNavigator";
import ProfileScreen from "../screens/ProfileScreen";
import { RouteProp } from "@react-navigation/native";
import Ionicons from "@expo/vector-icons/Ionicons";

type TabParamList = {
  Home: undefined;
  Play: undefined;
  Book: undefined;
  More: undefined;
};

const Tab = createBottomTabNavigator<TabParamList>();

const AppNavigator: React.FC = () => {
  return (
    <Tab.Navigator
      screenOptions={({
        route,
      }: {
        route: RouteProp<TabParamList, keyof TabParamList>;
      }) => ({
        tabBarIcon: ({ color, size }: { color: string; size: number }) => {
          let iconName: keyof typeof Ionicons.glyphMap = "home";
          if (route.name === "Home") {
            iconName = "home";
          } else if (route.name === "Play") {
            iconName = "play-circle";
          } else if (route.name === "Book") {
            iconName = "calendar";
          } else if (route.name === "More") {
            iconName = "menu";
          }
          return <Ionicons name={iconName} color={color} size={size} />;
        },
        tabBarActiveTintColor: "#34C759",
        tabBarInactiveTintColor: "#666666",
      })}
    >
      <Tab.Screen
        name="Home"
        component={HomeStackNavigator}
        options={{ headerShown: false }}
      />
      <Tab.Screen
        name="Play"
        component={PlayStackNavigator}
        options={{ headerShown: false }}
      />
      <Tab.Screen
        name="Book"
        component={BookStackNavigator}
        options={{ headerShown: false }}
      />
      <Tab.Screen
        name="More"
        component={ProfileScreen}
        options={{ headerShown: false }}
      />
    </Tab.Navigator>
  );
};

export default AppNavigator;


import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import BookScreen from "../screens/BookScreen";

export type BookStackParamList = {
  BookHome: undefined;
  VenueInfo: {
    name: string;
    timings: string;
    locations: string;
    rating: number;
    sportsAvailable: Array<{ name: string; icon: string }>;
    bookings: any[];
  };
  Slot: {
    place: string;
    sports: any[];
    bookings: any[];
  };
  Create: { area: string };
};

const Stack = createNativeStackNavigator<BookStackParamList>();

const BookStackNavigator = () => {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="BookHome" component={BookScreen} />
    </Stack.Navigator>
  );
};

export default BookStackNavigator;

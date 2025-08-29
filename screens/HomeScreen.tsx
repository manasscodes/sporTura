import {
  View,
  Text,
  SafeAreaView,
  Pressable,
  Image,
  ScrollView,
  TouchableOpacity,
} from "react-native";
import React from "react";
import { useNavigation } from "@react-navigation/native";
import { Bell, MessageCircle } from "lucide-react-native";

const HomeScreen = () => {
  const navigation = useNavigation();

  return (
    <SafeAreaView className="flex-1 bg-white ">
      <View className="px-4 py-3 bg-white flex-row items-center justify-between border-b border-gray-200">
        <View className="flex-1">
          <Text className="text-gray-400 text-xs">Location</Text>
          <Text className="text-lg font-semibold">Vikram Nagar, Kalwa</Text>
        </View>

        <View className="flex-row items-center gap-4 ml-2">
          <MessageCircle size={20} stroke="#333" />
          <Bell size={20} stroke="#333" />
          <Pressable>
            <Image
              className="w-8 h-8 rounded-full"
              source={{
                uri: "https://lh3.googleusercontent.com/a/ACg8ocIC4xdFV968tqJUSgQRm3NCCALCTucUKWd_CXQnck0TSCEihPwo=s288-c-no",
              }}
            />
          </Pressable>
        </View>
      </View>

      <ScrollView className="px-4" showsVerticalScrollIndicator={false}>
        <View className="bg-[#F4F4F5] rounded-2xl mt-4 p-4 flex-row items-center justify-between">
          <View>
            <Text className="text-lg font-semibold">
              Set Your Weekly Fit Goal 🔥
            </Text>
            <Text className="text-sm text-gray-500 mt-1">
              KEEP YOURSELF FIT
            </Text>
          </View>
          <Text className="text-3xl">➡️</Text>
        </View>

        <View className="bg-white border border-gray-200 rounded-2xl p-4 mt-4 shadow-sm relative">
          <Text className="text-sm font-semibold text-gray-400">
            START PLAYING!
          </Text>

          <View className="flex-row items-center justify-between">
            <View>
              <Text className="text-xl font-semibold mt-2">Create Game</Text>
              <Text className="text-base text-gray-500 mt-1">
                No upcoming games in your calendar
              </Text>
            </View>
            <TouchableOpacity className="bg-white px-4 py-2 border border-gray-300 rounded-md">
              <Text className="text-base font-semibold">Create</Text>
            </TouchableOpacity>
          </View>
          <TouchableOpacity className="mt-3 self-center ">
            <Text className="text-[#222] font-semibold underline text-base">View my Calendar</Text>
          </TouchableOpacity>
        </View>

        <View className="bg-[#F9FAFB] mt-5 rounded-2xl p-4 space-y-4">
          <TouchableOpacity className="flex-row items-center justify-between">
            <View className="flex-row items-center gap-3">
              <View className="bg-green-100 p-2 rounded-full">
                <Text>👥</Text>
                
              </View>
              <View>
                  <Text className="font-semibold text-lg text-gray-800">Groups</Text>
                  <Text className="text-sm text-gray-500">Connect, Compete, Discuss</Text>
                </View>
            </View>
            <Text>→</Text>
          </TouchableOpacity>

          <TouchableOpacity className="flex-row items-center justify-between mt-6">
            <View className="flex-row items-center gap-3">
              <View className="bg-yellow-100 p-2 rounded-full">
                <Text>💡</Text>
              </View>
              <View>
                  <Text className="font-semibold text-lg text-gray-800">Game Time Activities</Text>
                  <Text className="text-sm text-gray-500">410 Sportura Hosted Games</Text>
                </View>
            </View>
            <Text>→</Text>
          </TouchableOpacity>
        </View>

      </ScrollView>
    </SafeAreaView>
  );
};

export default HomeScreen;

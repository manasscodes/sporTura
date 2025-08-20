import { View, Text, SafeAreaView, Pressable, Image } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native'
import { Bell, MessageCircle } from 'lucide-react-native';

const HomeScreen = () => {

  const navigation = useNavigation();


  return (
    <SafeAreaView className='flex-1 bg-white '>
      <View className='px-4 py-3 bg-white flex-row items-center justify-between border-b border-gray-200'>
        <View className='flex-1'>
          <Text className='text-gray-400 text-xs'>Location</Text>
          <Text className='text-lg font-semibold'>Vikram Nagar, Kalwa</Text>
        </View>

        <View className='flex-row items-center gap-4 ml-2'>
          <MessageCircle size={20} stroke="#333" />
          <Bell size={20} stroke="#333" />
          <Pressable>
            <Image 
            className='w-8 h-8 rounded-full'
            source={{uri:"https://lh3.googleusercontent.com/a/ACg8ocIC4xdFV968tqJUSgQRm3NCCALCTucUKWd_CXQnck0TSCEihPwo=s288-c-no"}} />
          </Pressable>
        </View>
      </View>
    </SafeAreaView>
  )
}

export default HomeScreen
import { View, Text, Image, TouchableOpacity, SafeAreaView } from "react-native";
import React from "react";
import { TextInput } from "react-native-gesture-handler";
import { storeColors } from "../theme";
import { ArrowLeftIcon } from "react-native-heroicons/solid";

export default function MyProfile({ navigation }) {
  return (
    <SafeAreaView className="m-4">
      <View className='flex-row items-center justify-between'>
        <TouchableOpacity onPress={() => navigation.navigate('HomeScreen')} className='p-4 bg-white rounded-xl'>
          <ArrowLeftIcon color={'#000'} size={16}/>
        </TouchableOpacity>
        <Text className="text-center font-bold">My Profile</Text>
      </View>
      <View className="my-4">
        <View className="w-[200px] h-[200px] rounded-full mx-auto">
          <Image
            source={require("../assets/images/avatar.jpg")}
            className="w-full h-full rounded-full"
          />
        </View>
        <View className="flex justify-center items-center my-4">
          <Text className="py-1 font-bold text-2xl">Kien Duong Trung</Text>
          <Text className="py-1 italic text-gray-400">
            duongtrungkien.dev@gmail.com
          </Text>
        </View>
      </View>

      <View>
        <View className="flex-row justify-between">
          <View className="w-[48%]">
            <TextInput
              placeholder="First Name"
              className="p-4 bg-white w-full rounded-full"
            />
          </View>
          <View className="w-[48%]">
            <TextInput
              placeholder="Last Name"
              className="p-4 bg-white w-full rounded-full"
            />
          </View>
        </View>
        <View className="mt-4">
          <TextInput
            placeholder="Email"
            className="p-4 bg-white w-full rounded-full"
          />
        </View>

        <View className="mt-4">
          <TextInput
            placeholder="Change Password"
            className="p-4 bg-white w-full rounded-full"
          />
        </View>

        <View className="mt-4">
          <TextInput
            placeholder="Confirm Password"
            className="p-4 bg-white w-full rounded-full italic"
          />
        </View>
      </View>
      <View className="mt-8">
        <TouchableOpacity
          className="p-4 rounded-2xl"
          style={{ backgroundColor: storeColors.backgroundBlue }}
        >
          <Text className="text-white font-bold text-lg text-center">
            Update
          </Text>
        </TouchableOpacity>
      </View>

      <View className="mt-8">
        <TouchableOpacity
          className="p-4 rounded-2xl"
          style={{ backgroundColor: "#f8f8f8" }}
          onPress={() => navigation.navigate("HomeScreen")}
        >
          <Text className="text-black font-bold text-lg text-center">Back</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}

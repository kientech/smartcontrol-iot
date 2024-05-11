import { View, Text, Image, TouchableOpacity } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native";
import { storeColors } from "../theme";

export default function Members() {
  return (
    <SafeAreaView className="m-4 h-full">
      <Text className="text-center font-bold text-2xl">All Members</Text>

      <View className="my-8">
        <View
          className="flex-row rounded-xl"
          style={{ backgroundColor: storeColors.backgroundWhite }}
        >
          <View style={{ width: "35%", height: 150 }}>
            <Image
              source={require("../assets/images/avatar.jpg")}
              className="w-full h-full object-cover rounded-xl"
            />
          </View>
          <View className="ml-4 flex-col justify-around">
            <View>
              <Text className="font-bold py-1 text-lg">Duong Trung Kien</Text>
              <Text className="italic">21161328</Text>
            </View>
            <View className="w-full h-[1px] bg-white"></View>
            <View>
              <Text className="font-semibold">
                App Mobile with React Native
              </Text>
              <Text className="font-semibold py-1">
                Server with Websocket (Socket.io)
              </Text>
              <Text className="font-semibold">Documentations</Text>
            </View>
          </View>
        </View>

        <View
          className="flex-row rounded-xl my-8"
          style={{ backgroundColor: storeColors.backgroundWhite }}
        >
          <View style={{ width: "35%", height: 150 }}>
            <Image
              source={require("../assets/images/avatar.jpg")}
              className="w-full h-full object-cover rounded-xl"
            />
          </View>
          <View className="ml-4 flex-col justify-around">
            <View>
              <Text className="font-bold py-1 text-lg">Duong Trung Kien</Text>
              <Text className="italic">21161328</Text>
            </View>
            <View className="w-full h-[1px] bg-white"></View>
            <View>
              <Text className="font-semibold">
                App Mobile with React Native
              </Text>
              <Text className="font-semibold py-1">
                Server with Websocket (Socket.io)
              </Text>
              <Text className="font-semibold">Documentations</Text>
            </View>
          </View>
        </View>

        <View
          className="flex-row rounded-xl"
          style={{ backgroundColor: storeColors.backgroundWhite }}
        >
          <View style={{ width: "35%", height: 150 }}>
            <Image
              source={require("../assets/images/avatar.jpg")}
              className="w-full h-full object-cover rounded-xl"
            />
          </View>
          <View className="ml-4 flex-col justify-around">
            <View>
              <Text className="font-bold py-1 text-lg">Duong Trung Kien</Text>
              <Text className="italic">21161328</Text>
            </View>
            <View className="w-full h-[1px] bg-white"></View>
            <View>
              <Text className="font-semibold">
                App Mobile with React Native
              </Text>
              <Text className="font-semibold py-1">
                Server with Websocket (Socket.io)
              </Text>
              <Text className="font-semibold">Documentations</Text>
            </View>
          </View>
        </View>
      </View>
      <View className='my-8'>
        <TouchableOpacity className='font-bold py-4 rounded-lg' style={{backgroundColor: storeColors.backgroundBlue}}>
            <Text className="text-white font-bold text-center text-lg">Add Member</Text>
        </TouchableOpacity>

        <TouchableOpacity className='font-bold mt-6 py-4 rounded-lg' style={{backgroundColor: storeColors.backgroundWhite}}>
            <Text className="text-black font-bold text-center text-lg">Back</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}

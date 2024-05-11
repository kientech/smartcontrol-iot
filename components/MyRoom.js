import { View, Text, Image } from "react-native";
import React from "react";

export default function MyRoom() {
  return (
    <View className="flex justify-between gap-6">
      <View className="pb-2 bg-[#f8f8f8] rounded-2xl">
        <Image
          source={require("../assets/images/living_room.png")}
          className="relative w-full rounded-lg"
        />
        <View className="absolute p-6">
          <Text className="text-white font-semibold py-1">Living Room</Text>
          <Text className="text-white py-1">3/3 on</Text>
        </View>
        <View className="m-4">
          <View className="flex-row items-center justify-between">
            <View className="w-[56px] h-[56px] bg-white rounded-full flex justify-center items-center">
              <Image source={require("../assets/icons/fan.png")} />
            </View>

            <View className="w-[56px] h-[56px] bg-white rounded-full flex justify-center items-center">
              <Image source={require("../assets/icons/fan.png")} />
            </View>

            <View className="w-[56px] h-[56px] bg-white rounded-full flex justify-center items-center">
              <Image source={require("../assets/icons/fan.png")} />
            </View>

            <View className="w-[56px] h-[56px] bg-white rounded-full flex justify-center items-center">
              <Image source={require("../assets/icons/fan.png")} />
            </View>

            <View className="w-[56px] h-[56px] bg-white rounded-full flex justify-center items-center">
              <Image source={require("../assets/icons/fan.png")} />
            </View>
          </View>
        </View>
      </View>

      <View className="pb-2 bg-[#f8f8f8] rounded-2xl">
        <Image
          source={require("../assets/images/view_room.png")}
          className="relative w-full rounded-lg"
        />
        <View className="absolute p-6">
          <Text className="text-white font-semibold py-1">Living Room</Text>
          <Text className="text-white py-1">3/3 on</Text>
        </View>
        <View className="m-4">
          <View className="flex-row items-center justify-between">
            <View className="w-[56px] h-[56px] bg-white rounded-full flex justify-center items-center">
              <Image source={require("../assets/icons/fan.png")} />
            </View>

            <View className="w-[56px] h-[56px] bg-white rounded-full flex justify-center items-center">
              <Image source={require("../assets/icons/fan.png")} />
            </View>

            <View className="w-[56px] h-[56px] bg-white rounded-full flex justify-center items-center">
              <Image source={require("../assets/icons/fan.png")} />
            </View>

            <View className="w-[56px] h-[56px] bg-white rounded-full flex justify-center items-center">
              <Image source={require("../assets/icons/fan.png")} />
            </View>

            <View className="w-[56px] h-[56px] bg-white rounded-full flex justify-center items-center">
              <Image source={require("../assets/icons/fan.png")} />
            </View>
          </View>
        </View>
      </View>

      <View className="pb-2 bg-[#f8f8f8] rounded-2xl">
        <Image
          source={require("../assets/images/living_room.png")}
          className="relative w-full rounded-lg"
        />
        <View className="absolute p-6">
          <Text className="text-white font-semibold py-1">Living Room</Text>
          <Text className="text-white py-1">3/3 on</Text>
        </View>
        <View className="m-4">
          <View className="flex-row items-center justify-between">
            <View className="w-[56px] h-[56px] bg-white rounded-full flex justify-center items-center">
              <Image source={require("../assets/icons/fan.png")} />
            </View>

            <View className="w-[56px] h-[56px] bg-white rounded-full flex justify-center items-center">
              <Image source={require("../assets/icons/fan.png")} />
            </View>

            <View className="w-[56px] h-[56px] bg-white rounded-full flex justify-center items-center">
              <Image source={require("../assets/icons/fan.png")} />
            </View>

            <View className="w-[56px] h-[56px] bg-white rounded-full flex justify-center items-center">
              <Image source={require("../assets/icons/fan.png")} />
            </View>

            <View className="w-[56px] h-[56px] bg-white rounded-full flex justify-center items-center">
              <Image source={require("../assets/icons/fan.png")} />
            </View>
          </View>
        </View>
      </View>
    </View>
  );
}

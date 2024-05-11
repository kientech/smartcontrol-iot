import {
  View,
  Text,
  SafeAreaView,
  TouchableOpacity,
  Button,
} from "react-native";
import React, { useState } from "react";
import {
  ClockIcon,
  LifebuoyIcon,
  PowerIcon,
} from "react-native-heroicons/solid";
import { storeColors } from "../theme";

export default function FanScreen() {
  const [count, setCount] = useState(0);
  return (
    <SafeAreaView className="m-4 ">
      <View>
        <View className="flex-row items-center justify-between">
          <Text className="font-bold text-2xl">Fan Control</Text>
          <View className="animate-spin">
            <LifebuoyIcon size={35} color={storeColors.textBlack} />
          </View>
        </View>
        <View className="mt-5">
          <View className="bg-[#f6f6f6] w-full p-5 rounded-2xl mb-9">
            <View className="flex-row items-center justify-between">
              <TouchableOpacity className="p-3 rounded-full bg-white">
                <ClockIcon color={storeColors.textBlack} />
              </TouchableOpacity>

              <TouchableOpacity className="p-3 rounded-full bg-white">
                <PowerIcon />
              </TouchableOpacity>
            </View>

            <View className="mt-5 ">
              <View className="bg-white rounded-full w-[200px] h-[200px] flex justify-center mx-auto">
                <Text className="text-center font-bold text-3xl">{count}°</Text>
              </View>

              <View className="mt-5 flex-row justify-between">
                <View className="p-3 rounded-full bg-white">
                  <Button
                    style={{ color: "black" }}
                    title="-"
                    onPress={() => setCount(count - 0.5)}
                  />
                </View>
                <View className="p-3 rounded-full bg-white">
                  <Button title="+" onPress={() => setCount(count + 0.5)} />
                </View>
              </View>
              <View className="mt-6">
                <Text className="font-bold text-lg">Fan speed</Text>
                <View className="flex-row justify-between mt-3">
                  <View
                    style={{
                      borderColor: storeColors.backgroundBlue,
                      borderWidth: "2px",
                    }}
                    className="w-[80px] h-[20px] bg-white"
                  />
                  <View
                    style={{
                      borderColor: storeColors.backgroundBlue,
                      borderWidth: "2px",
                    }}
                    className="w-[80px] h-[20px] bg-white"
                  />
                  <View
                    style={{
                      borderColor: storeColors.backgroundBlue,
                      borderWidth: "2px",
                    }}
                    className="w-[80px] h-[20px] bg-white"
                  />
                  <View
                    style={{
                      borderColor: storeColors.backgroundBlue,
                      borderWidth: "2px",
                    }}
                    className="w-[80px] h-[20px] bg-white"
                  />
                </View>
              </View>
            </View>
          </View>
        </View>

        <View className="flex-row justify-between flex-wrap">
          <View className="p-4 bg-[#f8f8f8] w-[48%] rounded-lg flex-row justify-between items-center">
            <View>
              <ClockIcon color={storeColors.backgroundBlue} />
              <Text className="pt-4 font-semibol">Time</Text>
            </View>
            <View>
              <Text className="font-bold text-xl">08</Text>
              <Text className="pt-4">hours</Text>
            </View>
          </View>

          <View className="p-4 bg-[#f8f8f8] w-[48%] rounded-lg flex-row justify-between items-center">
            <View>
              <ClockIcon color={storeColors.backgroundBlue} />
              <Text className="pt-4 font-semibol">Time</Text>
            </View>
            <View>
              <Text className="font-bold text-xl">08</Text>
              <Text className="pt-4">hours</Text>
            </View>
          </View>

          <View className="p-4 bg-[#f8f8f8] mt-4 w-[48%] rounded-lg flex-row justify-between items-center">
            <View>
              <ClockIcon color={storeColors.backgroundBlue} />
              <Text className="pt-4 font-semibol">Time</Text>
            </View>
            <View>
              <Text className="font-bold text-xl">08</Text>
              <Text className="pt-4">hours</Text>
            </View>
          </View>

          <View className="p-4 bg-[#f8f8f8] mt-4 w-[48%] rounded-lg flex-row justify-between items-center">
            <View>
              <ClockIcon color={storeColors.backgroundBlue} />
              <Text className="pt-4 font-semibol">Time</Text>
            </View>
            <View>
              <Text className="font-bold text-xl">08</Text>
              <Text className="pt-4">hours</Text>
            </View>
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
}

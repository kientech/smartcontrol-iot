import {
  View,
  Text,
  SafeAreaView,
  Image,
  Button,
  TouchableOpacity,
} from "react-native";
import { storeColors } from "../theme";
import React from "react";

export default function StartedScreen({ navigation }) {
  return (
    <View className="mx-4">
      <View className="flex justify-between items-center">
        <Image source={require("../assets/images/backgroundStarted.png")} />

        <View>
          <Text className="font-bold text-5xl py-2">Easily Control</Text>
          <Text className="font-bold text-5xl py-2">Your Home</Text>
          <Text className="pb-1">Manage your home from anytime,</Text>
          <Text>anywhere.</Text>
        </View>
        <TouchableOpacity
          className="mt-80 w-full py-4 rounded-full"
          style={{ backgroundColor: storeColors.backgroundBlue }}
          onPress={() => navigation.navigate("SignInScreen")}
        >
          <Text className="text-center text-white font-semibold text-xl">
            Get Started
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

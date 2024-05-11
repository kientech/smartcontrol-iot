import {
  View,
  Text,
  SafeAreaView,
  TextInput,
  TouchableOpacity,
  Alert,
  Image,
} from "react-native";
import React, { useState } from "react";
import { storeColors } from "../theme";

export default function SignIn({ navigation }) {
  const [user, setUser] = useState({
    email: "duongtrungkien.dev@gmail.com",
    password: "kienduongtrung",
  });
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  function logIn() {
    if (
      email === "duongtrungkien.dev@gmail.com" &&
      password === "kienduongtrung"
    ) {
      navigation.navigate("HomeScreen");
    } else {
      alert("Invalid email or password");
    }
  }

  return (
    <SafeAreaView className="bg-white w-full h-full">
      <View className="p-5">
        <View className="my-6">
          <Text className="font-bold text-2xl py-2">Sign In</Text>
          <Text>
            Looks like you don’t have an account. Let’s create a new account for
            you.
          </Text>
        </View>
        <View>
          <View className="my-5">
            <TextInput
              className="bg-[#f8f8f8] py-4 px-4 rounded-lg"
              placeholder="Email"
              value={email}
              onChangeText={(text) => setEmail(text)}
            />
          </View>
          <View>
            <TextInput
              className="bg-[#f8f8f8] mb-5 py-4 px-4 rounded-lg"
              placeholder="Password"
              value={password}
              onChangeText={(text) => setPassword(text)}
              secureTextEntry
            />
          </View>
          <View
            className="py-4 rounded-lg"
            style={{ backgroundColor: storeColors.backgroundBlue }}
          >
            <TouchableOpacity onPress={logIn}>
              <Text className="text-white text-center font-bold text-lg">
                Sign In
              </Text>
            </TouchableOpacity>
          </View>
          <View className="mt-5">
            <TouchableOpacity onPress={() => Alert.alert(`${user.password}`)}>
              <Text className="text-right font-bold text-blue-400 italic">
                Forgot password?
              </Text>
            </TouchableOpacity>
          </View>
          <View className="flex-row justify-center my-4">
            <Text className="">Don't have an account?</Text>
            <TouchableOpacity
              onPress={() => navigation.navigate("SignUpScreen")}
            >
              <Text
                className="ml-2 font-bold underline"
                style={{ color: storeColors.textBlue }}
              >
                Sign Up
              </Text>
            </TouchableOpacity>
          </View>
        </View>
        <View className="my-5">
          <Text className="text-center font-semibold text-xl">Or</Text>
        </View>
        <View>
          <TouchableOpacity
            onPress={() => alert("Coming soon...")}
            className="flex my-2 flex-row items-center justify-evenly bg-[#f8f8f8] py-4 rounded-full"
          >
            <Image source={require("../assets/icons/google.png")} />
            <Text className="text-center font-semibold">
              Sign In with Google
            </Text>
          </TouchableOpacity>

          <TouchableOpacity
            onPress={() => alert("Coming soon...")}
            className="flex flex-row items-center justify-evenly my-2 bg-[#f8f8f8] py-4 rounded-full"
          >
            <Image source={require("../assets/icons/apple.png")} />
            <Text className="text-center font-semibold">
              Sign In with Apple
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
}

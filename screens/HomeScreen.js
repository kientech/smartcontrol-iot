import {
  View,
  Text,
  Button,
  SafeAreaView,
  Image,
  Touchable,
  TouchableOpacity,
  ViewBase,
  Switch,
  ScrollView,
  Alert,
} from "react-native";
import React, { useState, useEffect, useRef } from "react";
import {
  ArrowDownIcon,
  Bars3BottomLeftIcon,
  BoltIcon,
  ChevronDownIcon,
  LightBulbIcon,
  MoonIcon,
  SunIcon,
} from "react-native-heroicons/solid";
import { storeColors } from "../theme";
import MyRoom from "../components/MyRoom";
import WebSocket from "react-native-websocket";

const SERVER_URL = "ws://192.168.1.3:8080";
export default function HomeScreen({ navigation }) {
  const [isSwitchEnableFan, setIsSwitchEnableFan] = useState(false);
  const [isSwitchEnableLed, setIsSwitchEnableLed] = useState(false);
  const [onFan, setOnFan] = useState("Off");
  const [onLed, setOnLed] = useState("Off");
  const [sensorData, setSensorData] = useState({
    temperature: 0,
    humidity: 0,
    co2: 0,
  });

  const websocketRef = useRef(null);

  const onMessage = (event) => {
    const data = JSON.parse(event.data);
    setSensorData(data);
  };

  const handleOnError = (error) => {
    console.error("WebSocket error:", error.nativeEvent.description);
  };

  const toggleSwitchFans = () => {
    if (websocketRef.current) {
      const message = {
        type: "fanControl",
        status: !isSwitchEnableFan ? "on" : "off",
      };
      websocketRef.current.send(JSON.stringify(message));
    }

    const newState = !isSwitchEnableFan;
    setIsSwitchEnableFan(newState);
    setOnFan(newState ? "On" : "Off");
  };

  const toggleSwitchLeds = () => {
    if (websocketRef.current) {
      const message = {
        type: "ledControl",
        status: !isSwitchEnableLed ? "on" : "off",
      };
      websocketRef.current.send(JSON.stringify(message));
    }

    const newState = !isSwitchEnableLed;
    setIsSwitchEnableLed(newState);
    setOnLed(newState ? "On" : "Off");
  };


  return (
    <SafeAreaView>
      <View className="container">
        <View className="p-4 flex-row justify-between">
          <Bars3BottomLeftIcon size={25} color={storeColors.textBlack} />
          <View className="flex-row items-center justify-center">
            <Text className="flex-row text-base items-center font-bold mr-2">
              My home
            </Text>
            <ChevronDownIcon size={15} color={storeColors.textBlack} />
          </View>
          <TouchableOpacity
            onPress={() => navigation.navigate("MyProfileScreen")}
          >
            <Image
              source={require("../assets/images/avatar.jpg")}
              className="w-8 h-8 rounded-full"
            />
          </TouchableOpacity>
        </View>
      </View>

      {/* temperature, humidity, co2 */}
      <ScrollView>
        <View className="mt-4 mx-4 space-y-3">
          <WebSocket
            ref={websocketRef}
            url={SERVER_URL}
            // onMessage={onMessage}
            // onError={handleOnError}
          />
          {sensorData && (
            <View className="flex-row justify-between">
              <View className="border-gray-400 border-[0.5px] w-[30%]  bg-white rounded-2xl">
                <Image
                  source={require("../assets/icons/temperature.png")}
                  className="mx-auto my-2"
                />
                <View className="">
                  <Text className="text-center py-2">Temperature</Text>
                  <Text className="text-center pb-4 font-bold">
                    {sensorData.temperature}°c
                  </Text>
                </View>
              </View>

              <View className="border-gray-400 border-[0.5px] w-[30%]  bg-white rounded-2xl">
                <Image
                  source={require("../assets/icons/humidity.png")}
                  className="mx-auto my-2"
                />
                <View className="">
                  <Text className="text-center py-2">Humidity</Text>
                  <Text className="text-center  font-bold pb-4 ">
                    {sensorData.humidity}%
                  </Text>
                </View>
              </View>
              <View className="border-gray-400 border-[0.5px] w-[30%]  bg-white rounded-2xl">
                <Image
                  source={require("../assets/icons/cloud.png")}
                  className="mx-auto my-2"
                />
                <View className="">
                  <Text className="text-center py-2">Co2</Text>
                  <Text className="text-center pb-4 font-bold">
                    {sensorData.co2} PPM
                  </Text>
                </View>
              </View>
            </View>
          )}
        </View>

        {/* Choose mode */}
        <View className="mx-4 mt-5">
          <View className="flex-row justify-between flex-wrap">
            <TouchableOpacity
              className="flex-row items-center py-4 px-6  rounded-xl w-[48%] mb-4"
              style={{ backgroundColor: storeColors.backgroundWhite }}
            >
              <TouchableOpacity
                onPress={() => navigation.navigate("LedScreen")}
                className="flex-row justify-center items-center"
              >
                <LightBulbIcon size={20} color={storeColors.textBlack} />
                <Text className="mx-2">Light mode</Text>
              </TouchableOpacity>
            </TouchableOpacity>

            <TouchableOpacity
              className="flex-row items-center py-4 px-6 rounded-xl w-[48%] mb-4"
              style={{ backgroundColor: storeColors.backgroundWhite }}
            >
              <View className="flex-row justify-center items-center ">
                <Image source={require("../assets/icons/cloud.png")} />
                <Text className="mx-2">Light mode</Text>
              </View>
            </TouchableOpacity>

            <TouchableOpacity
              className="flex-row items-center py-4 px-6  rounded-xl w-[48%]"
              style={{ backgroundColor: storeColors.backgroundWhite }}
            >
              <View className="flex-row justify-center items-center">
                <SunIcon size={20} color={storeColors.textBlack} />
                <Text className="mx-2">Sunline mode</Text>
              </View>
            </TouchableOpacity>

            <TouchableOpacity
              className="flex-row items-center py-4 px-6  rounded-xl w-[48%]"
              style={{ backgroundColor: storeColors.backgroundWhite }}
            >
              <View className="flex-row justify-center items-center">
                <MoonIcon size={20} color={storeColors.textBlack} />
                <Text className="mx-2">Dark mode</Text>
              </View>
            </TouchableOpacity>
          </View>
        </View>

        {/* power usage today */}
        <View
          className="my-6 mx-4 rounded-2xl"
          style={{ backgroundColor: storeColors.backgroundBlue }}
        >
          <View className="px-4 py-5">
            <TouchableOpacity
              className="flex-row items-center"
              onPress={() => Alert.alert("Power usage today: 2.45kWh")}
            >
              <View className="bg-white p-3 rounded-full ">
                <BoltIcon size={25} />
              </View>
              <View className="ml-5">
                <Text className="text-white font-bold py-1">2.45kWh</Text>
                <Text className="text-white">Power usage today</Text>
              </View>
            </TouchableOpacity>
          </View>
        </View>

        {/* box fan, air condition */}
        <View className="mt-6 mx-4">
          <View className="flex-row flex-wrap justify-between">
            <View
              className="w-[48%] rounded-2xl p-5 mb-2"
              style={{ backgroundColor: storeColors.backgroundWhite }}
            >
              <View className="w-16 h-16 flex justify-center items-center rounded-full bg-white">
                <Image
                  source={require("../assets/icons/fan.png")}
                  className="flex justify-center items-center"
                />
              </View>
              <View>
                <Text className="py-2 text-left text-[32px] font-bold">
                  Fan
                </Text>
                <Text className="font-semibold text-gray-400">4 device</Text>
                <View className="flex-row items-center justify-between mt-3">
                  <Text className="font-bold text-xl">{onFan}</Text>
                  <Switch
                    trackColor={{
                      false: "grey",
                      true: storeColors.backgroundBlue,
                    }}
                    thumbColor={isSwitchEnableFan ? "#f4f3f4" : "#f4f3f4"}
                    onValueChange={toggleSwitchFans}
                    value={isSwitchEnableFan}
                  />
                </View>
              </View>
            </View>

            <View
              className="w-[48%] rounded-2xl p-5 mb-2"
              style={{ backgroundColor: storeColors.backgroundWhite }}
            >
              <View className="w-16 h-16 flex justify-center items-center rounded-full bg-white">
                <Image
                  source={require("../assets/icons/led.png")}
                  className="flex justify-center items-center"
                />
              </View>
              <View>
                <Text className="py-2 text-left text-[32px] font-bold">
                  Light
                </Text>
                <Text className="font-semibold text-gray-400">2 device </Text>
                <View className="flex-row items-center justify-between mt-3">
                  <Text className="font-bold text-xl">{onLed}</Text>
                  <Switch
                    trackColor={{
                      false: "grey",
                      true: storeColors.backgroundBlue,
                    }}
                    thumbColor={isSwitchEnableLed ? "#f4f3f4" : "#f4f3f4"}
                    value={isSwitchEnableLed}
                    onValueChange={toggleSwitchLeds}
                  />
                </View>
              </View>
            </View>
          </View>
          <View className="my-3">
            <MyRoom />
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

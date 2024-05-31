import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import StackNavigation from "./navigation/StackNavigation";
import SignIn from "./screens/SignIn";
import LedControl from "./screens/LedControl";
import HomeScreen from "./screens/HomeScreen";
import FanScreen from "./screens/FanScreen";
import Members from "./screens/Members";
import ChatApp from "./screens/ChatApp";
import Test from "./screens/Test";
export default function App() {
  return (
    // <StackNavigation />
    // <ChatApp />
    // <LedControl />
    <HomeScreen />
    // <Test></Test>
    // <FanScreen />
    // <Members />
    // <FanScreen />
  );
}

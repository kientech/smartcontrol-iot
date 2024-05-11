import { createStackNavigator } from "@react-navigation/stack";
import { Text, Button, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import HomeScreen from "../screens/HomeScreen";
import FanScreen from "../screens/FanScreen";
import StartedScreen from "../screens/StartedScreen";
import MyProfile from "../screens/MyProfile";
import SignIn from "../screens/SignIn";
import SignUp from "../screens/SignUp";
import LedControl from "../screens/LedControl";

const Stack = createStackNavigator();
export default function StackNavigation() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="LedScreen">
        <Stack.Screen
          name="StartScreen"
          options={{ headerShown: false }}
          component={StartedScreen}
        />
        <Stack.Screen
          name="LedScreen"
          // options={{ headerShown: false }}
          component={LedControl}
        />
        <Stack.Screen
          name="SignInScreen"
          options={{ headerShown: false }}
          component={SignIn}
        />
        <Stack.Screen
          name="SignUpScreen"
          options={{ headerShown: false }}
          component={SignUp}
        />
        <Stack.Screen
          name="HomeScreen"
          options={{ headerShown: false }}
          component={HomeScreen}
        />
        <Stack.Screen name="FanScreen" component={FanScreen} />
        <Stack.Screen
          name="MyProfileScreen"
          options={{ headerShown: false }}
          component={MyProfile}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

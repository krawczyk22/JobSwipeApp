import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import WelcomeScreen from "./app/screens/WelcomeScreen";
import SignupScreen from "./app/screens/SignupScreen";

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={
          {
            //headerShown: false,
          }
        }
      >
        <Stack.Screen
          name="WelcomeScreen"
          component={WelcomeScreen}
        ></Stack.Screen>
        <Stack.Screen
          name="SignupScreen"
          component={SignupScreen}
        ></Stack.Screen>
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});

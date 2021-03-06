import React from "react";

import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { createMaterialBottomTabNavigator } from "@react-navigation/material-bottom-tabs";
import { MaterialCommunityIcons } from "react-native-vector-icons";

import WelcomeScreen from "./app/screens/WelcomeScreen";
import SignupScreen from "./app/screens/SignupScreen";
import LoginScreen from "./app/screens/LoginScreen";
import FavouritesScreen from "./app/screens/FavouritesScreen";
import JobSearchScreen from "./app/screens/JobSearchScreen";
import SearchScreen from "./app/screens/SearchScreen";
import LoadingScreen from "./app/screens/LoadingScreen";

import * as firebase from "firebase";
import firebaseConfig from "./config.js";
firebase.initializeApp(firebaseConfig);

const Stack = createStackNavigator();
const MaterialBottomTabs = createMaterialBottomTabNavigator();

const createBottomTabsWelcome = () => (
  <MaterialBottomTabs.Navigator
    activeColor="white"
    inactiveColor="black"
    barStyle={{ backgroundColor: "#00BCD4" }}
  >
    <MaterialBottomTabs.Screen
      name="Log in"
      component={LoginScreen}
      options={{
        tabBarLabel: "Log in",
        tabBarIcon: ({ color }) => (
          <MaterialCommunityIcons name="login" color={color} size={26} />
        ),
      }}
    ></MaterialBottomTabs.Screen>
    <MaterialBottomTabs.Screen
      name="Sign Up"
      component={SignupScreen}
      options={{
        tabBarLabel: "Sign up",
        tabBarIcon: ({ color }) => (
          <MaterialCommunityIcons name="account-plus" color={color} size={26} />
        ),
      }}
    ></MaterialBottomTabs.Screen>
  </MaterialBottomTabs.Navigator>
);

const createBottomTabsAuthorised = () => (
  <MaterialBottomTabs.Navigator
    activeColor="white"
    inactiveColor="black"
    barStyle={{ backgroundColor: "#00BCD4" }}
  >
    <MaterialBottomTabs.Screen
      name="Search"
      component={SearchScreen}
      options={{
        tabBarLabel: "Search",
        tabBarIcon: ({ color }) => (
          <MaterialCommunityIcons
            name="format-color-highlight"
            color={color}
            size={26}
          />
        ),
      }}
    ></MaterialBottomTabs.Screen>
    <MaterialBottomTabs.Screen
      name="Favourites"
      component={FavouritesScreen}
      options={{
        tabBarLabel: "Favourites",
        tabBarIcon: ({ color }) => (
          <MaterialCommunityIcons name="heart" color={color} size={26} />
        ),
      }}
    ></MaterialBottomTabs.Screen>
  </MaterialBottomTabs.Navigator>
);

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
        }}
      >
        <Stack.Screen
          name="Welcome"
          component={WelcomeScreen}
          options={{ gestureEnabled: false }}
        ></Stack.Screen>
        <Stack.Screen
          name="Log in"
          children={createBottomTabsWelcome}
          options={{ gestureEnabled: false }}
        ></Stack.Screen>
        <Stack.Screen
          name="Jobs"
          children={createBottomTabsAuthorised}
          options={{ gestureEnabled: false }}
        ></Stack.Screen>
        <Stack.Screen
          name="JobSearch"
          component={JobSearchScreen}
          options={{ gestureEnabled: false }}
        ></Stack.Screen>
        <Stack.Screen
          name="loading"
          component={LoadingScreen}
          options={{ gestureEnabled: false }}
        ></Stack.Screen>
      </Stack.Navigator>
    </NavigationContainer>
  );
}

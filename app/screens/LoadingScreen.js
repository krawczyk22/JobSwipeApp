import React, { useEffect } from "react";
import { View, ActivityIndicator } from "react-native";
import ContainerStyles from "../assets/styles/ContainerStyles.js";
import * as firebase from "firebase";

const LoadingScreen = ({ navigation }) => {
  useEffect(() => {
    checkIfLoggedIn();
  }, []);

  const checkIfLoggedIn = () => {
    firebase.auth().onAuthStateChanged((user) => {
      if (user) {
        navigation.push("Jobs");
      } else {
        navigation.navigate("Log in");
      }
    });
  };

  return (
    <View style={ContainerStyles.container}>
      <ActivityIndicator size="large" />
    </View>
  );
};

export default LoadingScreen;

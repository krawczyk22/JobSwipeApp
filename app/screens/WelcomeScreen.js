import React from "react";
import { Text, TouchableOpacity, View } from "react-native";
import ContainerStyles from "../assets/styles/ContainerStyles.js";
import ButtonStyles from "../assets/styles/ButtonStyles.js";
import TextStyles from "../assets/styles/TextStyles.js";

const WelcomeScreen = ({ navigation }) => {
  return (
    <View style={ContainerStyles.container}>
      <Text style={TextStyles.title}>Job Swiper</Text>
      <Text style={TextStyles.description}>
        Welcome to the place where you'll find your dream job.
      </Text>
      <TouchableOpacity
        style={ButtonStyles.button}
        activeOpacity={0.5}
        onPress={() => navigation.push("Log in")}
      >
        <Text style={ButtonStyles.textInButton}>Let's go</Text>
      </TouchableOpacity>
    </View>
  );
};

export default WelcomeScreen;

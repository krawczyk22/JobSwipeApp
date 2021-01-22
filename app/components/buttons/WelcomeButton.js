import React from "react";
import { Text, TouchableOpacity } from "react-native";
import ButtonStyles from "./ButtonStyles.js";

const WelcomeButton = ({ navigation }) => {
  return (
    <TouchableOpacity
      style={ButtonStyles.buttonWelcome}
      activeOpacity={0.5}
      onPress={() => navigation.push("loading")}
    >
      <Text style={ButtonStyles.textInButton}>Let's go</Text>
    </TouchableOpacity>
  );
};

export default WelcomeButton;

import React from "react";
import { Text, TouchableOpacity, StyleSheet } from "react-native";
import ButtonStyles from "../../assets/styles/ButtonStyles.js";

const WelcomeButton = ({ navigation }) => {
  return (
    <TouchableOpacity
      style={localStyles.buttonWelcome}
      activeOpacity={0.5}
      onPress={() => navigation.push("loading")}
    >
      <Text style={ButtonStyles.textInButton}>Let's go</Text>
    </TouchableOpacity>
  );
};

const localStyles = StyleSheet.create({
  buttonWelcome: {
    width: 150,
    height: 150,
    backgroundColor: "#00BCD4",
    borderRadius: 75,
    borderWidth: 1,
    borderColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});

export default WelcomeButton;

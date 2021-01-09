import React from "react";
import { Text, TouchableOpacity } from "react-native";
import ButtonStyles from "../assets/styles/ButtonStyles.js";

const ReturnButton = ({ navigation }) => {
  return (
    <TouchableOpacity
      style={ButtonStyles.buttonGoBack}
      activeOpacity={0.5}
      onPress={() => navigation.goBack()}
    >
      <Text style={ButtonStyles.textInButton}>Back</Text>
    </TouchableOpacity>
  );
};

export default ReturnButton;

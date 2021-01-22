import React from "react";
import { Text, TouchableOpacity } from "react-native";
import ButtonStyles from "./ButtonStyles.js";

const LoginButton = ({ valueEmail, valuePassword, onPress }) => {
  return (
    <TouchableOpacity
      style={
        valueEmail && valuePassword
          ? ButtonStyles.buttonLogin
          : [ButtonStyles.buttonLogin, { backgroundColor: "#C4CECF" }]
      }
      activeOpacity={0.5}
      onPress={onPress}
      disabled={!(valueEmail && valuePassword)}
    >
      <Text style={ButtonStyles.textInButton}>Login</Text>
    </TouchableOpacity>
  );
};

export default LoginButton;

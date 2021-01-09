import React from "react";
import { Text, TouchableOpacity } from "react-native";
import ButtonStyles from "../assets/styles/ButtonStyles.js";

const LoginButton = ({ navigation, valueLogin, valuePassword }) => {
  return (
    <TouchableOpacity
      style={
        valueLogin && valuePassword
          ? ButtonStyles.buttonLogin
          : ButtonStyles.buttonLoginDisabled
      }
      activeOpacity={0.5}
      onPress={() => navigation.push("Jobs")}
      disabled={!(valueLogin && valuePassword)}
    >
      <Text style={ButtonStyles.textInButton}>Login</Text>
    </TouchableOpacity>
  );
};

export default LoginButton;

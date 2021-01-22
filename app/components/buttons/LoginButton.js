import React from "react";
import { Text, TouchableOpacity } from "react-native";
import ButtonStyles from "./ButtonStyles.js";
import signInWithEmailAndPassword from "../../auth/emailPassword.js";

const LoginButton = ({ valueEmail, valuePassword, navigation }) => {
  return (
    <TouchableOpacity
      style={
        valueEmail && valuePassword
          ? ButtonStyles.buttonLogin
          : [ButtonStyles.buttonLogin, { backgroundColor: "#C4CECF" }]
      }
      activeOpacity={0.5}
      onPress={() =>
        signInWithEmailAndPassword(valueEmail, valuePassword, navigation)
      }
      disabled={!(valueEmail && valuePassword)}
    >
      <Text style={ButtonStyles.textInButton}>Login</Text>
    </TouchableOpacity>
  );
};

export default LoginButton;

import React from "react";
import { Text, TouchableOpacity, StyleSheet } from "react-native";
import ButtonStyles from "../../assets/styles/ButtonStyles.js";

const LoginButton = ({ navigation, valueLogin, valuePassword }) => {
  return (
    <TouchableOpacity
      style={
        valueLogin && valuePassword
          ? localStyles.buttonLogin
          : localStyles.buttonLoginDisabled
      }
      activeOpacity={0.5}
      onPress={() => navigation.push("Jobs")}
      disabled={!(valueLogin && valuePassword)}
    >
      <Text style={ButtonStyles.textInButton}>Login</Text>
    </TouchableOpacity>
  );
};

const localStyles = StyleSheet.create({
  buttonLogin: {
    width: 200,
    height: 70,
    backgroundColor: "#00BCD4",
    borderRadius: 25,
    borderWidth: 0,
    borderColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
    margin: 10,
  },
  buttonLoginDisabled: {
    width: 200,
    height: 70,
    backgroundColor: "#c4cecf",
    borderRadius: 25,
    borderWidth: 0,
    borderColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
    margin: 10,
  },
});

export default LoginButton;

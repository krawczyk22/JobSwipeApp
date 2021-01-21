import React from "react";
import { Text, TouchableOpacity, StyleSheet } from "react-native";
import ButtonStyles from "../assets/styles/ButtonStyles.js";
import * as firebase from "firebase";

const LogOutButton = ({ navigation }) => {
  return (
    <TouchableOpacity
      style={localStyles.buttonLogOut}
      activeOpacity={0.5}
      onPress={() => {
        firebase.auth().signOut();
        navigation.push("loading");
      }}
    >
      <Text style={ButtonStyles.textInButton}>Log Out</Text>
    </TouchableOpacity>
  );
};

const localStyles = StyleSheet.create({
  buttonLogOut: {
    width: 100,
    height: 50,
    left: 10,
    backgroundColor: "#00BCD4",
    borderRadius: 4,
    borderWidth: 0,
    borderColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
    margin: 10,
  },
});

export default LogOutButton;

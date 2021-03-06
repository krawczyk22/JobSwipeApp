import React from "react";
import { Text, TouchableOpacity } from "react-native";
import ButtonStyles from "./ButtonStyles.js";
import * as firebase from "firebase";

const LogOutButton = ({ navigation }) => {
  return (
    <TouchableOpacity
      style={ButtonStyles.buttonReturnLogOut}
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

export default LogOutButton;

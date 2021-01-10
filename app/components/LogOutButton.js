import React from "react";
import { Text, TouchableOpacity } from "react-native";
import ButtonStyles from "../assets/styles/ButtonStyles.js";
import * as firebase from "firebase";

const LogOutButton = ({ navigation }) => {
  return (
    <TouchableOpacity
      style={ButtonStyles.buttonGoBack}
      activeOpacity={0.5}
      onPress={() => firebase.auth().signOut()}
    >
      <Text style={ButtonStyles.textInButton}>Log Out</Text>
    </TouchableOpacity>
  );
};

export default LogOutButton;

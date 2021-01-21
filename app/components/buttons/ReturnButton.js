import React from "react";
import { Text, TouchableOpacity, StyleSheet } from "react-native";
import ButtonStyles from "../../assets/styles/ButtonStyles.js";

const ReturnButton = ({ navigation }) => {
  return (
    <TouchableOpacity
      style={localStyles.buttonGoBack}
      activeOpacity={0.5}
      onPress={() => navigation.goBack()}
    >
      <Text style={ButtonStyles.textInButton}>Back</Text>
    </TouchableOpacity>
  );
};

const localStyles = StyleSheet.create({
  buttonGoBack: {
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

export default ReturnButton;

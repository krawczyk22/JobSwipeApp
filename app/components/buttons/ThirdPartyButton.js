import React from "react";
import { Text, TouchableOpacity, StyleSheet } from "react-native";
import ButtonStyles from "../../assets/styles/ButtonStyles.js";

const ThirdPartyButton = ({ toggleCheckbox, thirdParty, colour, onPress }) => {
  return (
    <TouchableOpacity
      style={
        toggleCheckbox
          ? [localStyles.buttonLoginThirdParty, { backgroundColor: colour }]
          : localStyles.buttonLoginThirdPartyDisabled
      }
      activeOpacity={0.5}
      disabled={!toggleCheckbox}
      onPress={onPress}
    >
      <Text style={ButtonStyles.textInButton}>Log in with {thirdParty}</Text>
    </TouchableOpacity>
  );
};

const localStyles = StyleSheet.create({
  buttonLoginThirdParty: {
    width: 310,
    height: 40,
    borderRadius: 2,
    borderWidth: 0,
    borderColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
    margin: 5,
  },
  buttonLoginThirdPartyDisabled: {
    width: 310,
    height: 40,
    backgroundColor: "#c4cecf",
    borderRadius: 2,
    borderWidth: 0,
    borderColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
    margin: 5,
  },
});

export default ThirdPartyButton;

import React from "react";
import { Text, TouchableOpacity } from "react-native";
import ButtonStyles from "./ButtonStyles.js";

const ThirdPartyButton = ({ toggleCheckbox, thirdParty, colour, onPress }) => {
  return (
    <TouchableOpacity
      style={
        toggleCheckbox
          ? [ButtonStyles.buttonLoginThirdParty, { backgroundColor: colour }]
          : [ButtonStyles.buttonLoginThirdParty, { backgroundColor: "#C4CECF" }]
      }
      activeOpacity={0.5}
      disabled={!toggleCheckbox}
      onPress={onPress}
    >
      <Text style={ButtonStyles.textInButton}>Log in with {thirdParty}</Text>
    </TouchableOpacity>
  );
};

export default ThirdPartyButton;

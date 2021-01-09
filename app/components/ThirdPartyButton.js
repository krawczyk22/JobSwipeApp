import React from "react";
import { Text, TouchableOpacity } from "react-native";
import ButtonStyles from "../assets/styles/ButtonStyles.js";

const ThirdPartyButton = ({ toggleCheckbox, thirdParty, colour }) => {
  return (
    <TouchableOpacity
      style={
        toggleCheckbox
          ? [ButtonStyles.buttonLoginThirdParty, { backgroundColor: colour }]
          : ButtonStyles.buttonLoginThirdPartyDisabled
      }
      activeOpacity={0.5}
      disabled={!toggleCheckbox}
    >
      <Text style={ButtonStyles.textInButton}>Log in with {thirdParty}</Text>
    </TouchableOpacity>
  );
};
export default ThirdPartyButton;
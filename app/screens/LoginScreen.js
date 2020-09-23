import React from "react";
import { Text, TouchableOpacity, View, TextInput } from "react-native";
import { CheckBox } from "react-native-elements";
import ContainerStyles from "../assets/styles/ContainerStyles.js";
import ButtonStyles from "../assets/styles/ButtonStyles.js";
import TextStyles from "../assets/styles/TextStyles.js";

const WelcomeScreen = ({ navigation }) => {
  const [valueLogin, onChangeTextLogin] = React.useState(null);
  const [valuePassword, onChangeTextPassword] = React.useState(null);
  const [toggleCheckbox, toggleCheckboxSet] = React.useState(false);

  return (
    <View style={ContainerStyles.container}>
      <Text style={TextStyles.title}>LOGO HERE</Text>

      <TextInput
        style={ContainerStyles.textArea}
        onChangeText={(text) => onChangeTextLogin(text)}
        value={valueLogin}
        textContentType="username"
        autoCapitalize="none"
        placeholderTextColor="grey"
        placeholder="Enter Login"
      />
      <TextInput
        style={ContainerStyles.textArea}
        onChangeText={(text) => onChangeTextPassword(text)}
        value={valuePassword}
        secureTextEntry={true}
        autoCapitalize="none"
        textContentType="password"
        placeholderTextColor="grey"
        placeholder="Enter Password"
      />
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
      <View style={ContainerStyles.boxSignup}>
        <Text>Sign up with one of our partners</Text>
        <Text>or create an account</Text>
      </View>
      <View style={ContainerStyles.TC}>
        <CheckBox
          checked={toggleCheckbox}
          onPress={() => toggleCheckboxSet(!toggleCheckbox)}
          checkedColor="#00BCD4"
        />
        <Text>I agree to the T&#38;C of the Job Swiper</Text>
      </View>
      <TouchableOpacity
        style={
          toggleCheckbox
            ? [
                ButtonStyles.buttonLoginThirdParty,
                { backgroundColor: "#39549D" },
              ]
            : ButtonStyles.buttonLoginThirdPartyDisabled
        }
        activeOpacity={0.5}
        disabled={!toggleCheckbox}
      >
        <Text style={ButtonStyles.textInButton}>Log in with Facebook</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={
          toggleCheckbox
            ? [
                ButtonStyles.buttonLoginThirdParty,
                { backgroundColor: "#D44638" },
              ]
            : ButtonStyles.buttonLoginThirdPartyDisabled
        }
        activeOpacity={0.5}
        disabled={!toggleCheckbox}
      >
        <Text style={ButtonStyles.textInButton}>Log in with Gmail</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={
          toggleCheckbox
            ? [
                ButtonStyles.buttonLoginThirdParty,
                { backgroundColor: "#49A5FB" },
              ]
            : ButtonStyles.buttonLoginThirdPartyDisabled
        }
        activeOpacity={0.5}
        disabled={!toggleCheckbox}
      >
        <Text style={ButtonStyles.textInButton}>Log in with Twitter</Text>
      </TouchableOpacity>
    </View>
  );
};

export default WelcomeScreen;

import React from "react";
import { Text, TouchableOpacity, View, TextInput } from "react-native";
import ContainerStyles from "../assets/styles/ContainerStyles.js";
import ButtonStyles from "../assets/styles/ButtonStyles.js";
import TextStyles from "../assets/styles/TextStyles.js";

const WelcomeScreen = ({ navigation }) => {
  const [valueLogin, onChangeTextLogin] = React.useState(null);
  const [valuePassword, onChangeTextPassword] = React.useState(null);

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
      >
        <Text style={ButtonStyles.textInButton}>Login</Text>
      </TouchableOpacity>
      <View style={ContainerStyles.box}>
        <Text>Sign up with one of our partners</Text>
        <Text>or create an account</Text>
      </View>
    </View>
  );
};

export default WelcomeScreen;

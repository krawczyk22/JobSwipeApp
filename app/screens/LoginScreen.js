import React from "react";
import { Text, View, TextInput } from "react-native";
import { CheckBox } from "react-native-elements";
import ContainerStyles from "../assets/styles/ContainerStyles.js";
import TextStyles from "../assets/styles/TextStyles.js";
import ThirdPartyButton from "../components/ThirdPartyButton.js";
import LoginButton from "../components/LoginButton.js";

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
      <LoginButton
        navigation={navigation}
        valueLogin={valueLogin}
        valuePassword={valuePassword}
      />
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
      <ThirdPartyButton
        toggleCheckbox={toggleCheckbox}
        thirdParty={"Facebook"}
        colour={"#39549D"}
      />
      <ThirdPartyButton
        toggleCheckbox={toggleCheckbox}
        thirdParty={"Gmail"}
        colour={"#D44638"}
      />
      <ThirdPartyButton
        toggleCheckbox={toggleCheckbox}
        thirdParty={"Twitter"}
        colour={"#49A5FB"}
      />
    </View>
  );
};

export default WelcomeScreen;

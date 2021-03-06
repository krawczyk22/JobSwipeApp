import React from "react";
import { View, TextInput, TouchableOpacity, Text } from "react-native";
import { CheckBox } from "react-native-elements";
import ContainerStyles from "../assets/styles/ContainerStyles.js";
import ButtonStyles from "../components//buttons/ButtonStyles.js";
import TextStyles from "../assets/styles/TextStyles.js";
import { createUserWithEmailAndPassword } from "../auth/emailPassword.js";

const validate = (email) => {
  const expression = /(?!.*\.{2})^([a-z\d!#$%&'*+\-\/=?^_`{|}~\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]+(\.[a-z\d!#$%&'*+\-\/=?^_`{|}~\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]+)*|"((([\t]*\r\n)?[\t]+)?([\x01-\x08\x0b\x0c\x0e-\x1f\x7f\x21\x23-\x5b\x5d-\x7e\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]|\\[\x01-\x09\x0b\x0c\x0d-\x7f\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]))*(([\t]*\r\n)?[\t]+)?")@(([a-z\d\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]|[a-z\d\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF][a-z\d\-._~\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]*[a-z\d\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])\.)+([a-z\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]|[a-z\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF][a-z\d\-._~\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]*[a-z\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])\.?$/i;
  return expression.test(String(email).toLowerCase());
};

const SignupScreen = () => {
  const [toggleCheckbox, toggleCheckboxSet] = React.useState(false);
  const [valueName, onChangeTextName] = React.useState(null);
  const [valueEmail, onChangeTextEmail] = React.useState(null);
  const [valuePassword, onChangeTextPassword] = React.useState(null);
  const [valuePasswordRepeat, onChangeTextPasswordRepeat] = React.useState(
    null
  );
  return (
    <View style={ContainerStyles.container}>
      <Text style={TextStyles.title}>Sign up</Text>
      <TextInput
        style={ContainerStyles.textArea}
        onChangeText={(text) => onChangeTextName(text)}
        value={valueName}
        textContentType="name"
        placeholderTextColor="grey"
        placeholder="Enter Name and Surname"
      />
      <TextInput
        style={ContainerStyles.textArea}
        onChangeText={(text) => onChangeTextEmail(text)}
        value={valueEmail}
        textContentType="emailAddress"
        autoCapitalize="none"
        placeholderTextColor="grey"
        placeholder="Enter Email"
      />
      <TextInput
        style={ContainerStyles.textArea}
        onChangeText={(text) => onChangeTextPassword(text)}
        value={valuePassword}
        textContentType="password"
        secureTextEntry={true}
        autoCapitalize="none"
        placeholderTextColor="grey"
        placeholder="Enter Password"
      />
      <TextInput
        style={ContainerStyles.textArea}
        onChangeText={(text) => onChangeTextPasswordRepeat(text)}
        value={valuePasswordRepeat}
        textContentType="password"
        secureTextEntry={true}
        autoCapitalize="none"
        placeholderTextColor="grey"
        placeholder="Repeat Password"
      />
      <View style={ContainerStyles.itemAlignRow}>
        <CheckBox
          checked={toggleCheckbox}
          onPress={() => toggleCheckboxSet(!toggleCheckbox)}
          checkedColor="#00BCD4"
        />
        <Text>I agree to the T&#38;C of the Job Swiper</Text>
      </View>
      <TouchableOpacity
        style={
          toggleCheckbox &&
          valueName &&
          valueEmail &&
          valuePassword &&
          valuePasswordRepeat
            ? ButtonStyles.buttonLogin
            : [ButtonStyles.buttonLogin, { backgroundColor: "#C4CECF" }]
        }
        activeOpacity={0.5}
        disabled={
          !(
            toggleCheckbox &&
            valueName &&
            valueEmail &&
            valuePassword &&
            valuePasswordRepeat
          )
        }
        onPress={() =>
          createUserWithEmailAndPassword(valueEmail, valuePassword, valueName)
        }
      >
        <Text style={ButtonStyles.textInButton}>Sign Up</Text>
      </TouchableOpacity>
    </View>
  );
};

export default SignupScreen;

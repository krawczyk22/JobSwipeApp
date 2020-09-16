import React from "react";
import {
  StyleSheet,
  View,
  TextInput,
  TouchableOpacity,
  Text,
} from "react-native";

const SignupScreen = () => {
  const [valueName, onChangeTextName] = React.useState("");
  const [valueSurname, onChangeTextSurname] = React.useState("");
  const [valueCity, onChangeTextCity] = React.useState("");
  const [valueEmail, onChangeTextEmail] = React.useState("");
  const [valuePassword, onChangeTextPassword] = React.useState("");
  const [valuePasswordRepeat, onChangeTextPasswordRepeat] = React.useState("");
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Sign up</Text>
      <TextInput
        style={styles.textArea}
        onChangeText={(text) => onChangeTextName(text)}
        value={valueName}
        textContentType="name"
        placeholderTextColor="grey"
        placeholder="Enter Name"
      />
      <TextInput
        style={styles.textArea}
        onChangeText={(text) => onChangeTextSurname(text)}
        value={valueSurname}
        textContentType="familyName"
        placeholderTextColor="grey"
        placeholder="Enter Surname"
      />
      <TextInput
        style={styles.textArea}
        onChangeText={(text) => onChangeTextCity(text)}
        value={valueCity}
        textContentType="addressCity"
        placeholderTextColor="grey"
        placeholder="Enter City"
      />
      <TextInput
        style={styles.textArea}
        onChangeText={(text) => onChangeTextEmail(text)}
        value={valueEmail}
        textContentType="emailAddress"
        placeholderTextColor="grey"
        placeholder="Enter Email"
      />
      <TextInput
        style={styles.textArea}
        onChangeText={(text) => onChangeTextPassword(text)}
        value={valuePassword}
        textContentType="password"
        placeholderTextColor="grey"
        placeholder="Enter Password"
      />
      <TextInput
        style={styles.textArea}
        onChangeText={(text) => onChangeTextPasswordRepeat(text)}
        value={valuePasswordRepeat}
        textContentType="password"
        placeholderTextColor="grey"
        placeholder="Repeat Password"
      />
      <TouchableOpacity style={styles.buttonLogin} activeOpacity={0.5}>
        <Text style={styles.textInButton}>Sign Up</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#E8EDFF",
    alignItems: "center",
    justifyContent: "center",
    padding: 40,
  },
  textArea: {
    height: 40,
    width: 320,
    borderColor: "black",
    backgroundColor: "white",
    borderRadius: 15,
    borderWidth: 0,
    marginLeft: 10,
    bottom: 60,
    padding: 10,
    margin: 10,
  },
  buttonLogin: {
    width: 200,
    height: 70,
    bottom: 40,
    backgroundColor: "#00BCD4",
    borderRadius: 25,
    borderWidth: 0,
    borderColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  textInButton: {
    color: "#fff",
    textAlign: "center",
  },
  title: {
    fontSize: 40,
    padding: 10,
    bottom: 60,
  },
});

export default SignupScreen;

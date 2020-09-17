import React from "react";
import {
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  TextInput,
} from "react-native";

const WelcomeScreen = ({ navigation }) => {
  const [valueLogin, onChangeTextLogin] = React.useState("");
  const [valuePassword, onChangeTextPassword] = React.useState("");

  return (
    <View style={styles.container}>
      <Text style={styles.title}>LOGO HERE</Text>

      <TextInput
        style={styles.textArea}
        onChangeText={(text) => onChangeTextLogin(text)}
        value={valueLogin}
        textContentType="username"
        autoCapitalize="none"
        placeholderTextColor="grey"
        placeholder="Enter Login"
      />
      <TextInput
        style={styles.textArea}
        onChangeText={(text) => onChangeTextPassword(text)}
        value={valuePassword}
        secureTextEntry={true}
        autoCapitalize="none"
        textContentType="password"
        placeholderTextColor="grey"
        placeholder="Enter Password"
      />
      <TouchableOpacity
        style={styles.buttonLogin}
        activeOpacity={0.5}
        onPress={() => navigation.push("Jobs")}
      >
        <Text style={styles.textInButton}>Login</Text>
      </TouchableOpacity>
      <Text>Sign up with one of our partners</Text>
      <Text>or create an account</Text>
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

export default WelcomeScreen;

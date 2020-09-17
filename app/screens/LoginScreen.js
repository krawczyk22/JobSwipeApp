import React from "react";
import {
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  TextInput,
} from "react-native";

const WelcomeScreen = ({ navigation }) => {
  const [valueLogin, onChangeTextLogin] = React.useState(null);
  const [valuePassword, onChangeTextPassword] = React.useState(null);

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
        style={
          valueLogin && valuePassword
            ? styles.buttonLogin
            : styles.buttonLoginDisabled
        }
        activeOpacity={0.5}
        onPress={() => navigation.push("Jobs")}
      >
        <Text style={styles.textInButton}>Login</Text>
      </TouchableOpacity>
      <View style={styles.box}>
        <Text>Sign up with one of our partners</Text>
        <Text>or create an account</Text>
      </View>
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
    padding: 10,
    margin: 10,
  },
  buttonLogin: {
    width: 200,
    height: 70,
    backgroundColor: "#00BCD4",
    borderRadius: 25,
    borderWidth: 0,
    borderColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
    margin: 10,
  },
  buttonLoginDisabled: {
    width: 200,
    height: 70,
    backgroundColor: "#c4cecf",
    borderRadius: 25,
    borderWidth: 0,
    borderColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
    margin: 10,
  },
  textInButton: {
    color: "#fff",
    textAlign: "center",
  },
  title: {
    fontSize: 40,
    padding: 10,
  },
  box: {
    justifyContent: "flex-start",
    alignItems: "center",
    margin: 10,
  },
});

export default WelcomeScreen;

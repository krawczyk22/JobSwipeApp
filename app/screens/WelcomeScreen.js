import React, { useRef } from "react";
import {
  Animated,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  TextInput,
} from "react-native";

const WelcomeScreen = ({ navigation }) => {
  const disappear = useRef(new Animated.Value(1)).current;
  const appear = useRef(new Animated.Value(0)).current;
  const moveUp = useRef(new Animated.Value(0)).current;
  const moveDown = useRef(new Animated.Value(0)).current;

  const [valueLogin, onChangeTextLogin] = React.useState("");
  const [valuePassword, onChangeTextPassword] = React.useState("");

  const moveTextUp = () => {
    Animated.timing(moveUp, {
      toValue: -80,
      duration: 500,
      useNativeDriver: true,
    }).start();
  };

  const moveButtonDown = () => {
    Animated.timing(moveDown, {
      toValue: 320,
      duration: 1500,
      useNativeDriver: true,
    }).start();
  };

  const disappearButton = () => {
    Animated.timing(disappear, {
      toValue: 0,
      duration: 500,
      useNativeDriver: true,
    }).start();
  };

  const appearForm = () => {
    Animated.timing(appear, {
      toValue: 1,
      duration: 500,
      useNativeDriver: true,
    }).start();
  };

  const runFunctions = () => {
    moveTextUp();
    disappearButton();
    appearForm();
    moveButtonDown();
  };

  return (
    <View style={styles.container}>
      <Animated.View
        style={[
          {
            transform: [
              {
                translateY: moveUp,
              },
            ],
          },
        ]}
      >
        <Text style={styles.title}>Job Swiper</Text>
        <Text style={styles.description}>
          Welcome to the place where you'll find your dream job.
        </Text>
      </Animated.View>

      <Animated.View
        style={[
          {
            opacity: appear,
          },
        ]}
      >
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
        <TouchableOpacity style={styles.buttonLogin} activeOpacity={0.5}>
          <Text style={styles.textInButton}>Login</Text>
        </TouchableOpacity>
        <Text style={{ bottom: 30, left: 40 }}>
          Don't have an account? Create one{" "}
          <Text
            style={{ color: "blue" }}
            onPress={() => navigation.push("SignupScreen")}
          >
            here
          </Text>
        </Text>
        <Text style={{ bottom: 30, left: 40 }}>
          Or sign up with one of our partners
        </Text>
      </Animated.View>

      <Animated.View
        style={[
          {
            opacity: disappear,
            transform: [
              {
                translateY: moveDown,
              },
            ],
          },
        ]}
      >
        <TouchableOpacity
          style={styles.button}
          activeOpacity={0.5}
          onPress={runFunctions}
        >
          <Text style={styles.textInButton}>Let's go</Text>
        </TouchableOpacity>
      </Animated.View>
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
  button: {
    width: 150,
    height: 150,
    backgroundColor: "#00BCD4",
    borderRadius: 75,
    borderWidth: 1,
    borderColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
    bottom: 170,
  },
  buttonLogin: {
    width: 200,
    height: 70,
    bottom: 40,
    left: 70,
    backgroundColor: "#00BCD4",
    borderRadius: 25,
    borderColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  title: {
    fontSize: 40,
    padding: 10,
  },
  description: {
    fontSize: 25,
  },
  textInButton: {
    color: "#fff",
    textAlign: "center",
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
});

export default WelcomeScreen;

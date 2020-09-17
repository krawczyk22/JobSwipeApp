import React from "react";
import {
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  TextInput,
} from "react-native";

const WelcomeScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Job Swiper</Text>
      <Text style={styles.description}>
        Welcome to the place where you'll find your dream job.
      </Text>
      <TouchableOpacity
        style={styles.button}
        activeOpacity={0.5}
        onPress={() => navigation.push("Log in")}
      >
        <Text style={styles.textInButton}>Let's go</Text>
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
  button: {
    width: 150,
    height: 150,
    backgroundColor: "#00BCD4",
    borderRadius: 75,
    borderWidth: 1,
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
    paddingBottom: 20,
  },
  textInButton: {
    color: "#fff",
    textAlign: "center",
  },
});

export default WelcomeScreen;

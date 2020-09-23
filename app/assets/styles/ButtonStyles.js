import { StyleSheet } from "react-native";

export default StyleSheet.create({
  buttonWelcome: {
    width: 150,
    height: 150,
    backgroundColor: "#00BCD4",
    borderRadius: 75,
    borderWidth: 1,
    borderColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
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
});

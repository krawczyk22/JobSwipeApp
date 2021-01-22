import { StyleSheet } from "react-native";

const button = {
  backgroundColor: "#00BCD4",
  borderWidth: 0,
  borderColor: "#fff",
  alignItems: "center",
  justifyContent: "center",
  margin: 5,
};

const buttonStyles = StyleSheet.create({
  buttonSearchJobs: {
    ...button,
    width: 300,
    height: 70,
    borderRadius: 5,
  },
  buttonWelcome: {
    ...button,
    width: 150,
    height: 150,
    borderRadius: 75,
  },
  buttonLoginThirdParty: {
    ...button,
    width: 310,
    height: 40,
    borderRadius: 2,
  },
  buttonReturnLogOut: {
    ...button,
    width: 100,
    height: 50,
    left: 10,
    borderRadius: 4,
  },
  buttonLogin: {
    ...button,
    width: 200,
    height: 70,
    borderRadius: 25,
  },
  textInButton: {
    color: "#fff",
    textAlign: "center",
  },
});

export default buttonStyles;

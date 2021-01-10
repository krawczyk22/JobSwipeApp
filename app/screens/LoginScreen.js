import React from "react";
import { Text, View, TextInput, TouchableOpacity } from "react-native";
import { CheckBox } from "react-native-elements";
import * as Google from "expo-google-app-auth";
import * as firebase from "firebase";

import ContainerStyles from "../assets/styles/ContainerStyles.js";
import TextStyles from "../assets/styles/TextStyles.js";
import ThirdPartyButton from "../components/ThirdPartyButton.js";
import LoginButton from "../components/LoginButton.js";
import ButtonStyles from "../assets/styles/ButtonStyles.js";

const LoginScreen = ({ navigation }) => {
  const isUserEqual = (googleUser, firebaseUser) => {
    if (firebaseUser) {
      var providerData = firebaseUser.providerData;
      for (var i = 0; i < providerData.length; i++) {
        if (
          providerData[i].providerId ===
            firebase.auth.GoogleAuthProvider.PROVIDER_ID &&
          providerData[i].uid === googleUser.getBasicProfile().getId()
        ) {
          // We don't need to reauth the Firebase connection.
          return true;
        }
      }
    }
    return false;
  };

  const onSignIn = (googleUser) => {
    //console.log("Google Auth Response", googleUser);
    // We need to register an Observer on Firebase Auth to make sure auth is initialized.
    var unsubscribe = firebase.auth().onAuthStateChanged((firebaseUser) => {
      unsubscribe();
      // Check if we are already signed-in Firebase with the correct user.
      if (!isUserEqual(googleUser, firebaseUser)) {
        // Build Firebase credential with the Google ID token.
        var credential = firebase.auth.GoogleAuthProvider.credential(
          googleUser.idToken,
          googleUser.accessToken
        );

        // Sign in with credential from the Google user.
        firebase
          .auth()
          .signInWithCredential(credential)
          .then((result) => {
            console.log(result.user);
            firebase
              .database()
              .ref("/users/" + result.user.uid)
              .set({
                gmail: result.user.email,
                displayName: result.user.displayName,
              });
          })
          .catch((error) => {
            // Handle Errors here.
            var errorCode = error.code;
            var errorMessage = error.message;
            // The email of the user's account used.
            var email = error.email;
            // The firebase.auth.AuthCredential type that was used.
            var credential = error.credential;
            // ...
          });
      } else {
        console.log("User already signed-in Firebase.");
      }
    });
  };

  const signInWithGoogleAsync = async () => {
    try {
      const result = await Google.logInAsync({
        //behavior: "web",
        //androidClientId: YOUR_CLIENT_ID_HERE,
        iosClientId:
          "614163336710-dnqqdobjgm6or2cvjg66anjetrlobfpq.apps.googleusercontent.com",
        scopes: ["profile", "email"],
      });

      if (result.type === "success") {
        onSignIn(result);
        return result.accessToken;
      } else {
        return { cancelled: true };
      }
    } catch (e) {
      return { error: true };
    }
  };

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
        thirdParty={"Google"}
        colour={"#D44638"}
      />
      <ThirdPartyButton
        toggleCheckbox={toggleCheckbox}
        thirdParty={"Twitter"}
        colour={"#49A5FB"}
      />
      <TouchableOpacity
        style={
          toggleCheckbox
            ? [
                ButtonStyles.buttonLoginThirdParty,
                { backgroundColor: "#D44638" },
              ]
            : ButtonStyles.buttonLoginThirdPartyDisabled
        }
        activeOpacity={0.5}
        disabled={!toggleCheckbox}
        onPress={() => {
          signInWithGoogleAsync();
        }}
      >
        <Text style={ButtonStyles.textInButton}>Log in with Google</Text>
      </TouchableOpacity>
    </View>
  );
};

export default LoginScreen;

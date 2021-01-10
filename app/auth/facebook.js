import * as Facebook from "expo-facebook";
import * as firebase from "firebase";

const isUserEqual = (facebookAuthResponse, firebaseUser) => {
  if (firebaseUser) {
    var providerData = firebaseUser.providerData;
    for (var i = 0; i < providerData.length; i++) {
      if (
        providerData[i].providerId ===
          firebase.auth.FacebookAuthProvider.PROVIDER_ID &&
        providerData[i].uid === facebookAuthResponse.userID
      ) {
        // We don't need to re-auth the Firebase connection.
        return true;
      }
    }
  }
  return false;
};

const checkLoginState = (response) => {
  if (response) {
    // User is signed-in Facebook.
    var unsubscribe = firebase.auth().onAuthStateChanged((firebaseUser) => {
      unsubscribe();
      // Check if we are already signed-in Firebase with the correct user.
      if (!isUserEqual(response, firebaseUser)) {
        // Build Firebase credential with the Facebook auth token.

        var credential = firebase.auth.FacebookAuthProvider.credential(
          response.token
        );
        console.log(credential);
        // Sign in with the credential from the Facebook user.
        firebase
          .auth()
          .signInWithCredential(credential)
          .catch((error) => {
            console.log(error);
          });
      } else {
        // User is already signed-in Firebase with the correct user.
      }
    });
  } else {
    // User is signed-out of Facebook.
    firebase.auth().signOut();
    console.log("User already signed-in Firebase.");
  }
};

const signInWithFacebook = async () => {
  try {
    await Facebook.initializeAsync({
      appId: "2790823421182438",
    });
    const result = await Facebook.logInWithReadPermissionsAsync({
      permissions: ["public_profile"],
    });
    if (result.type === "success") {
      checkLoginState(result);
      return result.token;
    } else {
      // type === 'cancel'
    }
  } catch ({ message }) {
    alert(`Facebook Login Error: ${message}`);
  }
};

export default signInWithFacebook;

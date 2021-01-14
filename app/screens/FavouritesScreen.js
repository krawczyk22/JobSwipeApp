import React, { useState } from "react";
import { Text, SafeAreaView } from "react-native";
import ContainerStyles from "../assets/styles/ContainerStyles.js";
import * as firebase from "firebase";

const FavouritesScreen = () => {
  const [isLoading, setLoading] = useState(true);

  const getJobID = () => {
    firebase
      .database()
      .ref("users")
      .on("child_added", (snap) => {
        console.log(snap.val().displayName);
      });
  };

  return (
    <SafeAreaView style={ContainerStyles.container}>
      {isLoading ? (
        <Text>You have no jobs saved!</Text>
      ) : (
        <Text>Favourites</Text>
      )}
    </SafeAreaView>
  );
};

export default FavouritesScreen;

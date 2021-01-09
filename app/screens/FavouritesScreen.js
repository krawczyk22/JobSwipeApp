import React, { useState } from "react";
import { Text, SafeAreaView } from "react-native";
import ContainerStyles from "../assets/styles/ContainerStyles.js";

const FavouritesScreen = () => {
  const [isLoading, setLoading] = useState(true);
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

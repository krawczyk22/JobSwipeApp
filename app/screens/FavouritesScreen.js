import React, { Component } from "react";
import { Text, SafeAreaView } from "react-native";
import ContainerStyles from "../assets/styles/ContainerStyles.js";

class FavouritesScreen extends Component {
  render() {
    return (
      <SafeAreaView style={ContainerStyles.container}>
        <Text>Map</Text>
      </SafeAreaView>
    );
  }
}

export default FavouritesScreen;

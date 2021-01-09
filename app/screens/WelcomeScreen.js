import React from "react";
import { Text, View } from "react-native";
import ContainerStyles from "../assets/styles/ContainerStyles.js";
import TextStyles from "../assets/styles/TextStyles.js";
import WelcomeButton from "../components/WelcomeButton.js";

const WelcomeScreen = ({ navigation }) => {
  return (
    <View style={ContainerStyles.container}>
      <Text style={TextStyles.title}>Job Swiper</Text>
      <Text style={TextStyles.description}>
        Welcome to the place where you'll find your dream job.
      </Text>
      <WelcomeButton navigation={navigation} />
    </View>
  );
};

export default WelcomeScreen;

import React from "react";
import { Text, View } from "react-native";
import ContainerStyles from "../assets/styles/ContainerStyles.js";
import TextStyles from "../assets/styles/TextStyles.js";
import WelcomeButton from "../components/buttons/WelcomeButton.js";

const WelcomeScreen = ({ navigation }) => {
  return (
    <View style={ContainerStyles.container}>
      <Text style={TextStyles.title}>Job Swiper</Text>
      <Text style={TextStyles.description}>
        Welcome to the place where you'll find your dream job.
      </Text>
      <WelcomeButton navigation={navigation} />
      <Text style={TextStyles.description}>
        Swipe left to discard jobs, swipe right to save them for later!
      </Text>
    </View>
  );
};

export default WelcomeScreen;

import React from "react";
import MapView from "react-native-maps";
import * as Location from "expo-location";
import { Text, TouchableOpacity, TextInput, SafeAreaView } from "react-native";
import ContainerStyles from "../assets/styles/ContainerStyles.js";
import ButtonStyles from "../assets/styles/ButtonStyles.js";
import TextStyles from "../assets/styles/TextStyles.js";

export default function MapScreen() {
  const [valueJob, onChangeTextJob] = React.useState(null);
  const [location, setLocation] = React.useState(null);
  const [errorMsg, setErrorMsg] = React.useState(null);

  React.useEffect(() => {
    (async () => {
      let { status } = await Location.requestPermissionsAsync();
      if (status !== "granted") {
        setErrorMsg("Permission to access location was denied");
      }

      let location = await Location.getCurrentPositionAsync({});
      setLocation(location);
    })();
  }, []);

  let text = "Waiting..";
  if (errorMsg) {
    text = errorMsg;
  } else if (location) {
    text = JSON.stringify(location);
  }

  return (
    <SafeAreaView style={ContainerStyles.container}>
      <MapView
        style={[ContainerStyles.mapStyle, { top: 60 }]}
        loadingEnabled={true}
        region={{
          latitude: location.coords.latitude,
          longitude: location.coords.longitude,
          //latitude: 52.4862,
          //longitude: -1.8904,
          latitudeDelta: 0.1,
          longitudeDelta: 0.1,
        }}
      />
      <TextInput
        style={[ContainerStyles.textAreaJobSearch, { bottom: 720 }]}
        onChangeText={(text) => onChangeTextJob(text)}
        value={valueJob}
        textContentType="jobTitle"
        autoCapitalize="none"
        placeholderTextColor="grey"
        placeholder="Enter job title, keywords, or company"
      />
      <TouchableOpacity
        style={[ButtonStyles.buttonSearchMap, { bottom: 170 }]}
        activeOpacity={0.8}
      >
        <Text style={ButtonStyles.textInButton}>Search jobs here</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
}

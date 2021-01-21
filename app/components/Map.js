import React from "react";
import { StyleSheet } from "react-native";
import MapView from "react-native-maps";

const Map = () => {
  return (
    <MapView
      style={localStyles.mapStyle}
      loadingEnabled={true}
      initialRegion={{
        //latitude: location.coords.latitude,
        //longitude: location.coords.longitude,
        latitude: 52.4862,
        longitude: -1.8904,
        latitudeDelta: 0.1,
        longitudeDelta: 0.1,
      }}
    ></MapView>
  );
};

const localStyles = StyleSheet.create({
  mapStyle: {
    width: "auto",
    height: "30%",
    zIndex: -1,
    borderTopWidth: 10,
  },
});

export default Map;

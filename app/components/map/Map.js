import React from "react";
import MapView from "react-native-maps";
import MapStyles from "./MapStyles.js";

const Map = () => {
  return (
    <MapView
      style={MapStyles.mapStyle}
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

export default Map;

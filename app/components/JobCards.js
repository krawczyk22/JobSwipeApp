import React from "react";
import { Text, View } from "react-native";
import MapView from "react-native-maps";
import CardStyles from "../assets/styles/CardStyles.js";
import ContainerStyles from "../assets/styles/ContainerStyles.js";
import Swiper from "react-native-deck-swiper";

const JobCards = ({ data }) => {
  return (
    <Swiper
      cards={data}
      renderCard={(card) => {
        return (
          <View style={CardStyles.card}>
            <MapView
              style={ContainerStyles.mapStyle}
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
            <Text style={CardStyles.text}></Text>
            <Text style={CardStyles.text}>{card.employerName}</Text>
            <Text style={CardStyles.text}>{card.jobTitle}</Text>
            <Text style={CardStyles.text}>{card.locationName}</Text>
            <Text style={CardStyles.text}>{card.jobDescription}</Text>
          </View>
        );
      }}
      onSwipedAll={() => {
        console.log("All finished");
      }}
      onSwipedLeft={() => {
        console.log("Swiped Left");
      }}
      onSwipedRight={() => {
        console.log("Swiped Right");
      }}
      horizontalSwipe={true}
      verticalSwipe={false}
      cardIndex={0}
      backgroundColor={"#E8EDFF"}
      stackSize={3}
    ></Swiper>
  );
};

export default JobCards;

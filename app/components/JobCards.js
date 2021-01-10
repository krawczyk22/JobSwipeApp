import React, { useState, useEffect } from "react";
import { Text, View } from "react-native";
import MapView from "react-native-maps";
import CardStyles from "../assets/styles/CardStyles.js";
import ContainerStyles from "../assets/styles/ContainerStyles.js";
import Swiper from "react-native-deck-swiper";
import ReturnButton from "../components/ReturnButton.js";

const JobCards = ({ data, navigation }) => {
  const [isLoadingGeo, setLoadingGeo] = useState(true);
  const [loglat, setLogLat] = useState([]);

  /*useEffect(() => {
    fetch(
      `http://open.mapquestapi.com/geocoding/v1/address?key=RcaRGE3AeecDHhGKCWDr8dolsC4kCsM5&location=${data.locationName},GB`,
      {
        method: "GET",
      }
    )
      .then((response) => response.json())
      .then((json) => setLogLat(json.results[0].locations[0].latLng))
      .catch((error) => console.error(error))
      .finally(() => setLoadingGeo(false));
  }, []);

  const getCoordinates = (city) => {
    fetch(
      `http://open.mapquestapi.com/geocoding/v1/address?key=RcaRGE3AeecDHhGKCWDr8dolsC4kCsM5&location=${city},GB`,
      {
        method: "GET",
      }
    )
      .then((response) => response.json())
      .then((json) => setLogLat(json.results[0].locations[0].latLng))
      .catch((error) => console.error(error))
      .finally(() => setLoadingGeo(false));
  };

  const addCoordinates = () => {};*/
  console.log(data[0].locationName);
  console.log(loglat);

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
            <Text style={CardStyles.textHeader}>{card.jobTitle}</Text>
            <Text style={CardStyles.textHeader}>{card.employerName}</Text>
            <Text style={CardStyles.textHeader}>{card.locationName}</Text>
            <Text style={CardStyles.textDescription}>
              {card.jobDescription}
            </Text>
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
    >
      <ReturnButton navigation={navigation} />
    </Swiper>
  );
};

export default JobCards;

import React from "react";
import { Text, SafeAreaView } from "react-native";
import MapView from "react-native-maps";
import CardStyles from "../assets/styles/CardStyles.js";
import ContainerStyles from "../assets/styles/ContainerStyles.js";
import TextStyles from "../assets/styles/TextStyles.js";
import Swiper from "react-native-deck-swiper";
import ReturnButton from "../components/ReturnButton.js";
//import FavouritesScreen from "../screens/FavouritesScreen.js";

import * as firebase from "firebase";

const JobCards = ({ data, navigation }) => {
  const addJobID = (data) => {
    firebase.auth().onAuthStateChanged((user) => {
      firebase
        .database()
        .ref("/users/" + user.uid)
        .push()
        .set({
          jobId: data.jobId,
          jobTitle: data.jobTitle,
          employerName: data.employerName,
          jobUrl: data.jobUrl,
        });
    });
  };

  /*
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
  //console.log(data[0].locationName);

  return (
    <Swiper
      cards={data}
      renderCard={(card) => {
        return (
          <SafeAreaView style={CardStyles.card}>
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
          </SafeAreaView>
        );
      }}
      onSwipedRight={(cardIndex) => {
        addJobID(data[cardIndex]);
      }}
      horizontalSwipe={true}
      verticalSwipe={false}
      cardIndex={0}
      backgroundColor={"#E8EDFF"}
      stackSize={3}
    >
      <SafeAreaView style={{ flexDirection: "row" }}>
        <ReturnButton navigation={navigation} />
        <Text style={TextStyles.title}>Swipe away!</Text>
      </SafeAreaView>
    </Swiper>
  );
};

export default JobCards;

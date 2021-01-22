import React from "react";
import { Text, SafeAreaView } from "react-native";
import TextStyles from "../../assets/styles/TextStyles.js";
import JobCardStyles from "./JobCardsStyles.js";
import Swiper from "react-native-deck-swiper";
import ReturnButton from "../buttons/ReturnButton.js";
import Map from "../map/Map.js";
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
          <SafeAreaView style={JobCardStyles.card}>
            <Map />
            <Text style={JobCardStyles.textHeader}>{card.jobTitle}</Text>
            <Text style={JobCardStyles.textHeader}>{card.employerName}</Text>
            <Text style={JobCardStyles.textHeader}>{card.locationName}</Text>
            <Text style={JobCardStyles.textDescription}>
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

import React, { useEffect, useState } from "react";
import MapView from "react-native-maps";
import {
  Text,
  SafeAreaView,
  View,
  ActivityIndicator,
  TouchableOpacity,
} from "react-native";
import ContainerStyles from "../assets/styles/ContainerStyles.js";
import ButtonStyles from "../assets/styles/ButtonStyles.js";
import CardStyles from "../assets/styles/CardStyles.js";
import Swiper from "react-native-deck-swiper";

const JobSearchScreen = ({ route, navigation }) => {
  const [isLoadingReed, setLoadingReed] = useState(true);
  const [isLoadingGeo, setLoadingGeo] = useState(true);
  const [data, setData] = useState([]);
  const [loglat, setLogLat] = useState([]);
  const base64 = require("base-64");

  const {
    valueKeyWords,
    valueDistanceFromLocation,
    valueMinSalary,
    valueMaxSalary,
    valuePermanent,
    valueContract,
    valueTemp,
    valueFullTime,
    valuePartTime,
  } = route.params;

  let urlReed = `https://www.reed.co.uk/api/1.0/search?keywords=${valueKeyWords}&
  location=birmingham&distancefromlocation=${valueDistanceFromLocation}$permanent=${valuePermanent}&
  contract=${valueContract}&temp=${valueTemp}$partTime=${valuePartTime}&fullTime=${valueFullTime}&
  minimumSalary=${valueMinSalary}&maximumSalary=${valueMaxSalary}`;
  let usernameReed = "4e067145-304a-4839-8087-efe68077a33a";
  let passwordReed = "";

  useEffect(() => {
    fetch(urlReed, {
      headers: {
        Authorization:
          "Basic " + base64.encode(usernameReed + ":" + passwordReed),
      },
    })
      .then((response) => response.json())
      .then((json) => setData(json.results))
      .catch((error) => console.error(error))
      .finally(() => setLoadingReed(false));
  }, []);

  /*
  useEffect(() => {
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
*/
  //console.log(data);
  console.log(isLoadingReed);

  return (
    <SafeAreaView style={ContainerStyles.container}>
      {isLoadingReed ? (
        <ActivityIndicator />
      ) : (
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
        >
          <TouchableOpacity
            style={ButtonStyles.buttonGoBack}
            activeOpacity={0.5}
            onPress={() => navigation.goBack()}
          >
            <Text style={ButtonStyles.textInButton}>Back</Text>
          </TouchableOpacity>
        </Swiper>
      )}
    </SafeAreaView>
  );
};

export default JobSearchScreen;

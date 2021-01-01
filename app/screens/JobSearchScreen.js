import React, { useEffect, useState } from "react";
import { Text, SafeAreaView, View, ActivityIndicator } from "react-native";
import ContainerStyles from "../assets/styles/ContainerStyles.js";
import CardStyles from "../assets/styles/CardStyles.js";
import Swiper from "react-native-deck-swiper";

const JobSearchScreen = () => {
  const [isLoading, setLoading] = useState(true);
  const [data, setData] = useState([]);
  const base64 = require("base-64");

  let url =
    "https://www.reed.co.uk/api/1.0/search?keywords=accountant&location=london&distancefromlocation=15";
  let username = "4e067145-304a-4839-8087-efe68077a33a";
  let password = "";

  useEffect(() => {
    fetch(url, {
      headers: {
        Authorization: "Basic " + base64.encode(username + ":" + password),
      },
    })
      .then((response) => response.json())
      .then((json) => setData(json.results))
      .catch((error) => console.error(error))
      .finally(() => setLoading(false));
  }, []);
  console.log(data);

  return (
    <SafeAreaView style={ContainerStyles.container}>
      {isLoading ? (
        <ActivityIndicator />
      ) : (
        <Swiper
          cards={data}
          renderCard={(card) => {
            return (
              <View style={CardStyles.card}>
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
      )}
    </SafeAreaView>
  );
};

export default JobSearchScreen;

import React, { useEffect, useState } from "react";
import { SafeAreaView, ActivityIndicator, View } from "react-native";
import ContainerStyles from "../assets/styles/ContainerStyles.js";
import JobCards from "../components/JobCards.js";
import ReturnButton from "../components/ReturnButton.js";

const JobSearchScreen = ({ route, navigation }) => {
  const [isLoadingReed, setLoadingReed] = useState(true);
  const [isLoadingGeo, setLoadingGeo] = useState(true);
  const [data, setData] = useState([]);
  const [loglat, setLogLat] = useState([]);
  const base64 = require("base-64");

  const {
    valueKeyWords,
    valueLocation,
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
  locationName=${valueLocation}&distancefromlocation=${valueDistanceFromLocation}&permanent=${valuePermanent}&
  contract=${valueContract}&temp=${valueTemp}&partTime=${valuePartTime}&fullTime=${valueFullTime}&
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

  return (
    <SafeAreaView style={ContainerStyles.container}>
      {isLoadingReed ? (
        <View>
          <ReturnButton navigation={navigation} />
          <ActivityIndicator />
        </View>
      ) : (
        <View style={{ height: "100%", width: "100%" }}>
          <JobCards data={data} navigation={navigation} />
        </View>
      )}
    </SafeAreaView>
  );
};

export default JobSearchScreen;

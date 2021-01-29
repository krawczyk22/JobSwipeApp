import React, { useEffect, useState } from "react";
import { SafeAreaView, ActivityIndicator, View } from "react-native";
import ContainerStyles from "../assets/styles/ContainerStyles.js";
import JobCards from "../components/jobCards/JobCards.js";
import ReturnButton from "../components/buttons/ReturnButton.js";

const JobSearchScreen = ({ route, navigation }) => {
  const [isLoadingReed, setLoadingReed] = useState(true);
  const [data, setData] = useState([]);
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

  let urlReed = `https://www.reed.co.uk/api/1.0/search?keywords=${valueKeyWords}
  &locationname=${valueLocation}&distancefromlocation=${valueDistanceFromLocation}&permanent=${valuePermanent}&
  contract=${valueContract}&temp=${valueTemp}&partTime=${valuePartTime}&fullTime=${valueFullTime}&
  minimumSalary=${valueMinSalary}&maximumSalary=${valueMaxSalary}`;
  let usernameReed = "4e067145-304a-4839-8087-efe68077a33a";
  let passwordReed = "";

  const getCoordinates = (city) => {
    return fetch(
      `http://open.mapquestapi.com/geocoding/v1/address?key=RcaRGE3AeecDHhGKCWDr8dolsC4kCsM5&location=${city},GB`,
      {
        method: "GET",
      }
    )
      .then((response) => response.json())
      .then((json) => {
        return json.results[0].locations[0].latLng;
      })
      .catch((error) => console.error(error));
  };

  useEffect(() => {
    fetch(urlReed, {
      headers: {
        Authorization:
          "Basic " + base64.encode(usernameReed + ":" + passwordReed),
      },
    })
      .then((response) => response.json())
      .then((json) => {
        let temp = json.results;
        for (var key in json.results) {
          getCoordinates(json.results[key].locationName).then((coordinates) => {
            temp[key]["lat"] = coordinates.lat;
            temp[key]["lng"] = coordinates.lng;
            //temp[i]["lat"] = JSON.stringify(coordinates.lat);
            //temp[i]["lng"] = JSON.stringify(coordinates.lng);
            console.log(temp);
            //console.log(coordinates);
          });
          //console.log(temp);
          //getCoordinates(json.results[i].locationName).then((result) =>
          //  setTemp(result)
          //);
          //json.results.push(data);
          //console.log(temp[i]);
          //console.log(json.results[i].locationName);
        }
        //console.log(json.results[0].locationName);
        //console.log(json.results);
        setData(temp);
        console.log(temp);
      })
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

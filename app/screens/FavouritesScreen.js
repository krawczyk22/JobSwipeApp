import React, { useState, useEffect } from "react";
import { Text, SafeAreaView, View } from "react-native";
import { SwipeListView } from "react-native-swipe-list-view";
import * as firebase from "firebase";
import SwipelistviewStyles from "../assets/styles/SwipelistviewStyles.js";
import LogOutButton from "../components/LogOutButton.js";
import ContainerStyles from "../assets/styles/ContainerStyles.js";

const getJobID = () => {
  return firebase
    .database()
    .ref("/users/" + firebase.auth().currentUser.uid + "/")
    .once("value")
    .then((snap) => {
      var jobs = snap.toJSON();
      var dictionary = [];
      for (var key in jobs) {
        if (jobs.hasOwnProperty(key) && Number.isInteger(jobs[key]["jobID"])) {
          dictionary.push({ jobID: jobs[key]["jobID"] });
        }
      }
      return JSON.stringify(dictionary);
    });
};

const FavouritesScreen = ({ navigation }) => {
  const [jobsNotPresent, setJobsNotPresent] = useState(true);
  const [jobIDs, setJobIDs] = useState(null);

  useEffect(() => {
    firebase.auth().onAuthStateChanged((user) => {
      if (user) {
        getJobID().then((data) => {
          setJobIDs(JSON.parse(data));
          setJobsNotPresent(false);
        });
      } else {
        navigation.push("loading");
      }
    });
  }, []);

  return (
    <SafeAreaView style={SwipelistviewStyles.container}>
      {jobsNotPresent ? (
        <View style={ContainerStyles.container}>
          <LogOutButton navigation={navigation} />
          <View></View>
          <Text>You have no jobs saved!</Text>
        </View>
      ) : (
        <View>
          <View style={ContainerStyles.container}>
            <LogOutButton navigation={navigation} />
          </View>
          <SwipeListView
            disableRightSwipe
            data={jobIDs}
            renderItem={({ item, rowMap }) => (
              <View style={SwipelistviewStyles.rowFront}>
                <Text>{item.jobID}</Text>
              </View>
            )}
            keyExtractor={(item, index) => index.toString()}
            renderHiddenItem={() => (
              <View
                style={[
                  SwipelistviewStyles.backRightBtn,
                  SwipelistviewStyles.backRightBtnRight,
                ]}
              >
                <Text>Delete</Text>
              </View>
            )}
            rightOpenValue={-75}
          />
        </View>
      )}
    </SafeAreaView>
  );
};

export default FavouritesScreen;

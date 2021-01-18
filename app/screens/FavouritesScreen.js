import React, { useState, useEffect } from "react";
import {
  Text,
  SafeAreaView,
  View,
  ActivityIndicator,
  TouchableOpacity,
  Linking,
  Alert,
} from "react-native";
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
        if (jobs.hasOwnProperty(key) && Number.isInteger(jobs[key]["jobId"])) {
          dictionary.push({
            jobId: jobs[key]["jobId"],
            employerName: jobs[key]["employerName"],
            jobTitle: jobs[key]["jobTitle"],
            jobUrl: jobs[key]["jobUrl"],
          });
        }
      }
      return JSON.stringify(dictionary);
    });
};

const handleURL = (url) => {
  Linking.canOpenURL(url)
    .then((supported) => {
      if (!supported) {
        console.log("Can't handle url: " + url);
      } else {
        return opelURLalert(url);
      }
    })
    .catch((err) => console.error("An error occurred", err));
};

const opelURLalert = (url) =>
  Alert.alert(
    "Open link",
    "Do you want to open this link?",
    [
      {
        text: "Cancel",
        style: "cancel",
      },
      { text: "OK", onPress: () => Linking.openURL(url) },
    ],
    { cancelable: false }
  );

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
          <ActivityIndicator />
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
            renderItem={({ item }) => (
              <TouchableOpacity
                activeOpacity={0.8}
                onPress={() => handleURL(item.jobUrl)}
              >
                <View style={SwipelistviewStyles.rowFront}>
                  <Text>
                    {item.jobTitle} | {item.employerName}
                  </Text>
                </View>
              </TouchableOpacity>
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

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

const FavouritesScreen = ({ navigation }) => {
  const [jobsNotPresent, setJobsNotPresent] = useState(true);
  const [jobData, setJobData] = useState(null);
  const [refresh, setRefresh] = useState(1);

  const getJobID = () => {
    return firebase
      .database()
      .ref("/users/" + firebase.auth().currentUser.uid + "/")
      .once("value")
      .then((snap) => {
        var jobs = snap.toJSON();
        var dictionary = [];
        for (var key in jobs) {
          if (
            jobs.hasOwnProperty(key) &&
            Number.isInteger(jobs[key]["jobId"])
          ) {
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
          return openURLalert(url);
        }
      })
      .catch((err) => console.error("An error occurred", err));
  };

  const openURLalert = (url) =>
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

  const deleteJob = (jobId, refresh) => {
    console.log("Function deleteJob is running!");
    let path = "/users/" + firebase.auth().currentUser.uid + "/";
    firebase
      .database()
      .ref(path)
      .on("child_added", (snap) => {
        if (snap.val()["jobId"] == jobId) {
          firebase
            .database()
            .ref(path + snap.key)
            .remove();
        }
      });
    setRefresh(refresh + 1);
  };

  const deleteJobAlert = (jobId, refresh) =>
    Alert.alert(
      "Delete",
      "Do you want to delete this?",
      [
        {
          text: "Cancel",
          style: "cancel",
        },
        { text: "OK", onPress: () => deleteJob(jobId, refresh) },
      ],
      { cancelable: false }
    );

  useEffect(() => {
    firebase.auth().onAuthStateChanged((user) => {
      if (user) {
        navigation.addListener("tabPress", (e) => {
          console.log("useEffect runs2");
          getJobID().then((data) => {
            setJobData(JSON.parse(data));
          });
          //e.preventDefault();
        });
        console.log("useEffect runs1");
        getJobID().then((data) => {
          setJobData(JSON.parse(data));
        });
        setJobsNotPresent(false);
        //return unsubscribe;
      } else {
        navigation.push("loading");
      }
    });
  }, [navigation, refresh]);

  return (
    <SafeAreaView style={SwipelistviewStyles.container}>
      {jobsNotPresent ? (
        <View style={ContainerStyles.container}>
          <ActivityIndicator />
          <Text>Loading, please wait</Text>
        </View>
      ) : (
        <View>
          <View style={ContainerStyles.container}>
            <LogOutButton navigation={navigation} />
          </View>
          <SwipeListView
            disableRightSwipe
            data={jobData}
            renderItem={({ item }) => (
              <TouchableOpacity
                activeOpacity={0.8}
                underlayColor={"#FFFFFF"}
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
            renderHiddenItem={({ item }) => (
              <TouchableOpacity
                style={[
                  SwipelistviewStyles.backRightBtn,
                  SwipelistviewStyles.backRightBtnRight,
                ]}
                onPress={() => deleteJobAlert(item.jobId, refresh)}
              >
                <View>
                  <Text>Delete</Text>
                </View>
              </TouchableOpacity>
            )}
            rightOpenValue={-75}
          />
        </View>
      )}
    </SafeAreaView>
  );
};

export default FavouritesScreen;

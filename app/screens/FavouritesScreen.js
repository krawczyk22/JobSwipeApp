import React, { useState } from "react";
import { Text, SafeAreaView, View } from "react-native";
import ContainerStyles from "../assets/styles/ContainerStyles.js";
import { SwipeListView } from "react-native-swipe-list-view";
import * as firebase from "firebase";

const getJobID = () => {
  return firebase
    .database()
    .ref("/users/" + firebase.auth().currentUser.uid + "/")
    .once("value")
    .then((snap) => {
      var jobs = snap.toJSON();
      var directory = [];
      for (var key in jobs) {
        if (jobs.hasOwnProperty(key) && Number.isInteger(jobs[key]["jobID"])) {
          //console.log(key + " -> " + jobs[key]["jobID"]);
          directory.push({ jobID: jobs[key]["jobID"] });
        }
      }
      //console.log(JSON.stringify(directory));
      return JSON.stringify(directory);
    });
};

const FavouritesScreen = () => {
  const [isLoading, setLoading] = useState(false);
  const [jobIDs, setJobIDs] = useState(null);

  getJobID().then((data) => {
    setJobIDs(JSON.parse(data));
  });

  return (
    <SafeAreaView style={ContainerStyles.container}>
      {isLoading ? (
        <Text>You have no jobs saved!</Text>
      ) : (
        <SwipeListView
          data={jobIDs}
          renderItem={({ item }) => (
            <View>
              <Text>{item.jobID}</Text>
            </View>
          )}
          keyExtractor={(item, index) => index.toString()}
          renderHiddenItem={(data, rowMap) => (
            <View>
              <Text>Left</Text>
              <Text>Right</Text>
            </View>
          )}
          leftOpenValue={75}
          rightOpenValue={-75}
        />
      )}
    </SafeAreaView>
  );
};

export default FavouritesScreen;

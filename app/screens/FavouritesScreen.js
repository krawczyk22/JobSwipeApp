import React, { useState } from "react";
import { Text, SafeAreaView, View } from "react-native";
import ContainerStyles from "../assets/styles/ContainerStyles.js";
import { SwipeListView } from "react-native-swipe-list-view";
import * as firebase from "firebase";

const FavouritesScreen = () => {
  const [isLoading, setLoading] = useState(false);

  var text =
    "[" +
    '{ "ID":"John" , "lastName":"Doe" },' +
    '{ "ID":"Anna" , "lastName":"Smith" },' +
    '{ "ID":"Peter" , "lastName":"Jones" } ]';

  var obj = JSON.parse(text);

  const getJobID = () => {
    return firebase
      .database()
      .ref("/users/" + firebase.auth().currentUser.uid)
      .on("child_added", (snap) => {
        if (Number.isInteger(snap.val().jobID)) {
          //jobs[snap.val().jobID] = snap.val().jobID;
          console.log(snap.val().jobID);
          //return snap.val().jobID;
        }
      });
  };

  const saveJobID = (job) => {
    const jobs = job;
    return jobs;
  };

  console.log(getJobID());

  return (
    <SafeAreaView style={ContainerStyles.container}>
      {isLoading ? (
        <Text>You have no jobs saved!</Text>
      ) : (
        <SwipeListView
          data={obj}
          renderItem={({ item }) => (
            <View>
              <Text>{item.lastName}</Text>
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

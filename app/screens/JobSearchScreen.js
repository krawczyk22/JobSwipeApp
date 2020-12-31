import React, { useEffect, useState } from "react";
import {
  Text,
  SafeAreaView,
  Button,
  View,
  FlatList,
  ActivityIndicator,
} from "react-native";
import ContainerStyles from "../assets/styles/ContainerStyles.js";
import CardStyles from "../assets/styles/CardStyles.js";
import Swiper from "react-native-deck-swiper";

const JobSearchScreen = () => {
  const [isLoading, setLoading] = useState(true);
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch("https://reactnative.dev/movies.json")
      .then((response) => response.json())
      .then((json) => setData(json.movies))
      .catch((error) => console.error(error))
      .finally(() => setLoading(false));
  }, []);

  return (
    <SafeAreaView style={ContainerStyles.container}>
      {isLoading ? (
        <ActivityIndicator />
      ) : (
        <FlatList
          data={data}
          keyExtractor={({ id }, index) => id}
          renderItem={({ item }) => (
            <Swiper
              cards={item.title}
              renderCard={(card) => {
                return (
                  <View style={CardStyles.card}>
                    <Text style={CardStyles.text}>{card}</Text>
                  </View>
                );
              }}
              onSwiped={(cardIndex) => {
                console.log(cardIndex);
              }}
              onSwipedAll={() => {
                console.log("onSwipedAll");
              }}
              cardIndex={0}
              backgroundColor={"#E8EDFF"}
              stackSize={3}
            >
              <Button
                onPress={() => {
                  console.log("oulala");
                }}
                title="Press me"
              >
                You can press me
              </Button>
            </Swiper>
            //<Text>{item.title}, {item.releaseYear}</Text>
          )}
        />
      )}
    </SafeAreaView>
  );
};

export default JobSearchScreen;

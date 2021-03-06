import React from "react";
import {
  Text,
  View,
  SafeAreaView,
  TextInput,
  TouchableOpacity,
} from "react-native";
import { CheckBox } from "react-native-elements";
import ContainerStyles from "../assets/styles/ContainerStyles.js";
import TextStyles from "../assets/styles/TextStyles.js";
import ButtonStyles from "../components/buttons/ButtonStyles.js";
import LogOutButton from "../components/buttons/LogOutButton.js";

const SearchScreen = ({ navigation }) => {
  const [valueKeyWords, onChangeKeyWords] = React.useState(null);
  const [valueLocation, onChangeLocation] = React.useState(null);
  const [valueDistanceFromLocation, onDistanceFromLocation] = React.useState(
    null
  );
  const [valueMinSalary, onChangeMinSalary] = React.useState(null);
  const [valueMaxSalary, onChangeMaxSalary] = React.useState(null);
  const [valuePermanent, onPermanent] = React.useState(true);
  const [valueContract, onChangeContract] = React.useState(true);
  const [valueTemp, onChangeTemp] = React.useState(true);
  const [valueFullTime, onChangeFullTime] = React.useState(true);
  const [valuePartTime, onChangePartTime] = React.useState(true);

  const checkNumberInput = () => {
    if (
      Number.isInteger(Number(valueMinSalary)) &&
      Number.isInteger(Number(valueMaxSalary)) &&
      Number.isInteger(Number(valueDistanceFromLocation))
    ) {
      return true;
    } else {
      alert("The numeric fields must cointain integers!");
      return false;
    }
  };

  return (
    <SafeAreaView style={ContainerStyles.container}>
      <SafeAreaView style={{ flexDirection: "row" }}>
        <LogOutButton navigation={navigation} />
        <Text style={TextStyles.title}>Enter Details</Text>
      </SafeAreaView>
      <TextInput
        style={ContainerStyles.textArea}
        onChangeText={(text) => onChangeKeyWords(text)}
        value={valueKeyWords}
        textContentType="jobTitle"
        placeholderTextColor="grey"
        placeholder="Enter Key Words"
      />
      <TextInput
        style={ContainerStyles.textArea}
        onChangeText={(text) => onChangeLocation(text)}
        value={valueLocation}
        textContentType="location"
        placeholderTextColor="grey"
        placeholder="Enter Location"
      />
      <TextInput
        style={ContainerStyles.textArea}
        onChangeText={(text) => onDistanceFromLocation(text)}
        value={valueDistanceFromLocation}
        textContentType="sublocality"
        placeholderTextColor="grey"
        placeholder="Enter Max. Distance From Location"
      />
      <TextInput
        style={ContainerStyles.textArea}
        onChangeText={(text) => onChangeMinSalary(text)}
        value={valueMinSalary}
        textContentType="none"
        placeholderTextColor="grey"
        placeholder="Enter Min. Salary"
      />
      <TextInput
        style={ContainerStyles.textArea}
        onChangeText={(text) => onChangeMaxSalary(text)}
        value={valueMaxSalary}
        textContentType="none"
        placeholderTextColor="grey"
        placeholder="Enter Max. Salary"
      />
      <View style={ContainerStyles.itemAlignRow}>
        <CheckBox
          checked={valuePermanent}
          onPress={() => onPermanent(!valuePermanent)}
          checkedColor="#00BCD4"
        />
        <Text>Permanent</Text>
        <CheckBox
          checked={valueContract}
          onPress={() => onChangeContract(!valueContract)}
          checkedColor="#00BCD4"
        />
        <Text>Contract</Text>
        <CheckBox
          checked={valueTemp}
          onPress={() => onChangeTemp(!valueTemp)}
          checkedColor="#00BCD4"
        />
        <Text>Temporary</Text>
      </View>
      <View style={ContainerStyles.itemAlignRow}>
        <CheckBox
          checked={valueFullTime}
          onPress={() => onChangeFullTime(!valueFullTime)}
          checkedColor="#00BCD4"
        />
        <Text>Full Time</Text>
        <CheckBox
          checked={valuePartTime}
          onPress={() => onChangePartTime(!valuePartTime)}
          checkedColor="#00BCD4"
        />
        <Text>Part Time</Text>
      </View>
      <TouchableOpacity
        style={ButtonStyles.buttonSearchJobs}
        activeOpacity={0.8}
        onPress={() => {
          if (checkNumberInput()) {
            navigation.navigate("JobSearch", {
              valueKeyWords: valueKeyWords,
              valueLocation: valueLocation,
              valueDistanceFromLocation: valueDistanceFromLocation,
              valueMinSalary: valueMinSalary,
              valueMaxSalary: valueMaxSalary,
              valuePermanent: valuePermanent,
              valueContract: valueContract,
              valueTemp: valueTemp,
              valueFullTime: valueFullTime,
              valuePartTime: valuePartTime,
            });
          }
        }}
      >
        <Text style={ButtonStyles.textInButton}>Search jobs here</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
};

export default SearchScreen;

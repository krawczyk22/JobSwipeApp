import React from "react";
import { Text, View, TextInput } from "react-native";
import { CheckBox } from "react-native-elements";
import ContainerStyles from "../assets/styles/ContainerStyles.js";
import TextStyles from "../assets/styles/TextStyles.js";

const SearchScreen = () => {
  const [valueKeyWords, onChangeKeyWords] = React.useState(null);
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

  return (
    <View style={ContainerStyles.container}>
      <Text style={TextStyles.title}>Enter Job Information</Text>
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
      <View style={ContainerStyles.TC}>
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
    </View>
  );
};

export default SearchScreen;

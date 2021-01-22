import { StyleSheet } from "react-native";

const text = {
  padding: 4,
  fontSize: 15,
  marginTop: 5,
  textAlign: "left",
  backgroundColor: "transparent",
};

const jobCardStyles = StyleSheet.create({
  card: {
    flex: 1,
    borderRadius: 4,
    borderWidth: 2,
    padding: 4,
    borderColor: "#E8E8E8",
    backgroundColor: "white",
  },
  textHeader: {
    ...text,
    fontSize: 25,
  },
  textDescription: {
    ...text,
    fontSize: 15,
  },
});

export default jobCardStyles;

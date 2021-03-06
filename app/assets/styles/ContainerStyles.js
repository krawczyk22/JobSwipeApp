import { StyleSheet } from "react-native";

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#E8EDFF",
    alignItems: "center",
    justifyContent: "center",
    padding: 40,
  },
  textArea: {
    height: 40,
    width: 320,
    borderColor: "black",
    backgroundColor: "white",
    borderRadius: 15,
    borderWidth: 0,
    marginLeft: 10,
    padding: 10,
    margin: 10,
  },
  centreBox: {
    justifyContent: "flex-start",
    alignItems: "center",
    margin: 10,
    paddingBottom: 40,
  },
  itemAlignRow: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
});

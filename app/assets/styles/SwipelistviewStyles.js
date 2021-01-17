import { StyleSheet } from "react-native";

export default StyleSheet.create({
  container: {
    backgroundColor: "#E8EDFF",
    flex: 1,
    width: "100%",
  },
  switchContainer: {
    flexDirection: "row",
    //justifyContent: "center",
    marginVertical: 50,
    flexWrap: "wrap",
  },
  backTextWhite: {
    color: "#FFF",
  },
  rowFront: {
    alignItems: "center",
    backgroundColor: "white",
    borderBottomColor: "black",
    borderBottomWidth: 1,
    justifyContent: "center",
    height: 50,
    width: "100%",
  },
  rowBack: {
    alignContent: "flex-end",
    backgroundColor: "#DDD",
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-between",
    paddingLeft: 15,
    width: "100%",
  },
  backRightBtn: {
    alignItems: "center",
    bottom: 0,
    justifyContent: "center",
    position: "absolute",
    top: 0,
    width: 75,
  },
  backRightBtnLeft: {
    backgroundColor: "blue",
    right: 75,
  },
  backRightBtnRight: {
    backgroundColor: "red",
    right: 0,
  },
});

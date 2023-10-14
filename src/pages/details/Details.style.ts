import colors from "@src/styles/Colors";
import fonts from "@src/styles/Font";
import { StyleSheet } from "react-native";

export default StyleSheet.create({
  container: {
    flex: 1,
  },
  header: {
    backgroundColor: colors.primary,
    paddingTop: 25,
    paddingBottom: 25,
  },
  body: {
    flex: 1,
    backgroundColor: "white",
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    marginTop: -25,
  },
  deleteButton: {
    width: "90%",
    height: 40,
    borderRadius: 5,
    alignSelf: "center",
    backgroundColor: "red",
    justifyContent: "center",
    alignItems: "center",
  },
  deleteButtonText: {
    fontFamily: fonts.bold,
    fontSize: 18,
    color: "white",
  },
  updateButton: {
    marginTop: 20,
    width: "90%",
    height: 40,
    borderRadius: 5,
    alignSelf: "center",
    backgroundColor: colors.secondary,
    justifyContent: "center",
    alignItems: "center",
  },
  updateButtonText: {
    fontFamily: fonts.bold,
    fontSize: 18,
    color: "black",
  },
  modal: {
    justifyContent: "flex-end",
    margin: 0,
  },
});

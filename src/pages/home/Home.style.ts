import colors from "@src/styles/Colors";
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
  modal: {
    justifyContent: "flex-end",
    margin: 0,
  },
});

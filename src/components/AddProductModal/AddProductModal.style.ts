import colors from "@src/styles/Colors";
import fonts from "@src/styles/Font";
import { StyleSheet } from "react-native";

export default StyleSheet.create({
  modal: {
    backgroundColor: "white",
    borderTopRightRadius: 10,
    borderTopLeftRadius: 10,
  },
  modalBody: {
    marginVertical: 20,
  },
  modalText: {
    textAlign: "center",
    fontSize: 20,
    fontFamily: fonts.regular,
    marginBottom: 20,
  },
  input: {
    height: 40,
    margin: 12,
    borderWidth: 0.5,
    borderRadius: 5,
    padding: 10,
  },
  inputLabel: {
    marginLeft: 15,
  },
  inputBlocks: {
    marginBottom: 15,
  },
  button: {
    backgroundColor: colors.secondary,
    marginBottom: 10,
    paddingVertical: 15,
    width: "60%",
    alignSelf: "center",
    borderRadius: 5,
    borderColor: colors.primary,
    borderWidth: 1.5,
    alignItems: "center",
    justifyContent: "center",
  },
  buttonText: {
    fontSize: 18,
    fontFamily: fonts.bold,
  },
});

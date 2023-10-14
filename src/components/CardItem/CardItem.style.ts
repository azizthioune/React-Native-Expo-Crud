import colors from "@src/styles/Colors";
import fonts from "@src/styles/Font";
import { StyleSheet } from "react-native";

export default StyleSheet.create({
  cardItem: {
    marginVertical: 10,
    backgroundColor: "white",
    padding: 5,
    borderRadius: 10,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.3,
    shadowRadius: 2,
    elevation: 3,
    borderColor: "#00000030",
    width: "90%",
    alignSelf: "center",
  },
  image: {
    backgroundColor: colors.primary,
    width: "100%",
    height: 230,
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
  },
  cardBottom: {
    paddingHorizontal: 5,
    marginTop: 20,
    marginBottom: 15,
  },
  cardBottomText: {
    fontSize: 18,
    fontFamily: fonts.regular,
    width: "80%",
  },
  cardFirstRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  cardBadge: {
    backgroundColor: colors.secondary,
    paddingHorizontal: 10,
    height: 30,
    borderRadius: 30,
    justifyContent: "center",
    alignItems: "center",
  },
  cardBadgeText: {
    fontSize: 14,
    fontFamily: fonts.regular,
  },
  cardSecondRow: {
    marginTop: 10,
  },
  cardSecondRowText: {
    fontSize: 20,
    fontFamily: fonts.bold,
  },
});

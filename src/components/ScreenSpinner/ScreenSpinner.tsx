import React from "react";
import { ActivityIndicator, Text, View } from "react-native";
import styles from "./ScreenSpinner.style";
import colors from "@src/styles/Colors";

export const ScreenSpinner: React.FC = () => {
  return (
    <View style={styles.container}>
      <ActivityIndicator size={"large"} color={colors.primary} />
    </View>
  );
};

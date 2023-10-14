import { ActivityIndicator, StyleSheet, Text, View } from "react-native";
import {
  Montserrat_500Medium,
  Montserrat_700Bold,
} from "@expo-google-fonts/montserrat";
import { useFonts } from "expo-font";
import AppNavigator from "@src/router/AppNavigator";
import { useMemo } from "react";

export default function App() {
  let [fontsLoaded] = useFonts({
    Montserrat_500Medium,
    Montserrat_700Bold,
  });

  const shouldLoad = useMemo(() => !fontsLoaded, [fontsLoaded]);

  if (shouldLoad) {
    return (
      <View style={styles.container}>
        <ActivityIndicator size={"large"} color={"white"} />
      </View>
    );
  }

  return <AppNavigator></AppNavigator>;
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});

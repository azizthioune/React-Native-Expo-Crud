import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import SceneKeys from "@src/Constants/sceneKeys";
import { Details } from "@src/pages/details/Details";
import { Home } from "@src/pages/home/Home";
import { ApolloProvider } from "@apollo/client";
import useAppNavigator from "./AppNavigator.hook";
import { ScreenSpinner } from "@src/components/ScreenSpinner/ScreenSpinner";

export type AppStackParamList = {
  [SceneKeys.Home]: undefined;
  [SceneKeys.Details]: {
    productId: string;
    name: string;
    code: string;
    price: number;
    currency: string;
  };
};

const Stack = createNativeStackNavigator<AppStackParamList>();

const AppNavigator = () => {
  const h = useAppNavigator();
  const client = h.client;

  if (!client) {
    return <ScreenSpinner />;
  }

  return (
    <NavigationContainer>
      <ApolloProvider client={client}>
        <Stack.Navigator>
          <Stack.Screen
            name={SceneKeys.Home}
            component={Home}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name={SceneKeys.Details}
            component={Details}
            options={{ headerShown: false }}
          />
        </Stack.Navigator>
      </ApolloProvider>
    </NavigationContainer>
  );
};

export default AppNavigator;

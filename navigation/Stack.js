import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { CardStyleInterpolators } from "@react-navigation/stack";
import Search from "../screens/Search";
import Tabs from "./Tabs";
// import { Modal } from "react-native";

const Stack = createStackNavigator();

export default () => (
  <Stack.Navigator
    // mode={Modal}
    screenOptions={{
      // headerStatusBarHeight: 30,
      cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS,
      headerStyle: {
        backgroundColor: "#5234bf",
      },
      headerTitleAlign: "center",
      headerTintColor: "white",
      headerBackTitleVisible: false,
      gestureEnabled: true,
    }}
  >
    <Stack.Screen name="Tabs" component={Tabs}></Stack.Screen>
    <Stack.Screen name="Search" component={Search}></Stack.Screen>
  </Stack.Navigator>
);

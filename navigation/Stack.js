import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { CardStyleInterpolators } from "@react-navigation/stack";
import Search from "../screens/Search";
import SignupScreen from "../screens/SignupScreen";
import SigninScreen from "../screens/SigninScreen";
import Detail from "../screens/Detail";

import Tabs from "./Tabs";
// import { Modal } from "react-native";

const Stack = createStackNavigator();

export default () => (
  <Stack.Navigator
    // mode={Modal}
    screenOptions={{
      // headerStatusBarHeight: 5,
      // headerTransparent: true,
      cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS,
      headerStyle: {
        backgroundColor: "#5234bf",
        
        // height: 50,
      },
      headerTitle:null,
      headerTitleAlign: "center",
      headerTintColor: "white",
      headerBackTitleVisible: false,
      gestureEnabled: false,
      headerShown: true,
      headerTransparent: true,
      headerLeft: null
    }}>
    <Stack.Screen
      name="SignIn"
      component={SigninScreen}
      options={{ headerShown: false }}></Stack.Screen>
    <Stack.Screen name="SignUp" component={SignupScreen} options={{ headerShown: false }}></Stack.Screen>
    <Stack.Screen name="Tabs" component={Tabs} options={{ headerShown: true }}></Stack.Screen>
    <Stack.Screen name="Detail" component={Detail}></Stack.Screen>
    <Stack.Screen name="Search" component={Search} options={{ headerShown: false }}></Stack.Screen>
  </Stack.Navigator>
);

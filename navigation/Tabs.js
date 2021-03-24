import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { getFocusedRouteNameFromRoute } from "@react-navigation/native";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { AntDesign } from "@expo/vector-icons";
import { useLayoutEffect } from "react";
import QRgen from "../screens/QRgen";
import QRscan from "../screens/QRscan";
import Upbit from "../screens/Upbit";
import Home from "../screens/Home";

const Tabs = createBottomTabNavigator();

export default ({ navigation, route }) => {
  // console.log(route?.state?.routeNames)
  useLayoutEffect(() => {
    const routeName = getFocusedRouteNameFromRoute(route) ?? "Home";
    navigation.setOptions({ title: routeName });
  }, [route]);

  return (
    <Tabs.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused }) => {
          if (route.name === "QR Code Generator") {
            return (
              <MaterialCommunityIcons
                name="qrcode"
                size={28}
                color={focused ? "white" : "grey"}
              />
            );
          } else if (route.name === "QR Code Scan") {
            return (
              <MaterialCommunityIcons
                name="qrcode-scan"
                size={28}
                color={focused ? "white" : "grey"}
              />
            );
          } else if (route.name === "Setting") {
            return (
              <AntDesign
                name="setting"
                size={28}
                color={focused ? "white" : "grey"}
              />
            );
          } else if (route.name === "Home") {
            return (
              <AntDesign
                name="home"
                size={28}
                color={focused ? "white" : "grey"}
              />
            );
          }
        },
      })}
      tabBarOptions={{
        showLabel: false,
        style: {
          backgroundColor: "#5234bf",
        },
      }}>
      <Tabs.Screen name="Home" component={Home}></Tabs.Screen>
      <Tabs.Screen name="QR Code Generator" component={QRgen}></Tabs.Screen>
      <Tabs.Screen name="QR Code Scan" component={QRscan}></Tabs.Screen>
      <Tabs.Screen name="Setting" component={Upbit}></Tabs.Screen>
    </Tabs.Navigator>
  );
};

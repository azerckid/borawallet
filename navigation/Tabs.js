import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { getFocusedRouteNameFromRoute } from "@react-navigation/native";
import QRgen from "../screens/QRgen";
import Bithum from "../screens/Bithum";
import Upbit from "../screens/Upbit";
import Home from "../screens/Home";
import { FontAwesome5, MaterialCommunityIcons } from "@expo/vector-icons";
import { AntDesign } from "@expo/vector-icons";
import { useLayoutEffect } from "react";

const Tabs = createBottomTabNavigator();

export default ({ navigation, route }) => {
  // console.log(route?.state?.routeNames)
  useLayoutEffect(() => {
    const routeName = getFocusedRouteNameFromRoute(route) ?? "Borabit";
    navigation.setOptions({ title: routeName });
  }, [route]);

  return (
    <Tabs.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused }) => {
          console.log(route.name);
          if (route.name === "QRgen") {
            return (
              <MaterialCommunityIcons
                name="qrcode"
                size={28}
                color={focused ? "white" : "grey"}
              />
            );
          } else if (route.name === "Bithum") {
            return (
              <MaterialCommunityIcons
                name="qrcode-scan"
                size={28}
                color={focused ? "white" : "grey"}
              />
            );
          } else if (route.name === "Upbit") {
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
      <Tabs.Screen name="QRgen" component={QRgen}></Tabs.Screen>
      <Tabs.Screen name="Bithum" component={Bithum}></Tabs.Screen>
      <Tabs.Screen name="Upbit" component={Upbit}></Tabs.Screen>
    </Tabs.Navigator>
  );
};

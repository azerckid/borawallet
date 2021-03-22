import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { getFocusedRouteNameFromRoute } from "@react-navigation/native";
import Borabit from "../screens/Borabit";
import Bithum from "../screens/Bithum";
import Upbit from "../screens/Upbit";
import { FontAwesome5, MaterialCommunityIcons } from "@expo/vector-icons";

import { useLayoutEffect } from "react";

const Tabs = createBottomTabNavigator();

// const getHeaderName = (route) => {
//   return route?.state?.routeNames[route?.state?.index] || "Borabit";
// };

// export default ({ navigation, route }) => {
//   useLayoutEffect(() => {
//     navigation.setOptions({
//       title: getHeaderName(route),
//     });
//   }, [route]);

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
          if (route.name === "Borabit") {
            return (
              <FontAwesome5
                name="bitcoin"
                size={28}
                color={focused ? "white" : "grey"}
              />
            );
          } else if (route.name === "Bithum") {
            return (
              <MaterialCommunityIcons
                name="alpha-b-circle-outline"
                size={28}
                color={focused ? "white" : "grey"}
              />
            );
          } else if (route.name === "Upbit") {
            return (
              <MaterialCommunityIcons
                name="alpha-u-circle-outline"
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
      <Tabs.Screen name="Borabit" component={Borabit}></Tabs.Screen>
      <Tabs.Screen name="Bithum" component={Bithum}></Tabs.Screen>
      <Tabs.Screen name="Upbit" component={Upbit}></Tabs.Screen>
    </Tabs.Navigator>
  );
};

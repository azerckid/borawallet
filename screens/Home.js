import React from "react";
import { View, Text, StyleSheet } from "react-native";

const styles = StyleSheet.create({
  baseText: {
    fontFamily: "Cochin",
  },
  titleText: {
    color: "#2b92ff",
    fontSize: 20,
    fontWeight: "bold",
    textAlign: "center",
  },
});

export default ({ navigation }) => {
  return (
    <View style={{ backgroundColor: "white" }}>
      <Text>home</Text>
      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-around",
          marginTop: 20,
        }}></View>
    </View>
  );
};
